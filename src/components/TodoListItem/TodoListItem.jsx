import styles from './TodoListItem.module.css'

export default function TodoListItem({tache, index, onTacheTerminee=()=>{}, onTacheSupprimee=()=>{}}) {

    const classTache = () => {
        let style = "";
        switch(tache.priorite) {
            case "Basse":
                style = `${styles.tache} ${styles.tacheBasse}`;
                break;
            case "Normal":
                style = `${styles.tache} ${styles.tacheNormale}`;
                break;
            case "Urgent":
                style = `${styles.tache} ${styles.tacheUrgente}`;
                break;
            default:
                style = `${styles.tache}`;
                break;
        }

        if (tache.estFini) {
            style += ` ${styles.tacheFinie}`;
        }

        return style;
    }

    const handleSupprimer = () => {
        onTacheSupprimee(index);
    }    
    const handleTerminer = () => {
        onTacheTerminee(index);
    }

    return (
        <li id={index} className={classTache()}>
            <div>
                <h3>{tache.nom}</h3>
                {
                    tache.description && tache.description != "" ?
                    <p>{tache.description}</p>:
                    <p></p>
                }
            </div>
            <div>
                <button onClick={handleTerminer}>Terminer</button>
                <button onClick={handleSupprimer}>Supprimer</button>
            </div>
        </li>
    )
}