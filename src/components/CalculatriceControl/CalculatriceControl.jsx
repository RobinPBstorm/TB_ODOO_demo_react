import { useState } from "react";

export default function CalculatriceControl() {

    const initialValue = {
        nb1 : '',
        operator : '+',
        nb2 : '',
        result: ''
    }
    const [data, setData] = useState(initialValue);

    const handleSubmit = (event) => {
        event.preventDefault()

        // validation pour nb1 et nb2

        let result;
        switch (data.operator) {
            case '+':
                result = parseInt(data.nb1) + parseInt(data.nb2);
                break;
            case '-':
                result = parseInt(data.nb1) - parseInt(data.nb2);
                break;
            case '/':
                result = parseInt(data.nb1) / parseInt(data.nb2);
                break;
            case '*':
                result = parseInt(data.nb1) * parseInt(data.nb2);
                break;
        }
            
        setData(data => ({...data, result}));
    }

    const handleInput = (event) => {
        const {name, value, id} = event.target;

        // validation pour certain input
        if ((id === "inputNb1" || id === "inputNb2") && isNaN(value)) {
            //event.target.value = ""
            return;
        } 

        setData( data => ({
            ...data,
            [name]: value
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="inputNb1">Nb 1: </label>
            <input type="text" 
                name="nb1" 
                id="inputNb1" 
                onChange={handleInput}
                value={data.nb1}/>

            <label htmlFor="inputOperation">Nb 1: </label>
            <select id="inputOperation" onChange={handleInput}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>
            </select>

            <label htmlFor="inputNb2">Nb 2: </label>
            <input 
                type="text" 
                name="nb2" 
                id="inputNb2" 
                onChange={handleInput}
                value={data.nb2}/>

            <button type="submit">calculer</button>

            <input type="text" placeholder="..." readOnly value={data.result}/>
        </form>
    )
}