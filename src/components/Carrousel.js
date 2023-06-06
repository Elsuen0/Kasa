import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Carrousel = ({ images, id }) => {
    const renderCustomArrowPrev = (onClickHandler, hasPrev, label) => {
        return (
            <button className='custom-arrow-prev' onClick={onClickHandler} disabled={!hasPrev}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        );
    };

    const renderCustomArrowNext = (onClickHandler, hasPrev, label) => {
        return (
            <button className='custom-arrow-next' onClick={onClickHandler} disabled={!hasPrev}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        );
    };
    return (
        <div className="carousel-container">
            <Carousel
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={true}
                width={1240}
                renderArrowPrev={renderCustomArrowPrev}
                renderArrowNext={renderCustomArrowNext}>
                {images.map((image, index) => (
                    <div className='carousel-container-img' key={index}>
                        <img className={`carousel-container-img-${id}-${index + 1}`} key={index} src={image} alt="" />
                    </div>
                ))}
            </Carousel>

        </div>
    );
};

export default Carrousel;