import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateHook from './UseState/StateHook'
import StateHookText from './UseState/StateHookText'
import ReducerPractice from './Reducer/Reducer'
import EffectPractice from './Effect/EffectPractice'
import RefHook from "./RefHook/RefHook"
import LayoutEffect from './LayoutEffect/LayoutEffect'
import MainContainer from './ContextAPI/mainContainer'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <StateHook/> */}
       {/* <StateHookText/>   */}
      {/* <ReducerPractice/>  */}
      {/* <EffectPractice/> */}
      {/* <RefHook/> */}
      {/* <LayoutEffect/> */}
      <MainContainer/>
    </>
  )
}

export default App
