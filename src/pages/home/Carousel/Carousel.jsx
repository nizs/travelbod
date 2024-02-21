import React, { useEffect, useState } from 'react';
import Banner from './Banner';

const Carousel = () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/carousels')
            .then(res => res.json())
            .then(data => setBanners(data))
    }, [])

    return (
        <div className='carousel w-full lg:h-[650px]'>
            {
                banners.map(banner => <Banner
                    key={banner._id}
                    banner={banner}
                ></Banner>)
            }
        </div>
    );
};

export default Carousel;