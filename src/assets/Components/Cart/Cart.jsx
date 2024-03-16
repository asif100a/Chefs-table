import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({cart}) => {
    console.log(cart)
    const {recipe_image, recipe_name, short_description, recipe_id, preparing_time, calories, ingredients} = cart;
    const [first, second, third, forth, fifth] = ingredients;
    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-[200px] w-[330px] rounded-2xl' src={recipe_image} alt="recipe-img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-semibold text-2xl">{recipe_name}</h2>
                        <p>{short_description}</p>
                        <hr />
                        <h5 className='text-xl font-semibold'>Ingredients: 6</h5>
                        <ul className='list-disc ml-8'>
                            <li>{first}</li>
                            <li>{second}</li>
                            <li>{third}</li>
                            <li>{forth}</li>
                            <li>{fifth}</li>
                        </ul>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Want to Cook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {

};

export default Cart;