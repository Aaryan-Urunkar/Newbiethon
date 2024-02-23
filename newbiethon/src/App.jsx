import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Addpage } from './components/Addpage/Addpage'
import Content from './components/Content'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from '@mui/icons-material'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Content />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: '/',

    children: [
      { index: true, element: <Login /> },
      // { path: "login", element: <Login /> },
      {
        path: 'medi',
        children: [
          { path: 'dashboard', element: <Content /> },
          { path: 'add', element: <Addpage /> },
          // { path: 'level6', element: <Area51 /> },
          // { path: 'level7', element: <KimJongUn /> },
        ],
      },
    ],
  },
])
export default App
