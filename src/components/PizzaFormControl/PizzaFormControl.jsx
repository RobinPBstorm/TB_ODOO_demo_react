import { useState } from "react"

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
    ]

    const [data, setData] = useState({typePizza: "2", sizePizza: "medium"})

    const handleInput = (event) => {
        const {name, type, value, checked} = event.target;
        console.log(name, value, typeof value)
        setData(data => ({
                ...data,
                [name]: value 
            })
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // opération d'envoie des données
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="typePizza">Choississez votre pizza:</label>
            <select name="typePizza" id="typePizza" onChange={handleInput} value={data.typePizza}>
                {pizzas.map(pizza => <option key={pizza.id} value={pizza.id}>{pizza.name}</option>)}
            </select><br />

            <label htmlFor="sizePizzaLarge">Large</label>
            <input type="radio" name="sizePizza" value="large" id="sizePizzaLarge" onChange={handleInput} checked={data.sizePizza==="large"}/>
            <label htmlFor="sizePizzaMedium">Medium</label>
            <input type="radio" name="sizePizza" value="medium" id="sizePizzaMedium" onChange={handleInput} checked={data.sizePizza==="medium"}/>
            <label htmlFor="sizePizzaSmall">Small</label>
            <input type="radio" name="sizePizza" value="small" id="sizePizzaSmall" onChange={handleInput} checked={data.sizePizza==="small"}/>
            <br />

            <input type="submit" value="Commander"/>
        </form>
    )
}