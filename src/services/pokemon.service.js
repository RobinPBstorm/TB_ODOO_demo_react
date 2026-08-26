const urlPokeAPI = 'https://pokeapi.co/api/v2/pokemon/'

export async function getPokemon(name) {
    const url = `${urlPokeAPI}${name}`;
    return await fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            else {
                throw new Error("Pokémon non trouvé");
            }
        });
}