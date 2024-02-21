import React from 'react';

const Booking = ({ booking }) => {
    const {
        tour_title,
        fname,
        lname,
        phone,
        email,
        img,
        price,
        tour_id: _id
    } = booking;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold">{tour_title}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td className='font-semibold'>
                <span className=''>{fname}</span> <span className=''>{lname}</span>
            </td>
            <td className='font-semibold'>{email}</td>
            <td className='font-bold text-[#64ab45]'>{price}</td>
            {/* <th className='flex items-center'>
                {
                    status === 'confirmed' ?
                        <span className='font-bold text-green-700 mr-2'>Confirmed</span>
                        :
                        <button onClick={() => handleBookingUpdate(_id)} className="btn btn-xs sm:btn-sm md:btn-md btn btn-outline text-white bg-stone-950 hover:bg-stone-500 hover:text-white hover:border-stone-400 mr-4">Please Confirm</button>

                }
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline text-purple-700 hover:bg-red-700 hover:text-white hover:border-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th> */}
        </tr>
    );
};

export default Booking;