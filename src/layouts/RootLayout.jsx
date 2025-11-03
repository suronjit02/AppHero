import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>

            <Navbar />

            <main className="min-h-[calc(100vh-185px)]">

                <Outlet />
                
            </main>

            <Footer />



        </div>
    );
};

export default RootLayout;