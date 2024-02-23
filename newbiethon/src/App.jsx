import { useState } from 'react'
import './App.css'
import { Addpage } from './components/Addpage/Addpage'
import Content from './components/Content'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import SignUp from './Signup'
import Layout from './components/Diseases_Page/Layout'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
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
      { index: true, element: <SignUp /> },
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
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
export default App
