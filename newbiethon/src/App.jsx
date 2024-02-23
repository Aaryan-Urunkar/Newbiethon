import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import {Addpage} from './components/Addpage/Addpage'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Addpage/>
    </>
  )
}

export default App
