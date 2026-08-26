import { useEffect, useState } from "react"

export default function CycleDeVieComposant() {

    const [count, setCount] = useState(0);

    useEffect(()=> {
        console.log("Bienvenue à l'ouverture de ce composant")
        
        return () => {console.log("Au revoir, c'est ici que l'on perd notre composant.")}
    }, [])

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <>
            <p>Hello world</p>
            <button onClick={handleClick}>{count}</button>
        </>
    )
}