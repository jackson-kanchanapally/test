import React from "react"
import axios from 'axios'
import { useState,useEffect } from "react";
export default function UserE(){
    const [state,setState]=useState([])
    const [load,setLoad]=useState(true)
    const [search,setSearch]=useState('')
  
//   useEffect(async ()=>{
//     const res=await fetch('https://official-joke-api.appspot.com/random_joke');
//     const data=await res.json();
//     const item=data.id;
//     setState(item);
//   },[state])
useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(res=>{
        console.log(res.data)
        setState(res.data)
        setLoad(!load)
    })
    .catch(err=>{
        console.log(err)
    })
},[])

   return (
        <>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        {/* {load?<h1>loading</h1>:
            state.map(st=>(
                <div key={st.id}>
                <p>{st.id}</p>
                <p>{st.current_price}</p>
                <img src={st.image} alt="" />
                </div>
            ))
        } */}
       
        {
           
            state.filter(so=>
                so.symbol==search.toLowerCase()
                )
                .map(st=>(
                <div key={st.id}>
                <p>{st.id}</p>
                <p>{st.current_price}</p>
                <img src={st.image} alt="" />
                </div>
            )
         
            )
        }
        </>
    )
}