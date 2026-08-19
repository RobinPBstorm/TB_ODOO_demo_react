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

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <PizzaFormControl/> */}
      <PizzaFormAction/>
    </>
  )
}

