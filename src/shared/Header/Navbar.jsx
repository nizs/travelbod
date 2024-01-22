import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../../project_plan/project_images/TravelBod_logo.svg';

const Navbar = () => {
    const menuitem = <>
        <li className='mr-2 font-bold text-base text-slate-500 hover:text-white hover:bg-[#64ab45] hover:rounded'><Link to='/home'>Home</Link></li>
        <li className='mr-2 font-bold text-base text-slate-500 hover:text-white hover:bg-[#64ab45] hover:rounded'><Link>Tours</Link></li>
        <li className='mr-2 font-bold text-base text-slate-500 hover:text-white hover:bg-[#64ab45] hover:rounded'><Link>Events</Link></li>
        <li className='mr-2 font-bold text-base text-slate-500 hover:text-white hover:bg-[#64ab45] hover:rounded'><Link to='/about'>About</Link></li>
        <li className='font-bold text-base text-slate-500 hover:text-white hover:bg-[#64ab45] hover:rounded'><Link>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 py-4">
            <div className='container mx-auto'>
                <div className="navbar-start inline-flex items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-[#64ab45] hover:bg-[#64ab45] hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52">
                            {menuitem}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-20' src={logo} alt="TravelBod_Logo" />
                        <Link to='/' className=" text-[#64ab45] font-bold text-xl hidden md:inline-flex">TravelBod</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuitem}
                    </ul>
                </div>
                <div className="navbar-end flex">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-[#64ab45]">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52">
                        <li className='hover:text-white hover:bg-[#64ab45] hover:rounded'>
                            <a className="justify-between">
                                Profile
                                <span className="badge bg-[#64ab45] text-white">New</span>
                            </a>
                        </li>
                        <li className='hover:text-white hover:bg-[#64ab45] hover:rounded'><a>Settings</a></li>
                        <li className='hover:text-white hover:bg-[#64ab45] hover:rounded'><a>Logout</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;


