import React from 'react';

const Card = ({ nom, photo, className }) => {
    return (
        <div className={`card ${className}`}>
            <img src={photo} alt={nom} />
            <div className='h3'>
                <h3>{nom}</h3>
            </div>
        </div>
    );
};

export default Card;