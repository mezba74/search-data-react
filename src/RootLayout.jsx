import React from 'react';
import { Outlet } from 'react-router';
import Fotter from './Fotter';
import Navbar from './Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default RootLayout;