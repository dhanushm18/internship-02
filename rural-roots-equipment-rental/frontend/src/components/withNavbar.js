import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const withNavbar = (WrappedComponent) => {
    return (props) => {
        const location = useLocation();
        const isAdminPage = location.pathname === '/admin';

        return (
            <>
                {!isAdminPage && <Navbar />}
                <WrappedComponent {...props} />
            </>
        );
    };
};

export default withNavbar;