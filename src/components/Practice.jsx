import React, { useState } from 'react';

const Practice = () => {
  const [optr, setOptr] = useState(null);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [result, setResult] = useState(null);

  const handle = () => {
    let a;
    if (optr === "+") {
      a = x + y;
    } else if (optr === "-") {
      a = x - y;
    } else if (optr === "*") {
      a = x * y;
    } else if (optr === "/") {
      a = x / y;
    } else {
      a = "Give a valid number...";
    }
    setResult(a);
  };

  const Clear = () => {
    setOptr(null);   
    setX(null);   
    setY(null);     
    setResult(null); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Simple Calculator</h1>
      <div className="mb-4 space-x-2">
        <input
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={x || ''} 
          onChange={(e) => setX(Number(e.target.value))}
          type="number"
          placeholder="Enter first number"
        />
        <input
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={y || ''}  
          onChange={(e) => setY(Number(e.target.value))}
          type="number"
          placeholder="Enter second number"
        />
      </div>
      <div className="mb-4 space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => setOptr("+")} >+</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          onClick={() => setOptr("-")}>-</button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          onClick={() => setOptr("*")}>*</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          onClick={() => setOptr("/")}>/</button>
        <button className="px-4 py-2 bg-red-200 text-white rounded-md hover:bg-red-900"
          onClick={Clear}>C</button>
      </div>
      <button className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 mb-4"
        onClick={handle}>Calculate</button>
      <h2 className="text-xl">Result: {result}</h2>
    </div>
  );
};

export default Practice;
