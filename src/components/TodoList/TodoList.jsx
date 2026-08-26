import { useEffect, useState } from "react"
import TodoListItem from "../TodoListItem/TodoListItem"
import styles from './TodoList.module.css'

export default function TodoList ({tachesRecues, onTachesChanges= () => {}}) {
    const [taches, setTaches] = useState(tachesRecues)

    useEffect(()=> setTaches(tachesRecues), [tachesRecues]);

    const handleTacheTerminee = (index) => {
        taches[index].estFini = true;

        let newList = [...taches];
        setTaches(newList);
        onTachesChanges(newList);
    }
    const handleTacheSupprimee = (index) => {
        let newList = taches.toSpliced(index,1)
        setTaches(newList);
        onTachesChanges(newList);
    }

    return (
        <>
            <h2>Liste des tâches</h2>
            {
                !taches || taches.length < 1 ?
                <p>Il n'y a pas de tâches</p>:
                <ul className={styles.listTaches}>
                    {
                        taches.map((tache,index) => 
                            <TodoListItem 
                                key={index}
                                tache={tache}
                                index={index}
                                onTacheSupprimee={handleTacheSupprimee}
                                onTacheTerminee={handleTacheTerminee}
                            />)
                    }
                </ul>
            }
        </>
    )
}