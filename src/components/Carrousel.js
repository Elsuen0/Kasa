import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';



const Carrousel = () => {
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block' }}
                onClick={onClick}
            >
                Previous
            </div>
        );
    };

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', border: '2px solid red' }}
                onClick={onClick}
            >
                Next
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        PrevArrow: <PrevArrow />,
        NextArrow: <NextArrow />
    };


    return (
        <Slider {...settings}>
            <div>
                <h3>Slide 1</h3>
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg" alt="" />
            </div>
            <div>
                <h3>Slide 2</h3>
            </div>
        </Slider>
    );
};

export default Carrousel;