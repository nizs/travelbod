import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TourCarousel from '../TourCarousel/TourCarousel';
import { FaLocationDot, FaCircleDollarToSlot } from "react-icons/fa6";
import { VscOpenPreview } from "react-icons/vsc";
import { FaShare } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { GiAlarmClock } from "react-icons/gi";
import { IoAirplaneOutline } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import TourDinfo from './TourDinfo';

const TourD = () => {
    const details = useLoaderData();
    const { _id, title, location, price, duration, type, img, include1, include2, include3, include4, Exclude1, Exclude2, Exclude3, Exclude4, Cards, parking, coupons, reservations, restaurant, smoking } = details;
    return (
        <div className=''>
            <TourCarousel />
            {/* header and price */}
            <div className='lg:flex justify-between py-8 px-4 md:px-8 bg-[#F3F8F6]'>
                <div>
                    <h1 className='text-[26px] font-semibold'>{title}</h1>
                    <p className='flex items-center'>
                        <span className='mr-2'>
                            <FaLocationDot className='text-[#64ab45]' />
                        </span>
                        <span className='text-[#82828A]'>
                            {location}
                        </span>
                    </p>
                </div>
                <br className='' />
                <div className='flex flex-wrap'>
                    <div className='flex items-center mr-8'>
                        <AiOutlineDollar className='mr-2 text-4xl text-[#64ab45]' />
                        <div>
                            <h4 className='text-[#82828A]'>From</h4>
                            <p className='text-[16px] font-semibold'>{price}</p>
                        </div>
                    </div>
                    <div className='flex items-center mr-8'>
                        <GiAlarmClock className='mr-2 text-4xl text-[#64ab45]' />
                        <div>
                            <h4 className='text-[#82828A]'>Duration</h4>
                            <p className='text-[16px] font-semibold'>{duration}</p>
                        </div>
                    </div>
                    <div className='flex items-center mr-8'>
                        <IoAirplaneOutline className='mr-2 text-4xl text-[#64ab45]' />
                        <div>
                            <h4 className='text-[#82828A]'>Tour Type</h4>
                            <p className='text-[16px] font-semibold'>{type}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ratings and social share */}
            <div className='lg:flex justify-between bg-white p-4 border-b-[1px] border-solid border-[#e1e1e1] md:px-8'>
                <div className='flex items-center'>
                    <ReactStars
                        count={5}
                        size={24}
                        color="#ffd700"
                    />
                    <p className='ms-4 text-[#82828A]'>4.67 by 3 reviews</p>
                </div>
                <br className='' />
                <div className='flex flex-wrap'>
                    <div className='flex items-center mr-4'>
                        <button className="btn rounded-[30px] hover:bg-[#64ab45] hover:text-white">
                            <FaShare />
                            Share
                        </button>
                    </div>
                    <div className='flex items-center mr-4'>
                        <button className="btn rounded-[30px] hover:bg-[#64ab45] hover:text-white">
                            <VscOpenPreview />
                            Reviews
                        </button>
                    </div>
                    <div className='flex items-center mr-4'>
                        <button className="btn rounded-[30px] hover:bg-[#64ab45] hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
            <TourDinfo details={details} />
        </div>

    );
};

export default TourD;