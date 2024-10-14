import React, { useState } from 'react'

const Practice = () => {
    const[optr ,setOptr] = useState("+")
    const[x ,setX] = useState(0)
    const[y ,setY] = useState(0)
    const [result ,setResult] = useState(null)
    const handle=()=>{
        let a ;
        if (optr==="+") {
            a = x + y;
        }else if(optr==="-"){
            a = x - y;
        }else if(optr==="*"){
            a = x * y;
        }else{
            a = "give a solid numb..."
        }
        setResult(a)
    }

  return (
    <>
    <input
    value={x}
    onChange={(e)=>e.target.value}
    type="number" />
    <input
    value={y}
    onChange={(e)=>e.target.value}
    type="number" />
    <button
    onClick={handle}
    >plus</button>
    <p>Result : {optr}</p>
    </>
  )
}

export default Practice