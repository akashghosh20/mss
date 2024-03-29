import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/teachers">Teachers</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
            <div class="dropdown">
                    <label tabindex="0" class="btn m-1 bg-accent">Results</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/results">Class 6</Link></li>
                        <li><Link to="/results7">Class 7</Link></li>
                        <li><Link to="/results8">Class 8</Link></li>
                        <li><Link to="/results9">Class 9</Link></li>
                        <li><Link to="/results10">Class 10</Link></li>
                        
                        
                    </ul>
            </div>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/login">Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-bold">Mrizapur Secondary School</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;