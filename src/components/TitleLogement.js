import React from 'react';

const TitleLogement = ({ title, subTitle }) => {
    return (
        <div className='title_settings'>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
        </div>
    );
};

export default TitleLogement;