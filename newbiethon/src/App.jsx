import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Addpage } from './components/Addpage/Addpage'
import Content from './components/Content'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <>
//       <Navbar />
//       <Content />
//     </>
//   )
// }
const router = createBrowserRouter([
  {
    path: '/',

    children: [
      // { path: "login", element: <Login /> },
      {
        path: 'meditracker',
        children: [
          { path: 'dashboard', element: <Content /> },
          { path: 'prescriptionadd', element: <Addpage /> },
        ],
      },
    ],
  },
])
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
export default App
