import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Rating = ({ rating }) => {

    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className='rating'>
            {Array.from({ length: 5 }, (_, index) => (
                <span key={index} className='stars_settings'>
                    {index < filledStars ? (<FontAwesomeIcon icon={faStar} className='starFilled' />) : index === filledStars && hasHalfStar ? (<FontAwesomeIcon icon={faStarHalfAlt} />) : (<FontAwesomeIcon icon={faStar} className='starEmpty' />)}
                    {console.log(filledStars)}
                    {console.log(index)}
                </span>
            ))}
        </div>
    );
};

export default Rating;