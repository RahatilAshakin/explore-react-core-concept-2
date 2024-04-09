import { useState } from "react"

export default function Team(){
    const [team, setTeam]= useState(11)


    const TeamStyle ={
        border:'4px solid purple',
        margin: '17px',
        padding: '17px',
        borderRadius:'40px'
    }
    const HandleAdd =()=>{
        const newTeam = team + 1
        setTeam( newTeam)
    }
    const HandleRemove=()=>{
        const newTeam=team-1
        setTeam(newTeam)
    }

    return(
        <div style={TeamStyle}>

                <h3>Players: {team} </h3>
                <button onClick={HandleAdd}>Add</button>
                <button onClick={HandleRemove}>Remove</button>


        </div>
    )
}