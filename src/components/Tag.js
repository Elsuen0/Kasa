import React from 'react';
import data from '../Logement.json';
import { useParams } from 'react-router-dom';


const Tag = () => {

    const { id } = useParams();
    const logement = data.find(logement => logement.id === id);

    return (
        <div className='tag_content'>
            {logement.tags.map((tag, index) => (
                <span key={index} className='tag'>{tag}</span>
            ))}
        </div>
    );
};

export default Tag;