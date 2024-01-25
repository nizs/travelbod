import React from 'react';
import register from '../../assets/project_images/shared/register.png';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='bg-[#F5F7FA]'>
            <div className="grid md:grid-cols-2 container mx-auto px-4 flex-inline py-20">
                <div className='bg-[#EFF6FE] p-8'>
                    <img className='' src={register} alt="register_img" />
                    <div className='bg-white p-4 flex items-center justify-center'>
                        <span className='font-medium'>Already a member ?</span>
                        <span>
                            <Link to='/login'>
                                <button className="btn btn-sm ms-2 text-white bg-[#64ab45] hover:bg-[#82d75d]">Login</button>
                            </Link>
                        </span>
                    </div>
                </div>
                <div className='bg-white p-2 md:p-4 lg:p-8'>
                    <div className='p-8 pb-0'>
                        <h3 className='text-3xl font-bold'>Create a free account</h3>
                        <p className='text-[#82828A] text-[17px] my-2'>A few clicks away from creating your account</p>
                    </div>
                    <form className="card-body pt-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control  mt-6">
                            <button className="btn text-white text-[17px] bg-[#64ab45] hover:bg-[#82d75d]">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;