import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';


export const getPokemonInfo = async (nameOrId: string)=> {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`); // le decimos que la data va a ser de tipo any
  
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  
}