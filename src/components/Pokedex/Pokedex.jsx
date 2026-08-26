import { useState } from "react"
import { getPokemon } from "../../services/pokemon.service"

export default function Pokedex () {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = () => {
        setLoading(true);
        setData(null);
        setError(null);

        getPokemon("grimerre")
            .then(pokemon => setData(pokemon))
            .catch(error => {handleError(error)})
            .finally(() => setLoading(false));

        const handleError = (error) => {
            setError(error.toString());
        }

    }

    return (
        <>
            <button onClick={handleClick}>Go grotadmorv!</button>
            {
                isLoading ?
                <p>Pokemon en cours de capture</p>:
                <p>
                    {
                        data? 
                        data.name : 
                        error
                    }
                </p>
            }
        </>
    )
}