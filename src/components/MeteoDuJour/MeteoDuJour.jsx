import { useState } from "react";
import MeteoListItem from "../MeteoListItem/MeteoListItem";

export default function MeteoDuJour() {
    const personnes = [
        "Robin",
        "Mattis",
        "François"
    ]

    const [message, setMessage] = useState("")


    const handleMeteoSend = (messageRecu) => {
        setMessage(messageRecu);
    }

    return(
        <section>
            {
                message && message != "" ?
                <p>{message}</p> :
                <p>Il n'y a pas de message à afficher</p>
            }
            <ul>
                {personnes.map(personne => <MeteoListItem nom={personne} onMeteoSend={handleMeteoSend}/>)}
            </ul>

        </section>
    );
}