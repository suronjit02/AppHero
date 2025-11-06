import React from 'react';
import appNotFoundImg from '/assets/App-Error.png';
import { Link } from 'react-router';
import Home from './Home';

const AppNotFound = () => {
    return (

        <div className='text-center justify-center py-20 px-10 md:px-0'>
            
            <img className=' mx-auto' src={appNotFoundImg} alt="app not found" />

            <h3 className='text-2xl sm:text-4xl font-bold mt-4'>OOPS!! APP NOT FOUND</h3>

            <p className='text-gray-600 font-semibold mt-2'>The App you are requesting is not found on our system.  please try another apps</p>

            <Link to="/" className='btn text-white mt-4 bg-linear-to-r from-blue-500 to-sky-700'> Go Home! </Link>
        </div>
    );
};

export default AppNotFound;