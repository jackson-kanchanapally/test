import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Ap() {
  const [data, setData] = useState(null);
  const [u, setU] = useState('');

  useEffect(() => {
    
    const encodedParams = new URLSearchParams();
    encodedParams.set('url', 'www.google.com');
    
    const options = {
      method: 'POST',
      url: 'https://www.virustotal.com/api/v3/urls',
      headers: {
        accept: 'application/json',
        'x-apikey': '46d0089678863c9842a0b2e60e485654a5f9f55cb81099732df63d5e394475e8',
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: encodedParams,
    };
   
    axios
      .request(options)
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, [u]);

  return (
    <div>
        <input type='text' value={u} onChange={(e)=>setU(e.target.value)}/>
      {data ? (
        <p>{JSON.stringify(data)}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
