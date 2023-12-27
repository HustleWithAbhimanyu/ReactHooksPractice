import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateHook from './UseState/StateHook'
import StateHookText from './UseState/StateHookText'
import ReducerPractice from './Reducer/Reducer'
import EffectPractice from './Effect/EffectPractice'
import RefHook from "./RefHook/RefHook"


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <StateHook/> */}
       {/* <StateHookText/>   */}
      {/* <ReducerPractice/>  */}
      {/* <EffectPractice/> */}
      <RefHook/>
    </>
  )
}

export default App
