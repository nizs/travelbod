import React from 'react';
import { Link } from 'react-router-dom';
import { TiTick } from "react-icons/ti";
import { IoClose, IoRestaurantOutline } from "react-icons/io5";
import { HiCreditCard } from "react-icons/hi2"
import { FaCarSide } from "react-icons/fa";
import { RiCoupon2Fill } from "react-icons/ri";
import { RxIdCard } from "react-icons/rx";
import { IoLogoNoSmoking } from "react-icons/io";
// import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Checkout from '../../checkout/Checkout/Checkout';

const TourDinfo = ({ details }) => {
    const { _id, img, include1, include2, include3, include4, Exclude1, Exclude2, Exclude3, Exclude4, Cards, parking, coupons, reservations, restaurant, smoking } = details;
    return (
        <div className='grid md:grid-cols-3 gap-4 px-4 py-16 md:px-8'>
            <div className='md:col-span-2'>
                {/* title & tour description */}
                <div>
                    <h2 className='text-3xl font-bold my-4'>Explore Tour</h2>
                    <p className='text-[#82828A] text-[17px]'>Sed ut perspiciatis unde omniste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ip quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.</p>
                    <div className='grid sm:grid-cols-1 lg:grid-cols-2 lg:grid-cols-2 gap-4 my-4'>
                        <div>
                            <div>
                                <h3 className='text-2xl font-bold'>Advance Facilities</h3>
                                <p className='text-[#82828A] text-[17px] my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold my-2'>Challenge</h3>
                                <p className='text-[#82828A] text-[17px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore quasi architecto beatae vitae dicta.</p>
                            </div>
                            <div className='hidden md:hidden lg:hidden xl:block'>
                                <h3 className='text-2xl font-bold my-2'>Explore</h3>
                                <p className='text-[#82828A] text-[17px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore quasi architecto beatae vitae dicta.</p>
                            </div>
                        </div>
                        <div className=''>
                            <img className='' src={img} alt="tour_description_img" />
                        </div>
                    </div>
                </div>
                {/* include/Exclude */}
                <div className='my-6'>
                    <h3 className='text-2xl font-bold my-2'>Include/Exclude</h3>
                    <div className='flex flex-col border-b-[1px] border-solid border-[#e1e1e1] md:flex-row'>
                        <ul className='mb-4 md:w-1/2'>
                            <li className='flex items-center my-4'><span><TiTick className='text-2xl text-[#64ab45]' /></span><span className='text-[#82828A] text-[17px]'>{include1}</span></li>
                            <li className='flex items-center my-4'><span><TiTick className='text-2xl text-[#64ab45]' /></span><span className='text-[#82828A] text-[17px]'>{include2}</span></li>
                            <li className='flex items-center my-4'><span><TiTick className='text-2xl text-[#64ab45]' /></span><span className='text-[#82828A] text-[17px]'>{include3}</span></li>
                            <li className='flex items-center my-4'><span><TiTick className='text-2xl text-[#64ab45]' /></span><span className='text-[#82828A] text-[17px]'>{include4}</span></li>
                        </ul>
                        <ul className='md:w-1/2 md:pl-8'>
                            <li className='flex items-center my-4'><span><IoClose className='text-2xl text-[#ef0000]' /></span><span className='text-[#82828A] text-[17px]'>{Exclude1}</span></li>
                            <li className='flex items-center my-4'><span><IoClose className='text-2xl text-[#ef0000]' /></span><span className='text-[#82828A] text-[17px]'>{Exclude2}</span></li>
                            <li className='flex items-center my-4'><span><IoClose className='text-2xl text-[#ef0000]' /></span><span className='text-[#82828A] text-[17px]'>{Exclude3}</span></li>
                            <li className='flex items-center my-4'><span><IoClose className='text-2xl text-[#ef0000]' /></span><span className='text-[#82828A] text-[17px]'>{Exclude4}</span></li>
                        </ul>
                    </div>
                </div>
                {/* Tour Amenities */}
                <div className='my-6'>
                    <h3 className='text-3xl font-bold my-2'>Tour Amenities</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:flex-row'>
                        <ul className='mb-4 '>
                            <li className='flex items-center my-4'><span><HiCreditCard className='text-4xl mr-2 text-[#64ab45]' /></span><span className='text-[#82828A]'>{Cards}</span></li>
                            <li className='flex items-center my-4'><span><FaCarSide className='text-4xl mr-2 text-[#64ab45]' /></span><span className='text-[#82828A]'>{parking}</span></li>
                        </ul>
                        <ul className='mb-4 '>
                            <li className='flex items-center my-4'><span><RxIdCard className='text-4xl mr-2 text-[#64ab45]' /></span><span className='text-[#82828A]'>{reservations}</span></li>
                            <li className='flex items-center my-4'><span><IoRestaurantOutline className='text-4xl mr-2 text-[#64ab45]' /></span><span className='text-[#82828A]'>{restaurant}</span></li>

                        </ul>
                        <ul className='mb-4'>

                            <li className='flex items-center my-4'><span><RiCoupon2Fill className='text-4xl mr-2 text-[#64ab45]' /></span><span className='text-[#82828A]'>{coupons}</span></li>
                            <li className='flex items-center my-4'><span><IoLogoNoSmoking className='text-4xl mr-2 text-[#64ab45]' /></span><span className='text-[#82828A]'>{smoking}</span></li>
                        </ul>
                    </div>
                </div>
                {/* Tour Accordion */}
                <div>
                    <h3 className='text-3xl font-bold my-8'>Tour Plan</h3>
                    <div className="collapse collapse-arrow bg-base-200 mb-6 ">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        Day 1st
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius quodsi molestiae at, nostrum definitiones his cu. Discere referrentur mea id, an pri novum possim deterruisset.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 mb-6">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Day 2nd
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius quodsi molestiae at, nostrum definitiones his cu. Discere referrentur mea id, an pri novum possim deterruisset.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Day 3rd
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius quodsi molestiae at, nostrum definitiones his cu. Discere referrentur mea id, an pri novum possim deterruisset.</p>
                        </div>
                    </div>
                </div>
                {/* Tour Location */}
                <div>
                    <h3 className='text-3xl font-bold my-8'>Location</h3>
                    <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.670397597713!2d-73.9906705!3d40.7032562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31142b2c19%3A0xa192819c77f4c7a5!2sMain%20St%2C%20Brooklyn%2C%20NY%2011201%2C%20USA!5e0!3m2!1sen!2sbd!4v1706169483253!5m2!1sen!2sbd" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            
            {/* page sidebar */}
            <div className=''>
                <Checkout />
                {/* services page sidebar component  */}
                {/* <div className='bg-[#F3F8F6] p-8 md:p-4 lg:p-8 rounded'>
                    <h2 className='text-[20px] font-semibold border-l-[2px] border-solid border-[#64ab45] px-4'> Booking Tour</h2>
                    <div className='my-8'>
                        <Link to={`/checkout/${_id}`}>
                            <button className=" w-full btn bg-[#64ab45] hover:bg-[#82d75d] rounded border-0  text-white text-[17px]">
                            <MdOutlineShoppingCartCheckout  />Checkout</button>
                        </Link>
                    </div>
                </div> */}
                {/* Download info sidebar component */}
                {/* <div className='bg-slate-900 my-8 p-8 rounded'>
                    <h2>Tour information</h2>
                </div> */}
                {/* quote/help sidebar component */}
                {/* <div className='bg-slate-900 my-4 p-8 rounded'>
                    <h2>Last Minuite Deals</h2>
                </div> */}
            </div>
        </div>
    );
};

export default TourDinfo;