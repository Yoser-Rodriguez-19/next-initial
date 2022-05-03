import { useEffect, useState } from 'react';
import { NextPage, GetStaticProps } from 'next'
import { Button, Card, Grid, Row, Text, Container, Image } from '@nextui-org/react';

import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../../interfaces';
import { PokemonCard, FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';




const FavoritosPage = () => {


  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);


  useEffect(() => {

    setfavoritePokemons( localFavorites.pokemons );

  }, [])
  


  return (
    <Layout title='Favoritos'>

      {
        favoritePokemons.length === 0 
          ? (<NoFavorites />)
          : ( < FavoritePokemons pokemons={favoritePokemons} />)
      }
      
      

    </Layout>
  )
}

export default FavoritosPage;