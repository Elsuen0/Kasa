import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


// Définition du composant Collapse qui prend 3 props : content, name, className
const Collapse = ({ content, name, className }) => {

    // Utilisation du hook useState pour gérer l'état du collapse (ouvert/fermé) 
    const [isCollapsed, setIsCollapsed] = useState(true);


    // Fonction pour basculer l'état du collapse (passer de fermé à ouvert)
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Rendu du composant Collapse
    return (
        <div className={className}>
            <div className='collapse_title'>
                {/* Affichage du nom du collapse */}
                <p>{name}</p>

                {/* Bouton pour switch (ouvert / fermé) */}
                <button onClick={toggleCollapse} className={isCollapsed ? 'collapsed' : 'expanded'}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
            </div>
            <div className={`collapse_content ${isCollapsed ? 'collapsed' : 'expanded'}`}>

                {/* Affichage du contenu du collapse seulement si celui-ci est ouvert */}
                {!isCollapsed && (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
};

export default Collapse;
