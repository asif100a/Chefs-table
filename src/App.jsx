import { useState } from 'react'
import './App.css'
import Carts from './assets/Components/Carts/Carts'
import Header from './assets/Components/Header/Header'

function App() {

  const [orders, setOrders] = useState([]);

  const handleOrderFood = (items) => {
    const newOrders = [...orders, items];
    setOrders(newOrders);
  };

  return (
    <>
      <Header></Header>
      <Carts handleOrderFood={handleOrderFood} orders={orders}></Carts>
    </>
  )
}

export default App
