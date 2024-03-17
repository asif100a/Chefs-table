import { useState } from 'react'
import './App.css'
import Carts from './assets/Components/Carts/Carts'
import Header from './assets/Components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [orders, setOrders] = useState([]);
  const [cookings, setCookings] = useState([]);

  const handleOrderFood = (items) => {
    const newOrders = [...orders, items];
    const isExist = orders.find(item => item.recipe_id === items.recipe_id);
    if (isExist) {
      toast.warn("This food already exist on the list!");
    }
    else {
      setOrders(newOrders);
      toast.success('This food added in the list successfully');
    }
  };

  const handleCookingFood = (order, id) => {
    const newCookings = [...cookings, order]
    setCookings(newCookings);
    console.log(id)
    
    const updateOrderList = orders.filter(item => item.recipe_id !== id);
    setOrders(updateOrderList);
  };

  return (
    <>
      <Header></Header>
      <Carts
        handleOrderFood={handleOrderFood}
        orders={orders}
        handleCookingFood={handleCookingFood}
        cookings={cookings}
      ></Carts>
      <ToastContainer />
    </>
  )
}

export default App
