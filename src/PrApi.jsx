import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PrApi()
{
    const [data,setData]=useState([])
    useEffect(()=>{
        const fD=async ()=>{
            const res= await axios.get('https://kontests.net/api/v1/all')
            setData(res.data)
        }
        fD()
    },[])
return(
<>
{data.map(i=>(
    <div key={i.name}>{i.name}</div>
))}
</>
)
}