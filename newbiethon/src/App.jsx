import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Layout } from './components/Diseases_Page/Layout'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Layout />
    </>
  )
}

export default App
