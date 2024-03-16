import PropTypes from 'prop-types';

const DisplayOrder = ({order}) => {
    console.log(order)
    return (
        <div>
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
                                <td className=''></td>
                                <td></td>
                                <td></td>
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
    );
};

DisplayOrder.propTypes = {

};

export default DisplayOrder;