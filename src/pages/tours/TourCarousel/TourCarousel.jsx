import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './TourCarousel.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function TourCarousel() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [carousel, setcarousel] = useState([]);
    useEffect(() => {
        fetch('../../../../public/data/carouselD.json')
            .then(res => res.json())
            .then(data => setcarousel(data))
    }, [])
    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
                {
                    carousel.map(slide => <SwiperSlide
                        key={slide.id}
                    >
                        <img src={slide.img} alt="" />
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}
