import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Testimonials.css';
import { FaQuoteRight } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div className='py-16 container mx-auto grid lg:grid-cols-2 gap-8 px-4'>
            <div className=''>
                <h3 className='text-1xl font-bold text-[#64ab45] bg-[#dde5da] px-4 py-2 w-2/3 md:1/3 rounded'>Our testimonials</h3>
                <h1 className="my-8 text-3xl md:text-5xl font-bold">What they’re talking about our policy</h1>
                <p className="text-[#82828A]">Our Client valuable reviews are the jems of TravelBod, Which makes us more connected towards You.</p>
                <Link to='/testimonials'>
                    <button className="btn text-white text-[17px] bg-[#64ab45] hover:bg-[#82d75d] my-6">All Testimonials</button>
                </Link>
            </div>
            <Swiper
                slidesPerView={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className='shadow-xl rounded-12 shadow-[#e2f3da] testimonial'
            >
                {
                    testimonials.map(testimonial => <SwiperSlide>
                        <div className='p-8 md:p-16'>
                            <span className='flex justify-end text-4xl lg:text-6xl text-[#64ab45ab]'><FaQuoteRight /></span>
                            <div className='flex items-center'>
                                <img className='testimonial_img' src={testimonial.img} alt="" />
                                <div className='ms-2'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        color="#64ab45"
                                    />
                                    <p className='text-left text-2xl font-bold'>{testimonial.name}</p>
                                    <p className='text-[17px] text-[#82828A] text-left'>{testimonial.designation}</p>
                                </div>
                            </div>
                            <p className='text-[#82828A] my-4 text-left'>{testimonial.review}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;