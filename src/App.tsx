import { useState } from 'react';
import './App.css'
import CurrencyList from './CurrencyList'

function App() {
const currencies = CurrencyList()
const [selectedCurrency, setSelectedCurrency] = useState<string>("AED");

const handlesubmit = () =>{

}
  return (
    <>
    <form>
      <label> Value in GBP</label>
      <input></input>
      <label> Currency </label>
      <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          {currencies &&
            Object.entries(currencies.data).map(([key, currency]) => (
              // console.log(key, currency.value)
              <option key={key} value={key}>
                {currency.code} {currency.value}
              </option>
            ))}
        </select>
{/* currencies is of type TopLevel, which is an object, not an array. 
Therefore, map doesn’t exist on TopLevel. The map method is for arrays, 
but currencies.data is an object with currency codes as keys (AED, AFN, etc.), 
so you need to iterate over it using Object.entries() instead of map() directly. */}

      <button onClick={handlesubmit}> Convert </button>
    </form>
    <div>
      Result
    </div>
    </>
  )
} 

export default App
