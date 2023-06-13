import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';


// Définition du composant Carrousel qui prend 2 props : 'images' et 'id'
const Carrousel = ({ images, id }) => {

    // Utilisation du hook useState pour gérer l'état du slide actuel
    const [currentSlide, setCurrentSlide] = useState(0);

    // Fonction pour passer au slide suivant
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    // Fonction pour revenir au slide précédent
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };


    // Rendu du componsant Carrousel 
    return (
        <div className="carousel">
            <button className='prevButton' onClick={prevSlide}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <div className="carousel-container">

                {/*Boucle sur le tableau d'images pour les afficher dans le carrousel */}
                {images.map((image, index) => (
                    <div className={`carousel-container-img ${currentSlide === index ? 'active' : ''}`} key={index} style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: currentSlide === index ? 1 : 0,
                        transition: 'opacity 0.5s ease', zIndex: currentSlide === index ? 1 : 0
                    }}>
                        <img className={` settingsImg carousel-container-img-${id}-${index + 1}`} src={image} alt={`Slide ${index}`} />
                    </div>
                ))}

            </div>
            <button className='nextButton' onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} /></button>
            <div className="carousel-counter">
                {currentSlide + 1} / {images.length}
            </div>
        </div>
    );
};

export default Carrousel;