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
            <div className='text-center mx-auto mt-24'>
                <h1 className='text-4xl font-semibold'>Our Recipes</h1>
                <p className='text-lg font-normal w-auto lg:w-[48em] mx-auto'>In a world where food is more than just sustenance but a celebration of culture, community, and creativity, Our Recipes stands as a testament to the universal language of gastronomy. </p>
            </div>

            <div className='flex gap-6'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center mt-16'>
                    {
                        carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                    }
                </div>
                <div className='border-2 w-[25rem] h-fit px-6 rounded-2xl mt-16'>
                    <div className='mt-6'>
                        <h3 className='text-xl font-semibold'>Want to cook: </h3>
                        <hr className='my-3' />
                    </div>
                    <div>
                        <table className='text-[#28282899]'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <div className='mt-6'>
                        <h3 className='text-xl font-semibold'>Currently cooking: </h3>
                        <hr className='my-3' />
                    </div>
                    <div>
                        <table className='text-[#28282899]'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                        </table>
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
        </div>
    );
};

Carts.propTypes = {

};

export default Carts;