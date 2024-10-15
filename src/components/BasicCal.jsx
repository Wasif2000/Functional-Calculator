import React, { useState } from 'react'

const BasicCal = () => {
  const [a ,setA] = useState(null)
  const [b ,setB] = useState(null)
  const [optr ,setOptr] = useState(null)
  const[result ,setResult] = useState(null)


  const hndler = () =>{
    let x ;
    if (optr==="+") {
      x = a + b;
    }else if(optr==="-"){
      x = a - b;
    }else if (optr==="*"){
      x = a * b;
    }else{
      x = "Please enter a valid numb..."
    }
    setResult(x)
  }
  return (

    <div>

      <input type="number" value={a} onChange={(e)=>{setA(Number(e.target.value))}}/>
      <input type="number" value={b} onChange={(e)=>{setB(Number(e.target.value))}}/>
      <button onClick={()=>setOptr("+")}>+</button>
      <button onClick={()=>setOptr("-")}>-</button>
      <button onClick={()=>setOptr("*")}>*</button>

      <button onClick={hndler}>calculate</button>
      <h2>result : {result}</h2>
    </div>
  )
}

export default BasicCal