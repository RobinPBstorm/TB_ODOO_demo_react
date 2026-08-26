import { useState } from "react";
import { Tache } from "../../models/tache";

export default function TodoForm({ onTacheCreated = () => {} }) {

    const newTache = () => new Tache("","Basse", "");

    const [tache, setTache] = useState(newTache());

    const priorites = [
        "Basse",
        "Normal",
        "Urgent" 
    ]

    const handleInput = (event) => {
        const {name, value} = event.target;

        setTache( tache => ({
            ...tache,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onTacheCreated(tache);
        setTache(newTache());
    }

    return (
        <>
            <h2>Ajouter une nouvelle tâche</h2>
            <form 
                onSubmit={handleSubmit}
            >
                <label htmlFor="nom">Nom: </label>
                <input 
                    type="text" 
                    name="nom" 
                    value={tache.nom} 
                    onChange={handleInput} 
                />
                <br/>
            
                <label htmlFor="decription">Description: </label>
                <textarea 
                    id="description" 
                    name="description" 
                    value={tache.description ?? ""}
                    onChange={handleInput}
                />
                <br/>

                <label htmlFor="priorite">Priorité: </label>
                <select 
                    id="priorite"
                    name="priorite"
                    value={tache.priorite}
                    onChange={handleInput}
                >
                    {
                        priorites.map((priorite, index) => 
                            <option
                                key={index} 
                                value={priorite}
                            >
                                {priorite}
                            </option>
                        )
                    }
                    
                </select>

                <button type="submit">Ajouter</button>
            </form>
        </>
    );

}