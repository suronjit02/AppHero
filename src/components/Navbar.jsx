import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '/assets/logo.png';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 z-50 sm:px-20">
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/apps">Apps</Link></li>
                        <li><Link to="/installation">Installation</Link></li>
                    </ul>
                </div>

                <Link to='/' className="flex items-center gap-2 text-xl font-bold text-sky-600">
                    <img className="h-10" src={logo} alt="AppHero logo" />
                    <span className='hidden sm:inline-block'>AppHero</span>
                </Link>


            </div>            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className={({ isActive }) =>
                        isActive
                            ? "text-sky-600 border-b-2 border-sky-600"
                            : "text-gray-600 hover:text-sky-500"
                    } to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive
                            ? "text-sky-600 border-b-2 border-sky-600"
                            : "text-gray-600 hover:text-sky-500"
                    } to="/apps">Apps</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive
                            ? "text-sky-600 border-b-2 border-sky-600"
                            : "text-gray-600 hover:text-sky-500"
                    } to="/installation">Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"https://github.com/suronjit02"} target='_blank' className="btn btn-wide bg-linear-to-r from-blue-500 to-sky-700 text-white"> <span className='text-xl'><FaGithub /></span> Contribute</Link>
            </div>
        </div>
    );
};

export default Navbar;