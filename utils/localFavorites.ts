


const toggleFavorite = (id: number) => {

    // console.log('toggleFavorite Llamado');

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        // si ese arreglo tiene ese id lo quitamos
        favorites = favorites.filter(pokeId => pokeId !== id); // esto regregsa un nuevo arreglo sin el pokemon
    } else {
        favorites.push(id); // si ese arreglo no incluye ese id pues lo insertamos
    }


    localStorage.setItem('favorites', JSON.stringify(favorites)); // convertimos el objeto a su representacion como string


}


// verificamos si el pokemon esta en favoritos // y le decimos que regresa un valor booleano
const existPokemonInFavorites = (id: number): boolean => {

    if ( typeof window === 'undefined') return false; // si no esta definido el window regresa false por que no tendriamos el localStorage y dara error

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes(id); // esto devuelve, si ese id esta en el arreglo es true o false si no esta
}



// regresa un arreglo de numeros de los pokemons favoritos
const pokemons = (): number[] => {

    return JSON.parse(localStorage.getItem('favorites') || '[]');

}






const exportedFunctions = { toggleFavorite, existPokemonInFavorites, pokemons };
 
export default exportedFunctions;
