import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MessageDisplay from './components/MessageDisplay'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>La liste des messages</p>
      <MessageDisplay name="Zorro" msg="Encore une journée qui se termine Bernardo."></MessageDisplay>
      <MessageDisplay name="Bernardo"></MessageDisplay>
      <MessageDisplay></MessageDisplay>
    </>
  )
}

