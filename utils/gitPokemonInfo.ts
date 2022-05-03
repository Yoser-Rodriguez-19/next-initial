import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';


export const getPokemonInfo = async (nameOrId: string)=> { // ahora aqui con el fallback: 'blocking' podemos recibir un nombre o un string que no existe y tenemos que validar

  try {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`); // le decimos que la data va a ser de tipo any
  
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };

  } catch (error) {
    
    return null; // esto va a hacer que nuestra app regrese una promesa que resuelve el id name y sprite o un null

  }
  
}