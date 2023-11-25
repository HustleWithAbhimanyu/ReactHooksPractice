import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateHook from './UseState/StateHook'
import StateHookText from './UseState/StateHookText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <StateHook/>
      <StateHookText/>
    </>
  )
}

export default App
