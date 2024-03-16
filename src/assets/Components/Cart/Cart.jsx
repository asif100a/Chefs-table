import PropTypes from 'prop-types';
import TimeIcon from '../../Images/clock.png';
import Calories from '../../Images/calories.png';

const Cart = ({ cart }) => {
    console.log(cart)
    const { recipe_image, recipe_name, short_description, recipe_id, preparing_time, calories, ingredients } = cart;
    const [first, second, third, forth, fifth] = ingredients;
    return (
        <div>
            <div>
                <div className="card w-full md:w-96 bg-base-100 border-2 rounded-2xl pt-6">
                    <figure><img className='h-[170px] md:h-[200px] w-[250px] md:w-[330px] rounded-2xl' src={recipe_image} alt="recipe-img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-semibold text-2xl min-h-16 h-16">{recipe_name}</h2>
                        <p className='min-h-20 h-20'>{short_description}</p>
                        <hr className='mt-3 lg:mt-auto' />
                        <h5 className='text-xl font-semibold'>Ingredients: 6</h5>
                        <ul className='list-disc ml-8 min-h-36 h-36'>
                            <li>{first}</li>
                            <li>{second}</li>
                            <li>{third}</li>
                            <li>{forth}</li>
                            <li>{fifth}</li>
                        </ul>
                        <hr className='my-3' />
                        <div className='flex justify-between'>
                            <p className='flex gap-2'>
                                <span> <img className='w-6 h-6' src={TimeIcon} alt="Time-icon" /></span>
                                <span>{preparing_time}</span>
                            </p>
                            <p className='flex gap-2'>
                                <span><img className='w-6 h-6' src={Calories} alt="calories-icon" /></span>
                                <span>{calories}</span>
                            </p>
                        </div>
                        <div className="card-actions justify-start mt-3">
                            <button className="btn bg-green-500 text-lg font-medium text-white">Want to Cook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired
};

export default Cart;