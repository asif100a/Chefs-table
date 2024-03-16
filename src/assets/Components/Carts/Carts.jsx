import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Carts = ({handleOrderFood}) => {
    // console.log(handleOrderFood)

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
                        <h3 className='text-xl font-semibold text-center'>Want to cook: </h3>
                        <hr className='my-3' />
                    </div>
                    <div>
                        <table className='text-[#28282899]'>
                            <thead>
                                <tr>
                                    <th colSpan={2} className='pl-8' align='left'>Name</th>
                                    <th className='' align='left'>Time</th>
                                    <th align='left'>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=''>
                                    <td className=' pr-5'>1</td>
                                    <td className=''>Chicken Caesar Salad</td>
                                    <td>20 minutes</td>
                                    <td>400 calories</td>
                                    <td><button className='btn min-h-[2rem] h-[2rem] lg:min-h-[2.5rem] lg:h-[2.5rem] w-16 text-sm lg:text-base rounded-lg lg:rounded-full bg-green-500 text-white lg:w-fit px-1 lg:px-[10px]'>Preparing</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='mt-6'>
                        <h3 className='text-xl font-semibold text-center'>Currently cooking: </h3>
                        <hr className='my-3' />
                    </div>
                    <div>
                    <table className='text-[#28282899]'>
                            <thead>
                                <tr>
                                    <th colSpan={2} className='pl-8' align='left'>Name</th>
                                    <th className='' align='left'>Time</th>
                                    <th align='left'>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=''>
                                    <td className=' pr-5'>1</td>
                                    <td className='w-32'>Chicken Caesar Salad</td>
                                    <td className='w-24'>20 minutes</td>
                                    <td>400 calories</td>
                                    
                                </tr>
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
    handleOrderFood: PropTypes.func.isRequired
};

export default Carts;