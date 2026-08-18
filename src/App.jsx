import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MessageDisplay from './components/MessageDisplay/MessageDisplay'
import Welcome from './components/Welcome/Welcome'
import Counter from './components/Counter/Counter'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
    </>
  )
}

