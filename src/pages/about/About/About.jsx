import React from 'react';
import aboutimg1 from '../../../../src/assets/project_images/carousel/carousel_img_1.jpg';
import aboutimg2 from '../../../../src/assets/project_images/carousel/carousel_img_2.jpg';
import { MdVerified } from "react-icons/md";
import { MdOutlineHealthAndSafety, MdPriceCheck, MdOutlineAirplaneTicket } from "react-icons/md";


const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative lg:w-1/2'>
                    <img className='rounded-tr-[64px] w-full px-4 h-[300px] md:h-[500px]' src={aboutimg1} alt="aboutimg1" />
                    <img className='absolute border-8 rounded-[20px] border-white w-2/5 top-3/4 md:w-2/5 lg:w-2/4 left-[-1] md:top-2/5 lg:top-2/3' src={aboutimg2} alt="aboutimg2" />
                    {/* <img className='absolute border-8 rounded-[20px] border-white w-2/5 right-[-10px] top-3/4 mt-16 lg:top-1/2' src={aboutimg3} alt="aboutimg3" /> */}
                    <div className='absolute bg-white rounded-xl border-white w-2/4 md:w-2/5 right-0 top-3/4 mt-16 lg:mt-20 lg:top-2/3 p-2 md:p-4 lg:p-2 mt-10'>
                        <div className='border-2 border-orange-500 rounded-xl flex items-center p-2 md:p-6 lg:p-4'>
                            <h2 className='text-4xl md:text-6xl lg:text-5xl font-bold text-[#64ab45]'>15</h2>
                            <p className='ml-2 text-slate-500 font-bold text-[12px] sm:text-sm md:text-xl lg:text-[16px]'>Years Of Experience</p>
                        </div>
                    </div>
                </div>
                <div className='mt-20 md:mt-40 lg:mt-14 lg:w-1/2'>
                    <h3 className='text-1xl font-bold text-[#64ab45] bg-[#dde5da] px-4 py-2 w-2/3 rounded'>About Us</h3>
                    <h1 className="my-8 text-3xl md:text-5xl font-bold">Great opportunity for adventure & travels</h1>
                    <div className='flex items-start'>
                        <MdVerified className='mt-4 me-2 text-5xl md:text-4xl md:mt-6 text-orange-400' />
                        <div className='mr-4'>
                            <div className='bg-white p-2 rounded-full'>
                                <MdOutlineHealthAndSafety className='text-6xl text-[#64ab45]' />
                            </div>
                            <div className='h-24 border-l border-dashed border-gray-300 ms-9'>
                                <span className=''></span>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-[18px] font-bold'>Safety first always</h3>
                            <p className='text-[#82828A]'>Set perspiciatis unde omnis estenatus voluptatem totarem aperiae.</p>
                        </div>
                    </div>
                    <div className='flex items-start'>
                        <MdVerified className='mt-4 me-2 text-5xl md:text-4xl md:mt-6 text-orange-400' />
                        <div className='mr-4'>
                            <div className='bg-white p-2 rounded-full'>
                                <MdPriceCheck className='text-6xl text-[#64ab45]' />
                            </div>
                            <div className='h-24 border-l border-dashed border-gray-300 ms-9'>
                                <span className=''></span>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-[18px] font-bold'>Low price & friendly</h3>
                            <p className='text-[#82828A]'>Quis autem vel eum iure voluptate velit esse nihile consequatur.</p>
                        </div>
                    </div>
                    <div className='flex items-start'>
                        <MdVerified className='mt-4 me-2 text-5xl md:text-4xl md:mt-6 text-orange-400' />
                        <div className='mr-4'>
                            <div className='bg-white p-2 rounded-full'>
                                <MdOutlineAirplaneTicket className='text-6xl text-[#64ab45]' />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-[18px] font-bold'>Trusted travel guide</h3>
                            <p className='text-[#82828A]'>At vero accusamus dignissimos ducimus blanditiis deleniti atque quos.</p>
                        </div>
                    </div>
                    <button className="btn mt-8 bg-[#64ab45] text-white hover:bg-[#82d75d] hover:text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;