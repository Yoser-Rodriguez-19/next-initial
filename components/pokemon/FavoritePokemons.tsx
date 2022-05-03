import { Grid, Card } from '@nextui-org/react'
import { FC } from 'react';
import { FavoriteCardPokemon } from '../../components/pokemon';

interface Props {
    pokemons: number[]
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {

    // console.log(pokemons);

  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>

        {
            
            pokemons.map( (id) => (
              <FavoriteCardPokemon pokemonId={ id } key={id} />
            ))
        }


    </Grid.Container>
  )
}
