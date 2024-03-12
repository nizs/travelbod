import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTour = () => {
    const navigate = useNavigate();

    const handleaddtour = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const destination_name = form.destination_name.value;
        const location = form.location.value;
        const price = form.price.value;
        const duration = form.duration.value;
        const type = form.type.value;
        const img = form.img.value;
        const include1 = form.include1.value;
        const include2 = form.include2.value;
        const include3 = form.include3.value;
        const include4 = form.include4.value;
        const Exclude1 = form.Exclude1.value;
        const Exclude2 = form.Exclude2.value;
        const Exclude3 = form.Exclude3.value;
        const Exclude4 = form.Exclude4.value;
        const Cards = form.Cards.value;
        const parking = form.parking.value;
        const coupons = form.coupons.value;
        const reservations = form.reservations.value;
        const restaurant = form.restaurant.value;
        const smoking = form.smoking.value;

        const addedTour = {
            title,
            destination_name,
            location,
            price,
            duration,
            type,
            img,
            include1,
            include2,
            include3,
            include4,
            Exclude1,
            Exclude2,
            Exclude3,
            Exclude4,
            Cards,
            parking,
            coupons,
            reservations,
            restaurant,
            smoking
        }
        console.log(addedTour);

        fetch('http://localhost:5000/addtour', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedTour)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('your data has been sendt to TravelBod DB')
                    form.reset();
                    navigate('/tours')
                }
            })
    }

    return (
        <div className="hero min-h-screen bg-[url('https://i.ibb.co/MffCBwt/pexels-alfonso-escalante-2533092.jpg')] pb-16">
            <div className="w-full md:w-4/5 p-4 md:p-6">
                <div>
                    <h1 className="text-center my-8 ml-2 text-3xl md:text-4xl font-bold">Add Your <span className='text-[#64ab45]'>Tour</span></h1>
                </div>
                <div className="shadow-2xl rounded-lg bg-base-100 py-12">
                    <form onSubmit={handleaddtour} className="card-body">
                        <div className='grid md:grid-cols-3 gap-4'>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Tour Title</span>
                                    </label>
                                    <input type="text" name='title' placeholder='Enter Tour Title' className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Destination Name</span>
                                    </label>
                                    <input type="text" name='destination_name' placeholder='Destinaiton Name' className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Tour Location</span>
                                    </label>
                                    <input type="text" name='location' placeholder='enter location' className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Price</span>
                                    </label>
                                    <input type="text" name='price' placeholder="Enter Tour Price" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Duration</span>
                                    </label>
                                    <input type="text" name='duration' placeholder="Enter Duration" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Type</span>
                                    </label>
                                    <input type="text" name='type' placeholder='Tour Type' className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Tour Image</span>
                                    </label>
                                    <input type="text" name='img' placeholder="Enter Tour Image" className="input input-bordered border-[#64ab45]" required />
                                </div>
                            </div>
                            <div>
                                {/* Included services */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">include Service One</span>
                                    </label>
                                    <input type="text" name='include1' placeholder="Include service One" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">include Service Two</span>
                                    </label>
                                    <input type="text" name='include2' placeholder="Include service Two" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">include Service Three</span>
                                    </label>
                                    <input type="text" name='include3' placeholder="Include service Three" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">include Service Four</span>
                                    </label>
                                    <input type="text" name='include4' placeholder="Include service Four" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                {/* Excluded services */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Exclude Service One</span>
                                    </label>
                                    <input type="text" name='Exclude1' placeholder="Exclude service One" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Exclude Service Two</span>
                                    </label>
                                    <input type="text" name='Exclude2' placeholder="Exclude service Two" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Exclude Service Three</span>
                                    </label>
                                    <input type="text" name='Exclude3' placeholder="Exclude service Three" className="input input-bordered border-[#64ab45]" required />
                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Exclude Service Four</span>
                                    </label>
                                    <input type="text" name='Exclude4' placeholder="Exclude service Four" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                {/* amenities */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">Cards</span>
                                    </label>
                                    <input type="text" name='Cards' placeholder="Card accepted on Not" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">parking</span>
                                    </label>
                                    <input type="text" name='parking' placeholder="parking available on Not" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">coupons</span>
                                    </label>
                                    <input type="text" name='coupons' placeholder="coupons free on Not" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">reservations</span>
                                    </label>
                                    <input type="text" name='reservations' placeholder="reservations available or not" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">restaurant</span>
                                    </label>
                                    <input type="text" name='restaurant' placeholder="restaurant available or not" className="input input-bordered border-[#64ab45]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400 font-semibold">smoking</span>
                                    </label>
                                    <input type="text" name='smoking' placeholder="smoking allowed or not" className="input input-bordered border-[#64ab45]" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6 md:w-1/2 md:mx-auto">
                            <button type='submit' className="btn md:mt-8 btn-primary bg-[#64ab45] border-0 text-white hover:bg-[#82d75d] text-[18px]">Add Tour</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTour;