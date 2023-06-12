import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ content, name, className }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={className}>
            <div className='collapse_title'>
                <p>{name}</p>
                <button onClick={toggleCollapse} className={isCollapsed ? 'collapsed' : 'expanded'}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
            </div>
            <div className={`collapse_content ${isCollapsed ? 'collapsed' : 'expanded'}`}>
                {!isCollapsed && (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
};

export default Collapse;
