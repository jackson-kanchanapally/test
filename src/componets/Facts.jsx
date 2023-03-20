import { useState } from "react"
export default function Facts(){
    const val=0
    const [st,setSt]=useState(val)
    const [name,setName]=useState({firstName:'',lastName:''})
    return (
        <>
        <h1>{st}</h1>
        <button onClick={()=>setSt(prev=>prev+1)}>increment</button>
        <button onClick={()=>setSt(prev=>prev-1)}>decrement</button>
        <button onClick={()=>setSt(val)}>reset</button>
        <form>
            {/* <input type="text"
            value={name.firstName}
            onChange={e=>setName({firstName:e.target.value})}
            />
            <input type="text"
            value={name.lastName}
            onChange={e=>setName({lastName:e.target.value})}
            /> */}
            <input type="text"
            value={name.firstName}
            onChange={e=>setName({...name,firstName:e.target.value})}
            />
            <input type="text"
            value={name.lastName}
            onChange={e=>setName({...name,lastName:e.target.value})}
            />
            <h2>{name.firstName} {name.lastName}</h2>
           
        </form>
        </>
    )
}