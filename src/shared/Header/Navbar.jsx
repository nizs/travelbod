import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaRegUserCircle } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const menuitem = <>
        <li className='mr-2 font-bold text-base text-[#64ab45] hover:text-white hover:bg-[#64ab45] hover:rounded'><Link to='/home'>Home</Link></li>
        <li className='mr-2 font-bold text-base text-[#64ab45] hover:text-white hover:bg-[#64ab45] hover:rounded'><Link to='/tours'>Tours</Link></li>
        <li className='mr-2 font-bold text-base text-[#64ab45] hover:text-white hover:bg-[#64ab45] hover:rounded'><Link to='/destinations'>Destination</Link></li>
        <li className='mr-2 font-bold text-base text-[#64ab45] hover:text-white hover:bg-[#64ab45] hover:rounded'><Link to='/about'>About</Link></li>
        <li className='font-bold text-base text-[#64ab45] hover:text-white hover:bg-[#64ab45] hover:rounded'><Link to='/blogs'>Blog</Link></li>
        <li className='font-bold text-base text-[#64ab45] hover:text-white hover:bg-[#64ab45] hover:rounded'><Link>Contact</Link></li>
    </>
    const handleLogoutuser = () => {
        logoutUser();
    }
    return (
        <div className="navbar bg-base-100 py-4">
            <div className='container mx-auto'>
                <div className="navbar-start inline-flex items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-[#64ab45] hover:bg-[#64ab45] hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 w-52">
                            {menuitem}
                        </ul>
                    </div>
                    <div className='flex items-center ms-2'>
                        <img className='travelbod_logo' src='https://i.ibb.co/375JwB0/Travel-Bod-Logo.png' alt="TravelBod_Logo" />
                        {/* <Link to='/' className=" text-[#64ab45] font-bold text-xl hidden md:inline-flex">TravelBod</Link> */}
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuitem}
                    </ul>
                </div>
                <div className="navbar-end flex">
                    <button className="btn btn-ghost btn-circle mg_glass">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
                <div className="dropdown dropdown-end">
                    {
                        user?.displayName ?
                            <>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-[#64ab45] mx-2">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 w-52">
                                    <li className='hover:text-white hover:bg-[#64ab45] hover:rounded'>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <Link to='/bookings'>
                                        <li className='hover:text-white hover:bg-[#64ab45] hover:rounded'><a>My Bookings</a></li>
                                    </Link>
                                    <Link to='/addtour'>
                                        <li className='hover:text-white hover:bg-[#64ab45] hover:rounded'><a>Create Tour</a></li>
                                    </Link>
                                    <li className='hover:text-white hover:bg-[#64ab45] hover:rounded'><a>Settings</a></li>
                                    <li onClick={handleLogoutuser} className='hover:text-white hover:bg-[#64ab45] hover:rounded'><a>Logout</a></li>
                                </ul>
                            </>
                            :
                            <div className='flex'>
                                <div className="rounded-full flex justify-center items-center">
                                    <div className='p-4 bg-[#e3ffd7] rounded-full me-2 py-[8px] px-[0px] bg-[#eaffe0]'>
                                        <FaRegUserCircle className='text-3xl text-[#64ab45] mx-2' />
                                    </div>
                                    <Link to='/login'>
                                        <button className="btn text-white text-[17px] bg-[#64ab45] hover:bg-[#82d75d]">Login</button>
                                    </Link>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;


