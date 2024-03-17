import { useState } from 'react'
import './App.css'
import Carts from './assets/Components/Carts/Carts'
import Header from './assets/Components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './assets/Components/Footer/Footer';


function App() {

  const [orders, setOrders] = useState([]);
  const [cookings, setCookings] = useState([]);
  const [totalTime, setTotalTime] = useState([0]);
  const [totalCalories, setTotalCalories] = useState([0]);

  const handleOrderFood = (items) => {
    const newOrders = [...orders, items];
    const isExist = orders.find(item => item.recipe_id === items.recipe_id);
    if (isExist) {
      toast.error("This food already exist on the list!");
    }
    else {
      setOrders(newOrders);
      toast.success('This food added in the list successfully');
    }
  };

  const handleCookingFood = (order, id, time, calories) => {
    const newCookings = [...cookings, order]
    setCookings(newCookings);

    // console.log('time:', time, 'calories:', calories);.
    // console.log(time)
    const newTotalTime = [parseInt(...totalTime) + time];
    setTotalTime(newTotalTime);
    const newTotalCalories = [parseInt(...totalCalories) + calories];
    setTotalCalories(newTotalCalories);

    const updateOrderList = orders.filter(item => item.recipe_id !== id);
    setOrders(updateOrderList);
    toast.info('Food is preparing to cook');
  };

  return (
    <>
      <header className='w-[80%] mx-auto'>
        <Header></Header>
      </header>
      <main className='w-[80%] mx-auto'>
        <Carts
          handleOrderFood={handleOrderFood}
          orders={orders}
          handleCookingFood={handleCookingFood}
          cookings={cookings}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Carts>
        <ToastContainer />
      </main>
      <footer className='w-full mt-24'>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
