import React from 'react';
import error404 from '/assets/error-404.png'
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <>

            <div className='w-full h-full flex flex-col justify-center items-center py-20 px-2'>

                <img className='h-40 w-40 sm:h-80 sm:w-80 pb-5' src={error404} alt="error404" />

                <h3 className='text-3xl font-bold text-center'>Oops, page not found!</h3>
                <p className='text-gray-400 mb-4 text-center'>The page you are looking for is not available.</p>

                <Link to="/" className="btn btn-primary max-w-50">
                    Go Back Home
                </Link>
            </div>

        </>
    );
};

export default NotFound;