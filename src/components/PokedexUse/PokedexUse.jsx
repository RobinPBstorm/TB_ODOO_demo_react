//react-error-boundary
import { ErrorBoundary } from "react-error-boundary";

import { Suspense, use, useMemo, useState } from "react";
import { getPokemon } from "../../services/pokemon.service";

export default function PokedexUse() {

    const [nom, setNom] = useState("grimerre");
    const promise = useMemo(() => getPokemon(nom), [nom]);

    return (
        <Suspense fallback={<p>pokemon en cours de capture</p>}>
            <ErrorBoundary fallback={<p>pokemon non trouvé</p>}>
                <InnerPokedexUse pokemonPromise={promise}/>
            </ErrorBoundary>
        </Suspense>
    )
}

function InnerPokedexUse ({pokemonPromise}) {

    const data = use(pokemonPromise);

    return (
        <p>
        {
            data ?
            data.name:
            "pas de donnée à afficher"
        }
        </p>
    )
}