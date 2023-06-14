import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="logo">
            <NavLink to={'/home'}>
                <img src="/logokasa.png" alt="Logo Kasa" />
            </NavLink>
        </div>
    );
};

export default Logo;