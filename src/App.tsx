import { useState } from 'react';
import './App.css'
import CurrencyList from './CurrencyList'

function App() {
const currencies = CurrencyList()
const [selectedCurrency, setSelectedCurrency] = useState<string>("");
const [valuegbp, setValuegbp]= useState<number>(0)
const [result, setResult] = useState<number | null>(null)

const handleConvert = () =>{
  if (!currencies || !currencies.data[selectedCurrency]) {
    alert("Currency data not available.");
    return;
  }
  const conversionRate = currencies?.data[selectedCurrency].value
  // console.log(conversionRate)
  setResult(valuegbp * conversionRate)
}
  return (
    <>
    <form onSubmit={(e) => e.preventDefault()}>
      <label> Value in GBP</label>
      <input 
      type="number"
      value={valuegbp} 
      onChange={(e) => setValuegbp(parseFloat(e.target.value))}>
      </input>
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

      <button type="button" onClick={handleConvert}> Convert </button>
    </form>
    <div>
    {result !== null ? <p>{result}</p> : <p>No result yet</p>}
    </div>
    </>
  )
} 

export default App
