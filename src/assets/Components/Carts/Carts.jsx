import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import DisplayOrder from '../DisplayOrder/DisplayOrder';
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';

const Carts = ({ handleOrderFood, orders, handleCookingFood, cookings }) => {
    // console.log(cookings)
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('./food-cart.json')
            .then(res => res.json())
            .then(data => setCarts(data));
    }, []);

    return (
        <div>
            <div className='text-center mx-auto mt-24'>
                <h1 className='text-4xl font-semibold'>Our Recipes</h1>
                <p className='text-lg font-normal w-auto lg:w-[48em] mx-auto'>In a world where food is more than just sustenance but a celebration of culture, community, and creativity, Our Recipes stands as a testament to the universal language of gastronomy. </p>
            </div>

            <div className='flex flex-col lg:flex-row gap-6'>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center mt-16'>
                    {
                        carts.map((cart, i) => <Cart key={i} cart={cart} handleOrderFood={handleOrderFood}></Cart>)
                    }
                </div>


                <div className='border-2 w-full md:w-[25rem] h-fit px-6 rounded-2xl mt-16'>
                    <div className='mt-6'>
                        <h3 className='text-xl font-semibold text-center'>Want to cook: {orders.length}</h3>
                        <hr className='my-3' />
                    </div>
                    <div>
                        <div className='flex gap-3 ml-8 font-bold text-[#28282899]'>
                            <h5>Name</h5>
                            <h5 className='ml-8'>Time</h5>
                            <h5>Calories</h5>
                        </div>
                        <table className='text-[#28282899]'>

                            <tbody className='my-12'>
                                {
                                    orders.map((order, idx) => <DisplayOrder
                                        key={order.recipe_id}
                                        order={order}
                                        idx={idx + 1}
                                        handleCookingFood={handleCookingFood}
                                    ></DisplayOrder>)
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className='mt-6'>
                        <h3 className='text-xl font-semibold text-center'>Currently cooking: {cookings.length}</h3>
                        <hr className='my-3' />
                    </div>
                    <div>
                            <div className='flex gap-3 ml-8 font-bold text-[#28282899]'>
                                <h5>Name</h5>
                                <h5 className='ml-[70px] mr-12'>Time</h5>
                                <h5>Calories</h5>
                            </div>
                        <table className='text-[#28282899]'>
                            <tbody>
                                {
                                    cookings.map((cooking, idx) => <CurrentlyCooking
                                        key={cooking.recipe_id}
                                        cooking={cooking}
                                        idx={idx + 1}
                                    ></CurrentlyCooking>)
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className='flex justify-end gap-3 pt-4 pb-6'>
                        <p>Total Time = <br />
                            45 minutes
                        </p>

                        <p>Total Calories = <br />
                            1050 calories
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Carts.propTypes = {
    handleOrderFood: PropTypes.func.isRequired,
    orders: PropTypes.array.isRequired,
    handleCookingFood: PropTypes.func.isRequired,
    cookings: PropTypes.array.isRequired
};

export default Carts;