import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Destination from './Destination';
import '../../bookings/Bookings/Bookings.css'

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])
    return (
        <div className='py-16 container mx-auto section-back'>
            <div className='text-center'>
                <h3 className='text-1xl font-bold text-[#64ab45] bg-[#dde5da] px-4 py-2 w-2/3 md:w-1/3 mx-auto rounded'>Destination lists
</h3>
                <h1 className="my-8 text-3xl md:text-5xl font-bold">Go Exotic Places</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-4'>
                {
                    destinations.map(destination => <Destination
                        key={destination._id}
                        destination={destination}
                    ></Destination>)
                }
            </div>
        </div>
    );
};

export default Destinations;