import { FaGooglePlay, FaStar } from 'react-icons/fa';
import { FaAppStoreIos } from 'react-icons/fa';
import heroImg from '/assets/hero.png';
import { useNavigate, useOutletContext } from 'react-router';
import { AiOutlineDownload } from 'react-icons/ai';
import { IoTrendingUpOutline } from 'react-icons/io5';

const Home = () => {

    const navigate = useNavigate();
    const { apps } = useOutletContext();


    return (
        <>

            <div className="hero bg-base-200 h-full px-5">
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

                            <button className="btn btn-outline btn-accent text-lg p-6 font-bold">
                                <a
                                    href="https://play.google.com/store"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <FaGooglePlay className="text-3xl" />
                                    Google Play
                                </a>
                            </button>

                            <button className="btn btn-outline btn-accent text-lg p-6 font-bold">
                                <a
                                    href="https://www.apple.com/app-store/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <FaAppStoreIos className="text-3xl" />
                                    App Store
                                </a>
                            </button>


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

                <div className="stats stats-vertical sm:stats-horizontal shadow w-full px-4 sm:px-8 md:px-16">

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

            <div className='bg-base-200 min-h-screen text-center pt-15 px-4 sm:px-8 md:px-16'>
                
                <h3 className='text-3xl font-bold pb-3 flex gap-2 justify-center'>Trending Apps<span className='font-bold text-4xl text-sky-400'><IoTrendingUpOutline /></span></h3>
                
                <p className='text-md font-semibold'>Explore All Trending Apps on the Market developed by us.</p>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">

                    {apps.slice(0, 8).map(app => (
                        <div onClick={() => navigate(`/app/${app.id}`)}

                            key={app.id} className="card bg-base-100 shadow-md hover:shadow-xl transition duration-200">

                            <figure>
                                <img
                                    src={app.image}
                                    alt={app.name}
                                    className="h-40 mt-5 object-cover"
                                />
                            </figure>

                            <div className="card-body ">

                                <h2 className="card-title">{app.name}</h2>

                                <div className="flex justify-between gap-10">

                                    <p className="text-lg font-semibold text-green-400 flex gap-2 items-center justify-center bg-amber-50 rounded-md">
                                        < AiOutlineDownload /> {app.downloads ? app.downloads.toLocaleString() : 0}M
                                    </p>
                                    <p className="text-lg font-semibold text-amber-600 flex gap-2 items-center justify-center bg-amber-50 rounded-md">
                                        <FaStar /> {app.ratingAvg ? app.ratingAvg.toFixed(1) : 0}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="btn btn-wide text-white my-8 bg-linear-to-r from-blue-500 to-sky-700"
                    onClick={() => navigate('/apps')}
                >
                    Show All Apps
                </button>


            </div>


        </>
    );
};

export default Home;