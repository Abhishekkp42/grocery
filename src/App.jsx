import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Grocery } from './components/Grocery'
import { GroceryInput } from './components/GroceryInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Home</h1>
      <Routes>
        <Route path='/' element={ <Grocery /> }></Route>
        <Route path='/form' element={ <GroceryInput /> }></Route>
      </Routes>
    </div>
  )
}

export default App
