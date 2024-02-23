import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Content from './components/Content';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <Content />
    </>
  );
}

export default App;
