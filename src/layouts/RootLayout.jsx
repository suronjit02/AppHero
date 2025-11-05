import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useLoaderData } from 'react-router';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {

    const apps = useLoaderData();

    return (
        <div>

            <Navbar />

            <main className="min-h-[calc(100vh-220px)] flex-1 pt-16">

                <Outlet context={{ apps }} />

            </main>

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