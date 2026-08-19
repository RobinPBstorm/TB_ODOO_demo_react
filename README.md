# HOW TO React JS

- [Pré-requis](#pré-requis-nodejs)
- [Créer un projet React](#créer-un-projet-react)
- [Créer notre premier composant](#créer-notre-premier-composant)
- [Passage de paramètre dans un composant](#passage-de-paramètre-dans-un-composant)
- [Le rendu conditionnel](#le-rendu-conditionnel)
- [Changer le style dans un composant](#changer-le-style-dans-un-composant)
- [Les collections](#les-collections)

- [Ressources auto-généré](#ressources-auto-généré)


## Pré-requis NodeJS

Installer NodeJS [ici](https://nodejs.org/en/download)

## Créer un projet React

```bash
npm create vite@latest
```

Un prompt va s'ouvrir avec différentes questions:

│
◇  Project name:
│  .
(. donne le nom du dossier parent au projet)
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Which linter to use?
│  ESLint
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in C:\mon\chemin\de\fichier\demo-react...
│
◇  Installing dependencies with npm...


## Créer notre premier composant

Créer un fichier jsx

```jsx
export default function NomDuComposant () {
    return (
        <p>Hello World!</p>
    )
} 
```

Et on l'appel comme ceci dans un composant parent:

```jsx
<div>
    <NomDuComposant>
</div>
```

## Passage de paramètre dans un composant

On peut définir les paramètres via le déstucturing (conseillé)

```jsx
export default function CardProduct ({id, name, srcImage}) {

    return (
        <div id={"product"+id}>
            <h1>{name}</h1>
            <img src={srcImage}>
        </div>
    );
}
```

## Le rendu conditionnel

### Soit if avec un return pour chacun des chemins

```jsx
if (name) {
    return (
        <p>{name}: {msg}</p>
    );
}
else {
    return (
        <p>Vous avez oublié de fournir un nom</p>
    )
}
```

### Soit via des ternaires

```jsx
return (
    <>
        {
            name ?
            (<p>{name}: {msg}</p>):
            (<p>Vous avez oublié de fournir un nom</p>)
        }
    </>
)
```

## Changer le style dans un composant

Créer un fichier .css

importer ce fichier dans le composant
```jsx
import "./MonComposant.css"

export default function MonComposant () {
    ...
}
```

#Si nous souhaitons utiliser des classes / id css uniquement applicable sur notre composant:#

Notre fichier css aura comme extension #.module.css#

```jsx
import styles from "./MonComposant.module.css"

export default function MonComposant () {
    ...
    <p className={styles.maClasse}></p>
}
```

## Jouer avec les événements

/!\ les événements sont en lower camel case

```jsx
<button onClick={handleClick}>Cliquer ici</button>
```

Par convention, la fonction flechée sera nommé handleEvent

```jsx
// exemple pour handleClick
let count = 0
const handleClick = () => {
    count++;
    console.log(count);
}
```

S'il y a un changement, cela n'apparaîtera pas car l'affichage ne s'actualisera pas.

## Les collections

On va pouvoir afficher les éléments d'une collection grace à la function map
```jsx
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
                {group.map((person, index) => <li key={index} name={person}/>)}
            </ul>
        </div>
    )
}
```

/!\ Une key doit être être fournie avec une valeur unique et stable pour chaque élément.
L'usage de l'index d'une liste doit être utilisé en cas de dernier recours (des effets de bord sont dés leur possible).

## La gestion des formulaires

### Les composants contrôlés

On exploit un useState (soit global/ soit un par input que l'on va remplir) et on détecte les changements dans chaque inputs pour les appliquer dans notre state.

On termine avec un handle dédié pour le submit.

```jsx
// gestion générale des changements dans les inputs
const handleInput = (event) => {
    const {name, type, value, checked} = event.target;
    console.log(name, value, typeof value)
    setData(data => ({
            ...data,
            [name]: value 
        })
    );
}

// gestion de l'event de submit du formulaire
const handleSubmit = (event) => {
    event.preventDefault();

    // opération d'envoie des données
    console.log(data);
}

return (
        // association de notre handleSubmit à l'event onSumbit
        <form onSubmit={handleSubmit}>
            <label htmlFor="typePizza">Choississez votre pizza:</label>
            <select 
                name="typePizza" 
                id="typePizza"
                // association du handleInput à l'évent du changement de valeur de cette input 
                onChange={handleInput} 
                value={data.typePizza}>
                {
                    pizzas.map(
                        pizza => 
                            <option 
                                key={pizza.id} 
                                value={pizza.id}>
                                {pizza.name}
                            </option>)
                }
            </select><br />

            ...

            <input type="submit" value="Commander"/>
        </form>
    )
```



### Les actions du composant form

Depuis la version 19 de react, on peut jouer avec des actions.

Les actions sont des fonctions exploitant le formData (représentation sous forme d'objet js du formulaire).

Un useActionState est un hook qu actualise un state en utilisant une action

```jsx
// action déclencher lors submit
async function exampleOrder(prevState, formData) {
    const sizePizza = formData.get("sizePizza");
    const typePizza = formData.get("typePizza");

    //validaton des valeurs ...
    ...
    
    return {
        message : "Commande s'est bien passé."
    }
}


export default function PizzaFormAction() {
    const [state, handleAction, isPending] = useActionState(exampleOrder, {message : ""});

    return (
        // se base plus sur l'objet formData
        // cette action agit lors du submit
        <form action={handleAction}>
            <label htmlFor="typePizza">Choississez votre pizza:</label>
            <select 
                name="typePizza" 
                id="typePizza">
                    {
                        pizzas.map(
                            pizza => 
                                <option 
                                    key={pizza.id} 
                                    value={pizza.id}>{pizza.name}</option>
                    )}
            </select><br />

            ...

            <input type="submit" value="Commander" disabled={isPending}/>

            {state.message && (<p>{state.message}</p>)}
        </form>
    )
}
```


## Ressources auto-généré:

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

#### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

#### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
