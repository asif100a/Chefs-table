import { BsSearch } from "react-icons/bs";
import './Header.css';
import ContactIcon from '../../Images/support.png';
import BannerImg from '../../Images/Sally-et-al.jpg';
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <div>
            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>
                            </ul>
                        </div>

                        <a className="btn btn-ghost  pt-32 md:pt-0 text-3xl">Recipe Calories</a>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex gap-12  navber-list-container">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end items-center space-x-4">
                        <div className="border-2 flex justify-center items-center gap-2 rounded-full pl-6">
                            <p className="w-6"><BsSearch /></p>
                            <input type="text" placeholder="Search" className="input pl-0 rounded-e-full w-[10rem] md:w-[12rem] " />
                        </div>
                        <div className="border-2 border-[#313030] p-1 md:p-3 rounded-full bg-[#0BE58A]  hidden md:flex">
                            <img className="w-4 h-4 md:w-8 md:h-8" src={ContactIcon} alt="contact-icon" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Section */}
            <div className="banner-img text-white text-center space-y-2 lg:space-y-12 rounded-3xl mt-16">
                <div className="banner-img bg-gradient-to-r from-[#1e1d1d] to-[#25252366] text-white text-center space-y-3 lg:space-y-12 p-0 py-4 lg:p-32 rounded-3xl mt-16">
                    <h1 className="text-2xl lg:text-5xl font-bold w-auto lg:w-[16em] mx-auto">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="text-lg font-normal w-auto lg:w-[48em] mx-auto">Cooking classes and Culinary Education  have evolved into dynamic experiences that not only teach culinary skills but also drive revenue generation, foster community, and eventually brand building.</p>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 justify-center w-fit mx-auto">
                        <button className="btn min-h-8 lg:min-h-[3rem] h-8 lg:h-auto lg:w-auto text-xl font-semibold bg-green-500 border-green-400 rounded-full px-2 lg:px-4 text-white">Explore Now</button>
                        <button className="btn min-h-8 lg:min-h-[3rem] h-8 lg:h-auto lg:w-auto text-xl font-semibold rounded-full bg-white bg-opacity-10 text-white border-2 px-2 lg:px-4">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {

};

export default Header;