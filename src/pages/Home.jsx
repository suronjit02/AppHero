import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';
import { FaAppStoreIos } from 'react-icons/fa';
import heroImg from '../assets/hero.png';

const Home = () => {
    return (
        <>

            <div className="hero bg-base-200 h-full">
                <div className="text-center pt-10 sm:pt-20 md:pt-30">
                    <div className="max-w-2xl">

                        <h1 className="text-7xl font-bold leading-[1.2]
                        "><span className='text-[#001931]'>We Build</span>
                            <br />

                            <span className='text-sky-700'>Productive</span> <span className='text-[#001931]'>Apps</span>
                        </h1>

                        <p className="py-6 text-bold">
                            At <span className='text-sky-700'>App Hero</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>

                        <div className='flex gap-5 justify-center items-center'>

                            <button className="btn btn-outline btn-accent text-lg p-6 text-bold "> <span className='text-3xl'><FaGooglePlay /></span>Google Play</button>

                            <button className="btn btn-outline btn-accent text-lg p-6 text-bold flex items-center "><span className='text-3xl'><FaAppStoreIos /></span>App Store</button>

                            
                        </div>
                        
                        <div className="mt-10 flex flex-col justify-center">
                            <img
                                src={heroImg}
                                alt="Hero"
                                className="w-[300px] md:w-[500px] lg:w-[900px] "
                            />
              
                        </div>   
                    </div>                
                </div> 
            </div>

            <div className='bg-linear-to-r from-sky-500 via-blue-600 to-sky-500 text-center text-white py-15 px-20'>

                <h3 className='text-3xl font-bold pb-5'>Trusted by Millions, Built for You</h3>

                <div className="stats w-full ">

                    <div className="stat place-items-center">
                        <div className="stat-title text-md font-semibold">Total Downloads</div>
                        <div className="stat-value">29.6M</div>
                        <div className="stat-desc text-md font-semibold">21% more than last month</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-md font-semibold">Total Reviews</div>
                        <div className="stat-value ">906K</div>
                        <div className="stat-desc text-md font-semibold">46% more than last month</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-md font-semibold">Active Apps</div>
                        <div className="stat-value">132+</div>
                        <div className="stat-desc text-md font-semibold">31 more will Launch</div>
                    </div>
                </div>

            </div>

            <div className='bg-base-200 min-h-screen text-center pt-15'>
                <h3 className='text-3xl font-bold pb-3'>Trending Apps</h3>
                <p className='text-md font-semibold'>Explore All Trending Apps on the Market developed by us.</p>

                <div>

                </div>
            </div>


        </>
    );
};

export default Home;