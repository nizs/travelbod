import React from 'react';

const Tour = ({ tour }) => {
    const { title, location, price, img } = tour;
    return (
        <div className="card bg-base-100 shadow-xl image-full px-2">
            <figure><img src={img} alt="card_img" /></figure>
            <div className="card-body justify-end">
                <h2 className="card-title">{title}</h2>
                <p className='grow-0'>{location}</p>
                <p className='grow-0'>{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-[#e5e5e521] hover:bg-[#64ab45] text-white border-0">Tour Details</button>
                </div>
            </div>
        </div>
    );
};

export default Tour;