import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className='container mx-auto'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className=" menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/" className="text-dark px-4">Home</Link></li>
                                <li><Link to="/statistics" className="text-dark px-4">Statistics</Link></li>
                                <li tabIndex={0}>
                                    <Link to="/appliedjobs" className="justify-between text-dark px-4">
                                    Applied Jobs
                                    </Link>
                                   
                                </li>
                                <li><Link to="/blog" className="justify-between text-dark px-4">Blog</Link></li>
                            </ul>
                        </div>
                        <Link className="normal-case text-2xl font-bold text-gray-700" to="/">NextGen</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className=" menu-horizontal '">
                            <li><Link to="/"  className="text-dark px-4">Home</Link></li>
                            <li><Link to="/statistics"  className="text-dark px-4">Statistics</Link></li>
                            <li><Link to="/appliedjobs" className="text-dark px-4">Applied Jobs</Link></li>
                            <li><Link to="/blog" className="text-dark px-4">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link className="btn btn-info text-white">Star Applying</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;