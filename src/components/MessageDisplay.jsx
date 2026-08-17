import "./MessageDisplay.css"

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
                (<p className="messageValide">{name}: {msg}</p>):
                (<p className="messageErreur">Vous avez oublié de fournir un nom</p>)
            }
        </>
    )
}