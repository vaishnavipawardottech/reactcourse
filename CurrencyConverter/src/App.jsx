import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
 

function App() {
  const [amount, setAmount] = useState(0)

  return (
    <>
      <h1 className='bg-orange-500'>Currency Converter using react</h1>
    </>
  )
}

export default App
