import React from 'react';
import { TiTick } from "react-icons/ti";


const Booking = ({ booking, handleDelete, handleUpdateBooking }) => {
    const { tour_title, fname, lname, phone, email, img, price, _id, status } = booking;

    return (
        <>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='w-full h-full' src={img} alt="booked_card_img" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-2 text-[#64ab45]">{tour_title}</h2>
                    <p><span className='font-bold'>Customer Name:</span> {fname}{lname}</p>
                    <p><span className='font-bold'>Your Email:</span> {email}</p>
                    <p><span className='font-bold'>Price:</span> <span className='text-2xl text-[#64ab45]'>{price}</span></p>
                    <div className="card-actions flex-col content-start">

                        {
                            status === 'confirmed' ?

                                <div className='flex mr-8'>
                                    <p><span className='font-bold mr-2'>Confirmed</span></p>
                                    <TiTick className='text-[22px] text-[#64ab45]' />
                                </div>
                                :
                                <div>
                                    <button onClick={() => handleUpdateBooking(_id)} className="btn btn-xs sm:btn-sm md:btn-md btn btn-outline text-white bg-[#64ab45] mt-4 hover:bg-stone-500 hover:text-white hover:border-stone-400 mr-4">Please Confirm</button>
                                </div>

                        }
                        <div>
                            <button onClick={() => handleDelete(_id)} className="btn btn-outline text-[#64ab45] mt-4 hover:bg-red-700 hover:text-white hover:border-red-700">
                                Delete Tour
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>







    );
};

export default Booking;