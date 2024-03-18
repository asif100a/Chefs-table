import PropTypes from 'prop-types';

const DisplayOrder = ({ order, idx, handleCookingFood }) => {
    const { recipe_name, preparing_time, calories, recipe_id } = order;

    const timeSting = preparing_time.split(' ');
    const time = parseInt(timeSting[0]);

    const caloriesString = calories.split(' ');
    const newCalories = parseInt(caloriesString[0]);

    // console.log(time)

    return (
        <tr className='bg-white md:bg-slate-100 border-2 mb-2'>
            <td className=' pr-5'>{idx}</td>
            <td className=''>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <td><button onClick={() => handleCookingFood(order, recipe_id, time, newCalories)} className='btn min-h-[2rem] h-[2rem] lg:min-h-[2.5rem] lg:h-[2.5rem] w-16 text-sm lg:text-base rounded-lg lg:rounded-full bg-green-500 text-white lg:w-fit px-1 lg:px-[10px]'>Preparing</button></td>
        </tr>
    );
};

DisplayOrder.propTypes = {
    order: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    handleCookingFood: PropTypes.func.isRequired
};

export default DisplayOrder;