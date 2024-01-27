import { useState } from 'react'
import './App.css'
import DisplayData from './Redux/DisplayData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DisplayData />
    </>
  )
}

export default App
