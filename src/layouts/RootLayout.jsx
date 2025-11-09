import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Loader from '../components/Loader';


const RootLayout = () => {

    const navigation = useNavigation();

    return (
        <div>

            <Navbar />

            {
                navigation?.state === 'loading' ? (<Loader />) :
                    (<main className="min-h-[calc(100vh-220px)] flex-1 pt-16">

                        <Outlet />

                    </main>
                    )
            }

            <Footer />


            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </div>
    );
};

export default RootLayout;