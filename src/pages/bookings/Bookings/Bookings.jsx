import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../shared/provider/AuthProvider';
import Booking from './Booking';
import { FaArrowLeft } from "react-icons/fa";
import './Bookings.css';

const Bookings = () => {
    const { user, loading } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [bookings])

    const handleDelete = id => {
        const proceed = confirm('Are you sure to delete your bookings?');
        if (proceed) {
            const url = `http://localhost:5000/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Your Booking has been successfully Deleted')
                    }
                    const remainingBookings = bookings.filter(booking => booking._id !== id);
                    setBookings(remainingBookings);
                })

        }
    }

    const handleUpdateBooking = id => {
        const proceedUpdate = confirm('Are you sure to update your Bookings?');
        if (proceedUpdate) {
            const url = `http://localhost:5000/bookings/${id}`;
            fetch(url, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'confirmed' })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        alert('Your Booking Data has been updated successfully');
                    }
                    const remainingBookings = bookings.filter(booking => booking._id !== id);
                    const updatedBooking = bookings.find(booking => booking._id === id);
                    updatedBooking.status = 'confirmed';
                    const newBooking = [updatedBooking, ...remainingBookings]
                    setBookings(newBooking);
                })
        }
    }

    return (
        <div className="overflow-x-auto md:p-16 section-back">
            <div className='text-center'>
                <h1 className=" mt-5 text-3xl md:text-5xl font-bold">My <span className='text-[#64ab45]'>Bookings</span></h1>
            </div>
            <div className='py-12 container mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-4'>
                    {
                        bookings.map(booking => <Booking
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleUpdateBooking={handleUpdateBooking}
                        ></Booking>)
                    }
                </div>
            </div>
            <div className='text-center my-8'>
                <Link to='/home'>
                    <button className="btn text-white bg-[#64ab45] border-0 hover:border-[#64ab45] text-[#64ab45] hover:bg-[#82d75d]">
                        <FaArrowLeft />
                        Back To Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Bookings;