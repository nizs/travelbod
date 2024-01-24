import React from 'react';
import { FaLocationDot, FaCircleDollarToSlot } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import './Tour.css';
const Tour = ({ tour }) => {
    const { _id, title, location, price, img } = tour;

    return (
        <div className="card before:bg-gradient-to-t from-[#000000] to-[black, 0.5] bg-base-100 shadow-xl image-full">
            <figure className=''><img src={img} alt="card_img" /></figure>
            <div className="card-body justify-end">
                <div>
                    <ReactStars
                        count={5}
                        size={24}
                        color="#ffd700"
                    />
                </div>
                <h2 className="card-title text-bold text-white">{title}</h2>
                <p className='grow-0'>
                    <span className='flex items-center font-semibold'>
                        <FaLocationDot className='mr-2 text-[#64ab45]' /> {location}
                    </span>
                </p>

                <div className="flex items-center justify-between">
                    <p className='grow-0'>
                        <span className='flex items-center font-semibold'>
                            <FaCircleDollarToSlot className='mr-2 text-[#64ab45]' /> From
                            <span className='ml-2 text-[#64ab45]'>
                                {price}
                            </span>
                        </span>
                    </p>
                    <Link to={`/tours/${_id}`}>
                        <button className="btn btn-sm xl:px-2 bg-[#e5e5e521] hover:bg-[#64ab45] text-white border-0 ml-4">Tour Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tour;