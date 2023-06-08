import React from 'react';

const TopBackground = ({ image, h1, className }) => {
    return (
        <div className={className}>
            <img src={image} alt="" />
            <h1>{h1}</h1>
        </div>
    );
};

export default TopBackground;