import React, { useState } from 'react';
import { GrPowerReset } from "react-icons/gr"; // Import the icon

const Practice = () => {
  const [inputs, setInputs] = useState({ x: '', y: '' });
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]); // Store history of calculations

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isNaN(value)) {
      setError(`Please enter a valid number in ${name}`);
    } else {
      setError('');
      setInputs((prev) => ({ ...prev, [name]: value }));
    }
  };

  const calculateResult = (operator) => {
    const { x, y } = inputs;
    const numX = parseFloat(x);
    const numY = parseFloat(y);

    if (isNaN(numX) || isNaN(numY)) {
      setError('Both fields must contain numbers');
      return;
    }

    let calcResult;
    switch (operator) {
      case '+':
        calcResult = numX + numY;
        break;
      case '-':
        calcResult = numX - numY;
        break;
      case '*':
        calcResult = numX * numY;
        break;
      case '/':
        calcResult = numY !== 0 ? numX / numY : 'Cannot divide by zero';
        break;
      default:
        calcResult = 'Invalid operation';
    }

    setResult(calcResult);

    // Save the history of calculation
    setHistory((prev) => [
      ...prev,
      { x: numX, y: numY, operator, result: calcResult },
    ]);

    setInputs({ x: '', y: '' }); // Clear input fields after calculation
  };

  const clearAll = () => {
    setInputs({ x: '', y: '' });
    setResult(null);
    setError('');
  };

  const clearHistory = () => {
    setHistory([]); // Clear the history
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-300">
        <h1 className="text-2xl font-bold mb-6 text-center">Generic Calculator</h1>

        {/* Input fields */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {['x', 'y'].map((name) => (
            <div key={name}>
              <input
                className="p-3 border border-gray-300 rounded-md text-center focus:outline-none focus:border-blue-500"
                value={inputs[name]}
                name={name}
                onChange={handleInputChange}
                placeholder={`Enter ${name === 'x' ? 'first' : 'second'} number`}
              />
            </div>
          ))}
        </div>

        {/* Error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Operator buttons */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {['+', '-', '*', '/'].map((operator) => (
            <button
              key={operator}
              className="px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-xl"
              onClick={() => calculateResult(operator)}
            >
              {operator}
            </button>
          ))}
        </div>

        {/* Clear button */}
        <div className="grid grid-cols-1 gap-4 mb-4">
          <button
            className="px-4 py-3 bg-red-200 text-black rounded-md hover:bg-red-900"
            onClick={clearAll}
          >
            C
          </button>
        </div>

        {/* Result */}
        <h2 className="text-2xl font-bold text-center mt-6">Result: {result}</h2>

        {/* Calculation History Section with Clear History Button */}
        <div className="mt-8 flex items-center justify-between">
          <h3 className="text-xl font-semibold mb-4">Calculation History:</h3>

          {/* Clear History Button with GrPowerReset Icon */}
          <button
            className="flex items-center justify-center p-2 rounded-full"
            onClick={clearHistory}
            title="Clear History"
          >
            {/* Using GrPowerReset Icon */}
            <GrPowerReset className="w-6 h-6 bg-white"  />
          </button>
        </div>

        {/* Calculation History */}
        <div className="mt-4">
          <ul className="list-disc pl-6">
            {history.map((entry, index) => (
              <li key={index} className="mb-2">
                {entry.x} {entry.operator} {entry.y} = {entry.result}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Practice;
