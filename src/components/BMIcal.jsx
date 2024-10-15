import React, { useState } from 'react'

const BMIcal = () => {
    const [a ,setA] = useState(null)
    const [b ,setB] = useState(null)
    const[bmi ,setBmi] = useState(null)
    const[message ,setMessage] = useState(null)


    const handler = (e) =>{
        e.preventDefault();
        if (a=== 0 || b=== 0) {
            alert("Enter a Solid Value")
        }else {
            let x = (a/(b*b)*703).toFixed(2)
            setMessage(x)
        }
    }

  return (
    <div>
        <form >
            <div>
        <input type="number" placeholder='Enter weight' value={a} onChange={(e)=>setA(Number(e.target.value))}/>
        <input type="number" placeholder='Enter Height' value={b} onChange={(e)=>setB(Number(e.target.value))}/>

        </div>
        <div>
            <button onClick={handler}>Get BMI</button>
            <h2>result : {message}</h2>
        </div>
        </form>

    </div>
  )
}

export default BMIcal