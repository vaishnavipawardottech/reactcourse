import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter >= 20) {
      alert('Counter cannot be greater than 20')
      return
    }
    setCounter((prevcounter) => prevcounter + 1)
  }

  const removeValue = () => {
    if (counter <= 0) {
      alert('Counter cannot be less than 0')
      return
    }
    setCounter((prevcounter) => prevcounter - 1)
  }

  return (
    <>
      <h1>Starting the hooks</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>

    </>
  )
}

export default App
