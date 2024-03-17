import React, { useContext } from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../shared/provider/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const checkoutdetails = useLoaderData();
    const { _id, title, price, img } = checkoutdetails;
    const navigate = useNavigate();

    const handleCheckout = e => {
        e.preventDefault();
        const form = e.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const phone = form.phone.value;
        const email = user?.email;

        const checkout = {
            tour_title: title,
            fname,
            lname,
            phone,
            email,
            img,
            price,
            tour_id: _id
        }
        console.log(checkout);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(checkout)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('your data has been sendt to TravelBod DB')
                    form.reset()
                    navigate('/bookings')
                }
            })
    }

    return (
        <div className="hero min-h-screen bg-[#f4fff4]">
            <div className="w-full md:p-6">
                <div className=' border-l-2 border-[#64ab45]'>
                    <h1 className="my-8 ml-2 text-3xl md:text-2xl font-bold">Book Your <span className='text-[#64ab45]'>Tour</span></h1>
                </div>
                <div className="shadow-2xl bg-base-100">
                    <form onSubmit={handleCheckout} className="card-body">
                        <div className='grid md:grid-cols-1 gap-4'>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Tour Title</span>
                                    </label>
                                    <input type="text" placeholder={title} className="input input-bordered border-[#64ab45]" readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Tour ID</span>
                                    </label>
                                    <input type="text" placeholder={_id} className="input input-bordered border-[#64ab45]" readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">First Name</span>
                                    </label>
                                    <input type="text" name='fname' placeholder="First Name" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Last Name</span>
                                    </label>
                                    <input type="text" name='lname' placeholder="Last Name" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder={user?.email} className="input input-bordered border-[#64ab45]" readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Your Phone</span>
                                    </label>
                                    <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered border-[#64ab45]" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary bg-[#64ab45] border-0 text-white hover:bg-[#82d75d] text-[18px]">Book Tour</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;