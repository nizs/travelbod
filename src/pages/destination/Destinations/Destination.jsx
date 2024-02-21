import React from 'react';
import { Link } from 'react-router-dom';

const Destination = ({ destination }) => {
    const {name, img } = destination;
    return (
        <Link to={`/destinations/${name}`} className='card before:bg-gradient-to-t from-[#000000] to-[black, 0.5] bg-base-100 shadow-xl image-full'>
            <figure className=''><img src={img} alt="card_img" /></figure>
            <div className="card-body justify-end">
                <p className='text-[20px] text-[#64ab45] grow-0'>Travel to</p>
                <h2 className="card-title text-bold text-3xl text-white">{name}</h2>
            </div>
        </Link>
    );
};

export default Destination;