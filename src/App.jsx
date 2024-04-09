import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  
  function HandleClick(){
    alert('button Clicked');
  }
  const HandleClick2 = () => {
    alert('button -2 Chap diso?')

  }

  return (
    <>
      <div>
         {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      

      <h3>React Core Concept-2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={HandleClick}>Click Me</button>
      <button onClick={HandleClick2}>Click Me -2</button>
      <button onClick={()=>(alert('Third Time You Clicked'))}>Click Me-3</button>
   
    </>
  )
}

export default App
