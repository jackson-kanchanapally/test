import { useState } from "react"
export default function Task(props){
    const [item,setItem]=useState('')
    const [val,setVal]=useState([])
    const addItem=()=>{
        // setItem([{
        //     id:item.length,
        //     value:Math.floor(Math.random()*10)+1
        // },...item])
        setItem([{
            id:item.length,
            value:val,
        },...item])
        setVal('')
    }
   
    return (
        <>
        
            <input type="text" onChange={e=>setVal(e.target.value)} value={val} />
            <button onClick={addItem} >add</button>
            <ul>
                {[...item].map(it=>(
                    <div key={it.id} style={{display:'flex',justifyContent:'center'}} >
                    <li>{it.value}</li> <button
                    style={{marginLeft:'10px'}}>x</button>
                    <p>{props.ups}</p>
                    
                    </div>
                ))}
                <hr/>
            </ul>
        </>
    )
}