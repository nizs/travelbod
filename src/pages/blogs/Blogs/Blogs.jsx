import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import './Blogs.css';

const Blogs = () => {
    const [Blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='py-16 mx-2 md:mx-4'>
            <div className='text-center'>
                <h3 className='text-1xl font-bold text-[#64ab45] bg-[#dde5da] px-4 py-2 w-2/3 md:w-1/3 mx-auto rounded'>Featured Blogs</h3>
                <h1 className="my-8 text-3xl md:text-5xl font-bold">Amazing News & <span className='text-[#64ab45]'>Blogs</span> For Every Single Update</h1>
            </div>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={25}
                    loop={true}
                    navigation={true}
                    breakpoints={
                        {
                            320: {
                                slidesPerView: 1
                            },
                            375: {
                                slidesPerView: 1
                            },
                            425: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            }
                        }
                    }
                    modules={[Navigation]}
                    className='traveslider'
                >
                    <div className=''>
                        {
                            Blogs.map(blog => <SwiperSlide className=''>
                                <div className="card shadow-xl bg-base-100 p-4">
                                    <div className='relative'>
                                        <figure className='rounded-lg'><img src={blog.img} alt="blog_preview_image" /></figure>
                                        <p className='bg-[#f7921e] text-white font-semibold absolute block px-5 py-1 mt-[-17px] ml-2.5'>{blog.category}</p>
                                        <div className='flex flex-col items-center bg-[#64ab45] text-white font-semibold absolute inline-block top-0 right-5 px-3 py-1 ml-2.5 rounded-b-lg'>
                                            <p className=''>{blog.date.day}</p>
                                            <p className='font-normal mt-[-4px]'>{blog.date.month}</p>
                                        </div>
                                    </div>
                                    <div className="card-body text-left">
                                        <div>
                                            <div className='flex items-center'>
                                                <FaRegUserCircle className='text-[#64ab45] me-2 text-[18px]' />
                                                <span className='me-4 text-[#82828A] font-semibold'>{blog.author}</span>
                                                <span className='text-[#82828A] font-semibold'>{blog.comments} Comments</span>
                                            </div>
                                        </div>
                                        <h2 className="card-title">
                                            {blog.title}
                                        </h2>
                                        <p className='text-[#82828A]'>{blog.description}</p>
                                        <Link to={`/blogs/${blog._id}`} className='font-semibold text-[#82828A] flex items-center text-[14px] mt-4 hover:text-[#64ab45]'>
                                            <span>Read More </span>
                                            <span className='ml-2 text-[#64ab45]'><FaArrowRight /></span>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Blogs;