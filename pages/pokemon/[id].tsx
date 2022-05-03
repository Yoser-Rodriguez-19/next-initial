import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Card, Grid, Text, Button, Container, Image } from '@nextui-org/react';

import confetti from 'canvas-confetti'

import { Layout } from '../../components/layouts'
import pokeApi from '../../api/pokeApi';
import { Pokemon } from '../../interfaces/pokemon-full';
import { localFavorites } from '../../utils';
import { getPokemonInfo } from '../../utils/gitPokemonInfo';


interface Props {

  
  pokemon: Pokemon;

} 

const PokemonPage: NextPage<Props> = ({pokemon}) => {

  //mantenemos un estado inicial de el pokemon
  const [isInFavorites, setIsInFavorites] = useState( localFavorites.existPokemonInFavorites(pokemon.id) );

  
  // console.log(pokemon);
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if ( isInFavorites ) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })

  }

  // console.log(localStorage.getItem('favorites')); // aqui se ejecuta de el lado de el banckend y no tenemos el localStore, por eso da error


  return (
    <Layout title={ pokemon.name }>
  
      <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
        <Grid xs={ 12 } sm={ 4 }>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={ pokemon.sprites.other?.dream_world?.front_default || '/no-image.png' }
                alt={ pokemon.name }
                width='100%'
                height={ 200 }
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={ 12 } sm={ 8 }>
          <Card>
            <Card.Header css={ { display: 'flex', justifyContent: 'space-between' } }>
              <Text h1 transform='capitalize'>
                {pokemon.name}
              </Text>
              <Button
                onClick={ onToggleFavorite }
                color="gradient"
                ghost={ !isInFavorites }
              >
                { isInFavorites ? 'Quitar de favoritos' : 'Agregar a favoritos' }
              </Button>
            </Card.Header>

            <Card.Body>

              <Text size={30}> Sprites: </Text>

              <Container direction='row' display='flex'gap={ 0 }>
                <Image 
                  src={ pokemon.sprites.front_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.back_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.front_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.back_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
              </Container>

            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>


    </Layout>
  )
}


// esto se ejecuta de el lado de el servidor y en el buildtime
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(151)].map((value, index) => `${ index + 1 }` ) // creo un arreglo con 151
  // console.log(pokemons151);

  return {
    //la cantidad de paths que tengamos es la cantidad de paginas que va a generar en el buildtime de la aplicacion
    paths: pokemons151.map((id) => ({ 
      params: { id } 
    })),
    // paths: [
    //   {
    //     params: {
    //       id: '1',
    //     }
    //   },
    //   {
    //     params: {
    //       id: '2',
    //     }
    //   }
    // ],
    fallback: false // asi le decimos que de un 404 si el path no esta definido 
  }
}

// luego que se ejecuta el getStaticPaths pasa a getStaticProps, entonces ya tenemos esos parametros


// traer la data estatica desde el servidor
// los params vienen a en el context
export const getStaticProps: GetStaticProps = async (ctx) => {

  const { id } = ctx.params as { id: string }; // le decimos que los parametros van a lucir como un id de tipo string
  

  return {
    props: {
      pokemon: await getPokemonInfo( id )
    }
  }
}






export default PokemonPage