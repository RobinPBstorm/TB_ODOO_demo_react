# HOW TO React JS

- [Pré-requis](#pré-requis-nodejs)
- [Créer un projet React](#créer-un-projet-react)
- [Créer notre premier composant](#créer-notre-premier-composant)
- [Passage de paramètre dans un composant](#passage-de-paramètre-dans-un-composant)
- [Le rendu conditionnel](#le-rendu-conditionnel)
- [Changer le style dans un composant](#changer-le-style-dans-un-composant)

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

##


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
