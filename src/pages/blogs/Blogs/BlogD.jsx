import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { VscOpenPreview } from "react-icons/vsc";
import { FaShare } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { GiAlarmClock } from "react-icons/gi";
import { IoAirplaneOutline } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import BlogDinfo from "../Blogs/BlogDinfo";
import '../../blogs/Blogs/Blogs.css'

const BlogD = () => {
    const details = useLoaderData();
    // console.log(details);
    const { _id, title, category, author, comments, date, img, description} = details;

    return (
        <div>
            {/* Blog header */}
            <div className='flex flex-col items-center md:p-8 bg-[#F3F8F6] backimg'>
                <h1 className='text-[22px] md:text-[28px] font-bold text-white text-center'>{title}</h1>
                <p className='text-white font-bold mt-4'>Blogs / {category}</p>
            </div>

            {/* ratings and social share */}
            
            <BlogDinfo details={details} />
        </div>

    );
};

export default BlogD;