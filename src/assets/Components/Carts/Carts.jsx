import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Carts = props => {

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('./food-cart.json')
            .then(res => res.json())
            .then(data => setCarts(data));
    }, []);

    return (
        <div>
            <div className='text-center mx-auto mt-20'>
                <h1 className='text-4xl font-semibold'>Our Recipes</h1>
                <p className='text-lg font-normal w-[48em] mx-auto'>In a world where food is more than just sustenance but a celebration of culture, community, and creativity, Our Recipes stands as a testament to the universal language of gastronomy. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    carts.map(cart => <Cart cart={cart}></Cart>)
                }
            </div>
            <div>
                <div>
                    <h3>Want to cook: </h3>
                </div>

                <div>
                    <h3>Currently cooking: 02</h3>
                </div>

                <div>
                    <p>Total Time =
                        45 minutes
                    </p>

                    <p>Total Calories =
                        1050 calories
                    </p>
                </div>
            </div>
        </div>
    );
};

Carts.propTypes = {

};

export default Carts;