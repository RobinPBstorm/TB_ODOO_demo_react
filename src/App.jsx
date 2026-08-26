import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MessageDisplay from './components/MessageDisplay/MessageDisplay'
import Welcome from './components/Welcome/Welcome'
import Counter from './components/Counter/Counter'
import Timer from './components/Timer/Timer'
import OdooList from './components/OdooList/OdooList'
import ProductList from './components/ProductList/ProductList'
import PizzaFormControl from './components/PizzaFormControl/PizzaFormControl'
import PizzaFormAction from './components/PizzaFormAction/PizzaFormAction'
import CalculatriceControl from './components/CalculatriceControl/CalculatriceControl'
import MeteoDuJour from './components/MeteoDuJour/MeteoDuJour'
import TodoList from './pages/TodoList/TodoListPage';
import CycleDeVieComposant from './components/cycleDeVieComposant/cycleDeVieComposant'
import Pokedex from './components/Pokedex/Pokedex';
import PokedexUse from './components/PokedexUse/PokedexUse'

export default function App() {

  return (
    <>
      {/* <TodoList/> */}
      {/* <CycleDeVieComposant/> */}
      {/* <Pokedex/> */}
      <PokedexUse/>
    </>
  )
}

