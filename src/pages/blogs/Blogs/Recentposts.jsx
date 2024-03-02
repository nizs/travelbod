import React, { useEffect, useState } from 'react';
import './Blogs.css';
import { FaComments } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Recentposts = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='bg-[#f4fff4] rounded-xl'>
            <div>
                <h4 className='font-bold text-[22px] px-6 pt-8'>RECENT POSTS</h4>
                <div className='border-b-4 mx-6 border-[#64ab45] w-9 my-6'></div>
            </div>
            {
                blogs.map(blog =>
                    <Link to={`/blogs/${blog._id}`}>
                        <div className="flex items-center px-6 py-4">
                            <figure className=''>
                                <img className='rounded-xl w-[150px] h-[80px] md:w-[130px] md:h-[90px] lg:w-[150px] lg:h-[80px]' src={blog.img} alt="post_img" />
                            </figure>
                            <div className="card-body p-4">
                                <div className='flex items-center'>
                                    <FaComments className='text-[#64ab45] me-2 text-[18px]' />
                                    <span className='text-[#82828A] font-semibold'>{blog.comments} Comments</span>
                                </div>
                                <h2 className="text-[18px] font-bold card-title">{blog.title}</h2>
                            </div>
                        </div></Link>
                )
            }
        </div>
    );
};

export default Recentposts;