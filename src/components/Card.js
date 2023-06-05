import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ nom, photo, className, id }) => {
    return (

        <div className={`card ${className}`}>
            <NavLink to={`/Logements/${id}`}>
                <img src={photo} alt={nom} />
                <div className='h3'>
                    <h3>{nom}</h3>
                </div>
            </NavLink>
        </div>

    );
};

export default Card;