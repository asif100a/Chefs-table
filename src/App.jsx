import { useState } from 'react'
import './App.css'
import Carts from './assets/Components/Carts/Carts'
import Header from './assets/Components/Header/Header'

function App() {

  const [order, setOrder] = useState([]);

  const handleOrderFood = (items) => {
    console.log(items);
  };

  return (
    <>
      <Header></Header>
      <Carts handleOrderFood={handleOrderFood}></Carts>
    </>
  )
}

export default App
