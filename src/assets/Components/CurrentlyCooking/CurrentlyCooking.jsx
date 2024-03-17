import PropTypes from 'prop-types';

const CurrentlyCooking = ({cooking, idx}) => {
    const { recipe_name, preparing_time, calories } = cooking;
    return (
        <div>
            <tr className=''>
                <td className=' pr-5'>{idx}</td>
                <td className='w-32'>{recipe_name}</td>
                <td className='pr-4'>{preparing_time}</td>
                <td>{calories}</td>

            </tr>
        </div>
    );
};

CurrentlyCooking.propTypes = {

};

export default CurrentlyCooking;