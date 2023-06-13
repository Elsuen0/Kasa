import React from 'react';
import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="logo">
            <NavLink to={'/home'}>
                <img src="/logokasa.png" alt="Logo Kasa" />
            </NavLink>
            <Navigation />
        </div>
    );
};

export default Logo;