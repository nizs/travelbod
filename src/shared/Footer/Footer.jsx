import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { TiSocialTumbler } from "react-icons/ti";
const Footer = () => {
    return (
        <>
            <footer className="p-8 md:p-12 lg:p-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12 bg-[#1d231f] text-[#E1E1E1] text-[16px]">
                <aside>
                    <img className='travelbod_logo w-full rounded pb-2 mb-4' src='https://i.ibb.co/375JwB0/Travel-Bod-Logo.png' alt="TravelBod_Logo" />
                    <p>We offer best suitable package for you in best possible way which makes your travel memorable and TravelBod is the choice you should make when you explore the world</p>
                    <div className='flex items-center justify-around mt-8'>
                        <span className='inline-block bg-[#383838] p-3.5 rounded-full mr-4 hover:bg-[#64ab45] hover:text-white cursor-pointer'>
                            <FaFacebookF className='text-[14px] ' />
                        </span>
                        <span className='inline-block bg-[#383838] p-3.5 rounded-full mr-4 hover:bg-[#64ab45] hover:text-white cursor-pointer'>
                            <FaTwitter className='text-[14px] ' />
                        </span>
                        <span className='inline-block bg-[#383838] p-3.5 rounded-full mr-4 hover:bg-[#64ab45] hover:text-white cursor-pointer'>
                            <FaLinkedinIn className='text-[14px] ' />
                        </span>
                        <span className='inline-block bg-[#383838] p-3.5 rounded-full hover:bg-[#64ab45] hover:text-white cursor-pointer'>
                            <TiSocialTumbler className='text-[14px] ' />
                        </span>
                    </div>
                </aside>
                <nav className='flex flex-col gap-4'>
                    <header className="footer-title">Pages</header>
                    <Link className='hover:text-[#64ab45]' to='/about'>About Us</Link>
                    <Link className='hover:text-[#64ab45]' to='/blogs'>Our Blogs</Link>
                    <Link className='hover:text-[#64ab45]' to=''>privacy Policy</Link>
                    <Link className='hover:text-[#64ab45]' to='/contact'>Contact Us</Link>
                </nav>
                <nav>
                    <header className="footer-title">Newsletter</header>
                    <p>Subscribe our newsletter to get our latest update & news.</p>
                    <div className="join mt-4">
                        <input type='email' className="input rounded join-item text-black" placeholder="Email" />
                        <button className="btn join-item border-0 text-[white] rounded bg-[#64ab45] hover:bg-[#82d75d]"><FaPaperPlane /></button>
                    </div>
                </nav>
                <nav className='flex flex-col gap-4'>
                    <header className="footer-title">Contact</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <div className='text-center bg-[#101311] text-[#E1E1E1] p-4'>
                © 2024 Copyrights by <span className='text-[#64ab45] font-bold'>TravelBod</span>. All Rights Reserved
            </div>
        </>
    );
};

export default Footer;