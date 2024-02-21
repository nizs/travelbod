import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../shared/Loader/Loader';
import { AuthContext } from '../../../shared/provider/AuthProvider';
import Booking from './Booking';
import { FaArrowLeft } from "react-icons/fa";

const Bookings = () => {
    const { user, loading } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div className="overflow-x-auto md:p-16">
            <div className='text-center'>
                <h1 className="mt-0 mb-8 text-3xl md:text-5xl font-bold">My <span className='text-[#64ab45]'>Bookings</span></h1>
            </div>
            <table className="table">
                {/* head */}
                <thead className='bg-[#64ab45]'>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox border-white" />
                            </label>
                        </th>
                        <th className='text-white text-[14px]'>Booked Tour</th>
                        <th className='text-white text-[14px]'> Customer Name</th>
                        <th className='text-white text-[14px]'>Customer Email</th>
                        <th className='text-white text-[14px]'>Price</th>
                    </tr>
                </thead>
                <tbody className='bg-[#f7fff7]'>
                    {
                        bookings.map(booking => <Booking
                            key={booking._id}
                            booking={booking}
                        ></Booking>)
                    }
                </tbody>
            </table>
            <div className='mt-8 text-center'>
                <Link to='/home'>
                    <button className="btn btn-outline hover:border-[#64ab45] text-[#64ab45] hover:bg-[#64ab45]">
                        <FaArrowLeft />
                        Back To Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Bookings;