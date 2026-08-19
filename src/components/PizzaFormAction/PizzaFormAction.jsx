import { useActionState, useState } from "react"

// action avec useActionState
async function exampleOrder(prevState, formData) {
    const sizePizza = formData.get("sizePizza");
    const typePizza = formData.get("typePizza");

    if (typePizza ==="3" && sizePizza==="large") {
        return {message: "Cette combinaison de choix n'est plus disponible"}
    }

    console.log(typePizza, sizePizza);
    // suite des opérations
    return {message: "Commande s'est bien passé."}
}

export default function PizzaFormControl() {

    const pizzas = [
        {
            id:1,
            name:"margarita"
        },
        {
            id:2,
            name:"regina"
        },
        {
            id:3,
            name:"capricciosa"
        }
    ];

    // action fonctionnant hors du useActionState
    // const exampleOrder = (formData) => {
    //     const sizePizza = formData.get("sizePizza");
    //     const typePizza = formData.get("typePizza");

    //     console.log(typePizza, sizePizza);
    //     // suite des opérations
    //     // opération d'envoie des données par exemple
    //     return {message: "Commande s'est bien passé."}
    // }

    

    const [state, handleAction, isPending] = useActionState(exampleOrder, {message:""})

    

    return (
        // se base plus sur l'objet formData
        <form action={handleAction}>
            <label htmlFor="typePizza">Choississez votre pizza:</label>
            <select name="typePizza" id="typePizza" defaultValue={"2"}>
                {pizzas.map(pizza => <option key={pizza.id} value={pizza.id}>{pizza.name}</option>)}
            </select><br />

            <label htmlFor="sizePizzaLarge">Large</label>
            <input type="radio" name="sizePizza" value="large" id="sizePizzaLarge"/>
            <label htmlFor="sizePizzaMedium">Medium</label>
            <input type="radio" name="sizePizza" value="medium" id="sizePizzaMedium" defaultChecked={true}/>
            <label htmlFor="sizePizzaSmall">Small</label>
            <input type="radio" name="sizePizza" value="small" id="sizePizzaSmall"/>
            <br />

            <input type="submit" value="Commander"/>

            {state.message && (<p>{state.message}</p>)}
        </form>
    )
}