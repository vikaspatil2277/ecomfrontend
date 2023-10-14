import React from 'react'
import './Components.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import electronicsAutoCarouselImage from '../Assets/Home Page/books-banner.jpg'
import fashionAutoCarouselImage from '../Assets/Home Page/electronics-banner.jpg'
import healthAndPersonalCareAutoCarouselImage from '../Assets/Home Page/corousel_1.png'
import electronicsAutoCarouselImage2 from '../Assets/Home Page/corousel_2.png'
import fashionAutoCarouselImage2 from '../Assets/Home Page/corousel_3.png'
import healthAndPersonalCareAutoCarouselImage2 from '../Assets/Home Page/corousel_1.png'

const HomeBannerAutoCarousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 500,
        cssEase: "linear"
    };
    return (
        <>
            <div className='auto-carousel-container'>
                <div className='auto-carousel'>
                    <Slider {...settings}>
                        <div>
                            <img src={electronicsAutoCarouselImage} alt='electronics-banner'></img>
                        </div>
                        <div>
                            <img src={fashionAutoCarouselImage} alt='fashion-banner'></img>
                        </div>
                        <div>
                            <img src={healthAndPersonalCareAutoCarouselImage} alt='health-and-personal-care-banner'></img>
                        </div>
                        <div>
                            <img src={electronicsAutoCarouselImage2} alt='electronics-banner'></img>
                        </div>
                        <div>
                            <img src={fashionAutoCarouselImage2} alt='fashion-banner'></img>
                        </div>
                        <div>
                            <img src={healthAndPersonalCareAutoCarouselImage2} alt='health-and-personal-care-banner'></img>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default HomeBannerAutoCarousel