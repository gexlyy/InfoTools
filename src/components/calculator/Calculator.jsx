import  { useState } from 'react';
import './Calculator.css';
import { Math } from './Math';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const numbers = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
  };

  const handleNumberClick = (number) => {
    if (inputValue.length < 10) {
      setInputValue((prevValue) => prevValue + number);
    }
  };

  const handleOperation = (op) => {
    if (inputValue === '') return; // Предотвращаем установку оператора, если ничего не введено
    setFirstValue(inputValue);
    setOperator(op);
    setInputValue('');
  };

  const calculate = () => {
    if (!operator || firstValue == null || inputValue === '') return; // Проверка всех необходимых значений

    const result = Math[operator](
      parseFloat(firstValue),
      parseFloat(inputValue)
    );
    setInputValue(String(result));
    setOperator(null); // Сброс оператора после расчета
    setFirstValue(null);
  };

  const clearInput = () => {
    setInputValue('');
    setFirstValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator-main">
      <div className="calculator-result">
        <input type="text" value={inputValue} placeholder={inputValue} readOnly />
      </div>
      <div className="calculator-numbers-box">
        <ul className="calculator-numbers-1stRow">
          <li>
            <button
              className="calc-button-math"
              onClick={() => handleOperation('add')}
            >
              +
            </button>
          </li>
          <li>
            <button
              className="calc-button"
              onClick={() => handleNumberClick(numbers[7])}
            >
              {numbers[7]}
            </button>
          </li>
          <li>
            <button
              className="calc-button"
              onClick={() => handleNumberClick(numbers[8])}
            >
              {numbers[8]}
            </button>
          </li>
          <li>
            <button
              className="calc-button"
              onClick={() => handleNumberClick(numbers[9])}
            >
              {numbers[9]}
            </button>
          </li>
        </ul>
        <ul className="calculator-numbers-2dRow">
          <li>
            <button
              className="calc-button-math"
              onClick={() => handleOperation('subtract')}
            >
              -
            </button>
          </li>
          <li>
            <button
              className="calc-button"
              onClick={() => handleNumberClick(numbers[4])}
            >
              {numbers[4]}
            </button>
          </li>
          <li>
            <button
              className="calc-button"
              onClick={() => handleNumberClick(numbers[5])}
            >
              {numbers[5]}
            </button>
          </li>
          <li>
            <button
              className="calc-button"
              onClick={() => handleNumberClick(numbers[6])}
            >
              {numbers[6]}
            </button>
          </li>
        </ul>
        <ul className="calculator-numbers-3dRow">
          <li>
            <button
              className="calc-button-math"
              onClick={() => handleOperation('multiply')}
            >
              *
            </button>
          </li>
          <li>
            <button
              className="calc-button"
              onClick={() => handleNumberClick(numbers[1])}
            >
              {numbers[1]}
            </button>
          </li>
          <li>
            <button
              className="calc-button"
              onClick={() => handleNumberClick(numbers[2])}
            >
              {numbers[2]}
            </button>
          </li>
          <li>
            <button
              className="calc-button"
              onClick={() => handleNumberClick(numbers[3])}
            >
              {numbers[3]}
            </button>
          </li>
        </ul>
        <ul className="calculator-numbers-4thRow">
          <li>
            <button
              className="calc-button-math"
              onClick={() => handleOperation('divide')}
            >
              /
            </button>
          </li>
          <li>
            <button
              className="calc-button"
              onClick={() => handleNumberClick(numbers[0])}
            >
              {numbers[0]}
            </button>
          </li>
          <li>
            <button className="calc-button-math" onClick={clearInput}>
              C
            </button>
          </li>
          <li>
            <button className="calc-button-math" onClick={calculate}>
              =
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
