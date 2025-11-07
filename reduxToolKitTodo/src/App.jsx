import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <>
        <div className='flex items-center justify-center h-screen bg-gray-500 w-screen flex-col'>
          <h1>Learn about redux toolkit</h1>
          <AddTodo />
          <Todos />
        </div>
    </>
  )
}

export default App
