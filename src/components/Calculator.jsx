import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');  // Single input field to hold all values and result
  const [operator, setOperator] = useState('');
  const [firstValue, setFirstValue] = useState(null);

  // Append value to input field
  const appendValue = (value) => {
    setInput((prev) => prev + value);
  };

  // Set operator and store the first value
  const handleOperator = (optr) => {
    setFirstValue(parseFloat(input));
    setOperator(optr);
    setInput('');  // Clear input for second value
  };

  // Calculate and show result in input field
  const calculateResult = () => {
    const secondValue = parseFloat(input);
    let result;

    if (operator === '+') {
      result = firstValue + secondValue;
    } else if (operator === '-') {
      result = firstValue - secondValue;
    } else if (operator === '*') {
      result = firstValue * secondValue;
    } else if (operator === '/') {
      result = firstValue / secondValue;
    } else if (operator === '%') {
      result = firstValue % secondValue;
    } else {
      result = 'Error';
    }

    setInput(result.toString());  // Display result in input field
  };

  // Clear the input and reset calculator
  const clearInput = () => {
    setInput('');
    setOperator('');
    setFirstValue(null);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-6">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-4 text-lg border border-gray-300 rounded text-right bg-gradient-to-r from-gray-200 via-gray-100 to-white"
            placeholder="0"
          />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[...Array(10).keys()].map((num) => (
            <button
              key={num}
              onClick={() => appendValue(num.toString())}
              className="p-5 bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xl rounded-lg hover:from-blue-600 hover:to-blue-800"
            >
              {num}
            </button>
          ))}
          <button onClick={() => appendValue('.')} className="p-5 bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xl rounded-lg hover:from-blue-600 hover:to-blue-800">
            .
          </button>
          <button onClick={() => handleOperator('+')} className="p-5 bg-gradient-to-br from-green-500 to-green-700 text-white text-xl rounded-lg hover:from-green-600 hover:to-green-800">
            +
          </button>
          <button onClick={() => handleOperator('-')} className="p-5 bg-gradient-to-br from-green-500 to-green-700 text-white text-xl rounded-lg hover:from-green-600 hover:to-green-800">
            -
          </button>
          <button onClick={() => handleOperator('*')} className="p-5 bg-gradient-to-br from-green-500 to-green-700 text-white text-xl rounded-lg hover:from-green-600 hover:to-green-800">
            *
          </button>
          <button onClick={() => handleOperator('/')} className="p-5 bg-gradient-to-br from-green-500 to-green-700 text-white text-xl rounded-lg hover:from-green-600 hover:to-green-800">
            /
          </button>
          <button onClick={calculateResult} className="p-5 bg-gradient-to-br from-red-500 to-red-700 text-white text-xl rounded-lg col-span-2 hover:from-red-600 hover:to-red-800">
            =
          </button>
          <button onClick={() => handleOperator('%')} className="p-5 bg-gradient-to-br from-green-500 to-green-700 text-white text-xl rounded-lg hover:from-green-600 hover:to-green-800">
            %
          </button>
          <button onClick={clearInput} className="p-5 bg-gradient-to-br from-gray-500 to-gray-700 text-white text-xl rounded-lg col-span-2 hover:from-gray-600 hover:to-gray-800">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
