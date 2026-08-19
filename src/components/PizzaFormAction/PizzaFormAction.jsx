import { useActionState, useState, useEffect } from "react"

// action avec useActionState
async function exampleOrder(prevState, formData) {
    const sizePizza = formData.get("sizePizza");
    const typePizza = formData.get("typePizza");

    // simuler le temps d'attente
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // suite des opérations

    if (typePizza ==="3" && sizePizza==="large") {
        return {
            sizePizza : sizePizza,
            typePizza : typePizza, 
            message : "Cette combinaison de choix n'est plus disponible" }
    }
    
    return {
        sizePizza : sizePizza,
        typePizza : typePizza,
        message : "Commande s'est bien passé."
    }
}

export default function PizzaFormAction() {

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

    // mes valeurs par défaut
    const initialValue = {
        typePizza: "2",
        sizePizza: "medium"
    }
    const [state, handleAction, isPending] = useActionState(exampleOrder, {...initialValue, message : ""});
    // pour forcer le reset du select avec une nouvelle valeur par défaut
    const [formKey, setFormKey] = useState(Date.now());

    // réagit à la mise à jour du state pour modifier la key
    useEffect(() => {
        setFormKey(Date.now());
    }, [state]);

    return (
        // se base plus sur l'objet formData
        <form action={handleAction}>
            <label htmlFor="typePizza">Choississez votre pizza:</label>
            <select name="typePizza" id="typePizza" key={formKey} defaultValue={state.typePizza ?? "2"}>
                {pizzas.map(pizza => <option key={pizza.id} value={pizza.id}>{pizza.name}</option>)}
            </select><br />

            <label htmlFor="sizePizzaLarge">Large</label>
            <input type="radio" name="sizePizza" value="large" id="sizePizzaLarge"  defaultChecked={state.sizePizza === "large"}/>
            <label htmlFor="sizePizzaMedium">Medium</label>
            <input type="radio" name="sizePizza" value="medium" id="sizePizzaMedium" defaultChecked={state.sizePizza === "medium"}/>
            <label htmlFor="sizePizzaSmall">Small</label>
            <input type="radio" name="sizePizza" value="small" id="sizePizzaSmall"  defaultChecked={state.sizePizza === "small"}/>
            <br />

            <input type="submit" value="Commander" disabled={isPending}/>

            {state.message && (<p>{state.message}</p>)}
        </form>
    )
}