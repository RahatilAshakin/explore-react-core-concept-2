import { useState } from "react"

export default function Counter(){
    const [count, setCount] =useState(0)
    // console.log(abc);
    const HandleAdd=()=>{
        const newCount=count+1
        setCount(newCount)
    }
    const HandleReduce=()=>{
        const newCount=count-1
        setCount(newCount)
    }
    return (
        <div style={{border:'2px solid yellow'}}>
            <h3>Counter: {count} </h3>
            <button onClick={HandleAdd}>Add</button>
            <button onClick={HandleReduce}>Reduce</button>
        </div>
    )
}