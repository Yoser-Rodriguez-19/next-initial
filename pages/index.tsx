import { NextPage, GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';


interface Props {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<Props> = ({ pokemons }) => {

  // console.log(pokemons);

  return (
    <Layout title='Listado de pokemon'>
        
        <Grid.Container gap={ 2 } justify='flex-start'>
          {
            pokemons.map((pokemon) => (
              <PokemonCard 
                key={ pokemon.id }
                pokemon={ pokemon } 
                  
              />
            ))
          }
        </Grid.Container>

    </Layout>
  )
}


// el getStaticProps es una función que se ejecuta en el servidor y solo se puede usar en las páginas
export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke, // para traerme los datos que ya tiene
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))
  

  return {
    props: {
      pokemons: pokemons
    }
  }
}

export default HomePage;
