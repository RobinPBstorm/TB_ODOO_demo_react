import { useState } from "react";

export default function Counter () {
    // pas de nouveau rendu créé => pas de mise à jour de l'affichage
    //let count = 0;

    // déclenche un nouveau rendu au changement de valeur via setCount
    const [count, setCount] = useState(0)


    const handleClick = () => {
        //count++;
        setCount(count+1);
        console.log(count);
    }

    return (
        <div>
            <p>Le compte est actuellement à {count}</p>
            <button onClick={handleClick}>Cliquer ici</button>
        </div>
    )
}