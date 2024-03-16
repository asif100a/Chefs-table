import { useState } from 'react'
import './App.css'
import Carts from './assets/Components/Carts/Carts'
import Header from './assets/Components/Header/Header'
// import { ToastContainer, toast } from 'react-toastify';


function App() {

  const [orders, setOrders] = useState([]);

  const handleOrderFood = (items) => {
    const newOrders = [...orders, items];
    const isExist = orders.find(item => item.recipe_id === items.recipe_id);
    if(isExist){
      alert("it is added")
     
    }
    else{
      setOrders(newOrders);
    }
  };

  return (
    <>
      <Header></Header>
      <Carts handleOrderFood={handleOrderFood} orders={orders}></Carts>
    </>
  )
}

export default App
