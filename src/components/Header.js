import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import flyer from '../assets/flyer.jpeg'
import flyer2 from '../assets/flyer2.jpeg'
SwiperCore.use([Autoplay]);

const Header = () => {

    return (
        <div className="header">
            <div>
                <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ 
                    delay: 5000,
                    disableOnInteraction: false }}
                loop={true}
                >
                    <SwiperSlide><img src={flyer} alt="flyer"/></SwiperSlide>
                    <SwiperSlide><img src={flyer2} alt="flyer2" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Header;