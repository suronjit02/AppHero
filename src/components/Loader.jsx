import React from 'react';
import heroImg from '/assets/logo.png';

const Loader = () => {

    console.log('page navigate')
    
    return (
        <div className="flex justify-center items-center h-screen bg-base-200">

            <h3 className="text-5xl flex justify-center items-center font-bold text-gray-500">L <span><img className='h-10 animate-spin black' src={heroImg} alt="" /></span> ading...</h3>

        </div>
    );
};

export default Loader;