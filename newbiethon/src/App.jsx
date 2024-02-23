import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Addpage } from './components/Addpage/Addpage'
import Content from './components/Content'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from '@mui/icons-material'
import Layout from './components/Diseases_Page/Layout'
function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
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
          { path: 'diseases', element: <Layout /> },
          // { path: 'level7', element: <KimJongUn /> },
        ],
      },
    ],
  },
])
export default App
