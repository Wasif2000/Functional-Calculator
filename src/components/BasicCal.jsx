import React, { useState } from 'react';

const BasicCal = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState("+");

  const handleCalculation = () => {
    let res;
    if (operator === "+") {
      res = a + b;
    } else if (operator === "-") {
      res = a - b;
    } else if (operator === "*") {
      res = a * b;
    } else {
      res = "Error";
    }
    setResult(res);
  };

  return (
    <div className='p-4'>
      <input 
        type="number" 
        value={a} 
        onChange={(e) => setA(Number(e.target.value))} 
        placeholder="Enter first number"
        className='mr-2 p-1 border'
      />
      <select onChange={(e) => setOperator(e.target.value)} className='mr-2 p-1 border'>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
      </select>
      <input 
        type="number" 
        value={b} 
        onChange={(e) => setB(Number(e.target.value))} 
        placeholder="Enter second number"
        className='mr-2 p-1 border'
      />
      <button onClick={handleCalculation} className='p-2 bg-blue-500 text-white'>
        Calculate
      </button>
      {result !== null && <p className='mt-2'>Result: {result}</p>}
    </div>
  );
};

export default BasicCal;
