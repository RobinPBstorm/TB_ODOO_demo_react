import { useState } from "react";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoList from "../../components/TodoList/TodoList";

export default function TodoListPage () {

    const [taches, setTaches] = useState([]);

    const handleTacheCreated = (tache) => {
        let newList = [
            ...taches,
            tache
        ];
        setTaches(newList);
    }

    const handleTachesChange = (taches) => {
        setTaches(taches);
    }

    return (
        <>
            <h1>Ma liste de tâche</h1>
            <TodoForm onTacheCreated={handleTacheCreated}/>
            <TodoList tachesRecues={taches} 
                onTachesChanges={handleTachesChange}
            />
        </>
    )
}