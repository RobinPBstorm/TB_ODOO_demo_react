import OdooListItem from "../OdooListItem/OdooListItem"

export default function OdooList () {
    const group = [
        "Arnaud",
        "François",
        "Loïc",
        "Mara",
        "Louis",
        "Hugo",
        "Gillian",
        "Mattis",
        "Ben",
        "Emmanuel",
        "Maxime",
        "Théo"
    ]

    return (
        <div>
            <ul>
                {group.map((person, index) => <OdooListItem key={index} name={person}/>)}
            </ul>
        </div>
    )
}