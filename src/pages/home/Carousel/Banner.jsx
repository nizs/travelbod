import React from 'react';
import '../Carousel/Banner.css'
import { motion } from 'framer-motion';

const Banner = ({ banner }) => {
    const { id, previd, nextid, img, heading, subheading } = banner;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <img src={img} className="w-full" />
            <div className="absolute flex items-center w-full h-full bg-gradient-to-r from-[#151515] to-[black, 0.5]">
                <div className='text-center p-4 w-full flex flex-col text-white space-y-5 lg:text-left lg:w-2/3 lg:pl-12'>
                    <motion.h1
                        initial={{ y: -50 }}
                        animate={{ y: [50, 0] }}
                        transition={{
                            duration: "1",
                            delay: "0.5"
                        }}
                        className='font-bold text-2xl md:text-4xl lg:text-6xl'>
                        {heading}
                    </motion.h1>
                    <motion.p
                        initial={{ y: -30 }}
                        animate={{ y: [30, 0] }}
                        transition={{
                            duration: "1",
                            delay: "0.5"
                        }}
                        className='banner_para'>{subheading}
                        </motion.p>
                    <div>
                        <motion.button
                            initial={{ y: -40 }}
                            animate={{ y: [40, 0] }}
                            transition={{
                                duration: "1",
                                delay: "0.5"
                            }}
                            className="btn bg-[#64ab45] hover:bg-[#82d75d] text-white border-0 sm:btn-sm mb-2 md:btn-md md:me-2 lg:btn-lg">Let's Get Started</motion.button>
                    </div>
                </div>
            </div>
            <div className="absolute flex w-full justify-between lg:justify-end px-5 bottom-4 md:top-1/2">
                <a href={`#slide${previd}`} className="btn btn-circle me-2 bg-[#e5e5e521] hover:bg-[#64ab45] border-0 text-white">❮</a>
                <a href={`#slide${nextid}`} className="btn btn-circle bg-[#e5e5e521] hover:bg-[#64ab45] border-0 text-white">❯</a>
            </div>
        </div>
    );
};

export default Banner;