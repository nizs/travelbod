import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DesTour from './DesTour';

const DesTours = () => {
    const destinationTours = useLoaderData();
    return (
        <div className='py-8 container mx-auto'>
            <div className='text-center'>
            <h1 className="my-8 text-3xl md:text-5xl font-bold">Amazing tour places around the <span className='text-[#64ab45]'>world</span></h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4'>
                {
                    destinationTours.map(dtour => <DesTour
                        key={dtour._id}
                        dtour={dtour}
                    ></DesTour>)
                }
            </div>
        </div>
    );
};

export default DesTours;