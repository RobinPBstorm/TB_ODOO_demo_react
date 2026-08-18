import styles from "./MessageDisplay.module.css"

export default function MessageDisplay({name, msg="reste silencieux"}) {

    // if (name) {
    //     return (
    //         <p>{name}: {msg}</p>
    //     );
    // }
    // else {
    //     return (
    //         <p>Vous avez oublié de fournir un nom</p>
    //     )
    // }
    return (
        <>
            {
                name ?
                (<p className={styles.messageValide}>{name}: {msg}</p>):
                (<p className={styles.messageErreur}>Vous avez oublié de fournir un nom</p>)
            }
        </>
    )
}