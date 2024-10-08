import { useState } from 'react';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const currencies = [
    { value: 'USD', label: 'US Dollar', flag: 'https://flagcdn.com/us.svg' },
    { value: 'EUR', label: 'Euro', flag: 'https://flagcdn.com/eu.svg' },
    { value: 'RUB', label: 'Russian Ruble', flag: 'https://flagcdn.com/ru.svg' },
    { value: 'BYN', label: 'Belarusian Ruble', flag: 'https://flagcdn.com/by.svg' },
    { value: 'UAH', label: 'Ukrainian Hryvnia', flag: 'https://flagcdn.com/ua.svg' },
    { value: 'PLN', label: 'Polski zloty', flag: 'https://flagcdn.com/pl.svg' },
  ];

  const [fromCurrency, setFromCurrency] = useState(currencies[0]);
  const [toCurrency, setToCurrency] = useState(currencies[1]);
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');
  const [isFromOpen, setIsFromOpen] = useState(false);
  const [isToOpen, setIsToOpen] = useState(false);

  const toggleFromDropdown = () => setIsFromOpen(!isFromOpen);
  const toggleToDropdown = () => setIsToOpen(!isToOpen);

  const selectFromCurrency = (currency) => {
    setFromCurrency(currency);
    setIsFromOpen(false);
  };

  const selectToCurrency = (currency) => {
    setToCurrency(currency);
    setIsToOpen(false);
  };

  const handleConvert = async () => {
    if (!amount) {
      alert('Please enter an amount to convert');
      return;
    }
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency.value}`);
      const data = await response.json();
      const conversionRate = data.rates[toCurrency.value];
      const conversionResult = (amount * conversionRate).toFixed(2);
      setResult(conversionResult);
    } catch (error) {
      console.error("Error fetching exchange rate data:", error);
      alert("Failed to fetch conversion rate. Please try again later.");
    }
  };

  return (
    <div className="currency-main">
      <div className="amount-convert">
        <span>Amount to convert:</span>
        <input type="number" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>

      <div className="convert-from">
        <span>From:</span>
        <div className="input-container">
          <div className="input-wrapper" onClick={toggleFromDropdown}>
            <img src={fromCurrency.flag} alt={`${fromCurrency.label} flag`} className="currency-flag" />
            <input
              type="text"
              placeholder="Select currency"
              className="input-with-currency"
              readOnly
              value={`${fromCurrency.value}`}
            />
          </div>
          {isFromOpen && (
            <ul className="dropdown-list">
              {currencies.map((currency) => (
                <li key={currency.value} onClick={() => selectFromCurrency(currency)}>
                  <img src={currency.flag} alt={`${currency.label} flag`} className="dropdown-flag" />
                  {currency.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="convert-to">
        <span>To:</span>
        <div className="input-container">
          <div className="input-wrapper" onClick={toggleToDropdown}>
            <img src={toCurrency.flag} alt={`${toCurrency.label} flag`} className="currency-flag" />
            <input
              type="text"
              placeholder="Select currency"
              className="input-with-currency"
              readOnly
              value={`${toCurrency.value}`}
            />
          </div>
          {isToOpen && (
            <ul className="dropdown-list">
              {currencies.map((currency) => (
                <li key={currency.value} onClick={() => selectToCurrency(currency)}>
                  <img src={currency.flag} alt={`${currency.label} flag`} className="dropdown-flag" />
                  {currency.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="convert-btn">
        <button onClick={handleConvert}>Submit</button>
      </div>

      <div className="convert-result">
        <span>Result:</span>
        <input type="text" readOnly value={result} />
      </div>
    </div>
  );
};

export default CurrencyConverter;
