import { useState } from "react"
export default function Links(props){
    const[hover,setHover]=useState(false)
    const handleMO=(e)=>{
        setHover(true)
        e.target.style.color='red'
    }
    const handleML=(e)=>{
        setHover(false)
        e.target.style.color='skyblue'
    }
    
    return <a href={props.href} style={{color:'skyblue',fontSize:'25px',padding:'25px',textDecoration:'none'}} onMouseOver={handleMO} onMouseLeave={handleML}>{props.text}</a>
}