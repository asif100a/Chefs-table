import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import DisplayOrder from '../DisplayOrder/DisplayOrder';

const Carts = ({handleOrderFood, orders}) => {
    // const {recipe_name, preparing_time, calories} = orders;

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

                {
                    orders.map(order => <DisplayOrder order={order}></DisplayOrder>)
                }
            </div>
        </div>
    );
};

Carts.propTypes = {
    handleOrderFood: PropTypes.func.isRequired
};

export default Carts;