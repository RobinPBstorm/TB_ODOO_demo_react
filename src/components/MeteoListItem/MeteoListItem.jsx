export default function MeteoListItem({nom, onMeteoSend = ()=>{}}) {

    const handleMeteo = () => {
        const random = Math.floor(Math.random() * 2);

        let message = "";
        switch(random) {
            case 0:
                message = `${nom} a dit : Il fait trop chaud!`;
                break;
            case 1:
                message = `${nom} a dit : Il pleut trop!`;
                break;
            default:
                message = `${nom} a dit : ça va`;
                break;
        }
        onMeteoSend(message);
    }

    return (
        <li>
            <p>{nom}</p>
            <button onClick={handleMeteo}>Faire sa météo</button>
        </li>
    )
}