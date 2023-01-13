import React from 'react'
import {useNavigate} from 'react-router-dom'
import "./card.css"

export default function Card(){
    let navigate=useNavigate()
    return(
        <div className="main-1"> 
<button  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} type="button" className="btn btn-info my-3" onClick={()=>{
navigate('/form')
}}>Create New Card</button>
        </div>
    )
}