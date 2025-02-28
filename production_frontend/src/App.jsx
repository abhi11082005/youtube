import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Login from './components/authentication/Login'
import FloatingInput from './components/ui_component/Input'
import Register from './components/authentication/Resister'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Register/>
    </>
  )
}

export default App
