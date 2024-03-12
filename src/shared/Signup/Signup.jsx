import React, { useContext, useState } from 'react';
import register from '../../assets/project_images/shared/register.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import '../Login/login.css';

const Signup = () => {
    const { createUser, loginProvider, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLoginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        loginProvider(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUpdateProfile(name, photoURL);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
        form.reset();

    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(err => console.log(err))
    }

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
                    <form onSubmit={handleSignup} className="card-body pt-4">
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
                            <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered" required />
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control  mt-6">
                            <button type='submit' className="btn text-white text-[17px] bg-[#64ab45] hover:bg-[#82d75d]">Sign up</button>
                        </div>
                    </form>
                    <div className='travelbod_login'>
                        <div className='flex items-center py-5'>
                            <div className='border w-1/2'></div>
                            <div className='mx-2'>or</div>
                            <div className='border w-1/2'></div>
                        </div>
                        <div className='flex flex-col py-4'>
                            <button onClick={handleLoginWithGoogle} className='mb-2 btn text-[black] text-[17px] bg-[white] hover:bg-[#efecec]' variant="primary" type='submit'>
                                <FaGoogle className='text-2xl text-[#64ab45] mr-2' />
                                SIGNIN WITH GOOGLE
                            </button>
                            <button className='mb-2 btn text-[black] text-[17px] bg-[white] hover:bg-[#efecec]' variant="primary" type='submit'>
                                <FaFacebookSquare className='text-2xl text-[blue] mr-2' />
                                SIGNIN WITH FACEBOOK
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;