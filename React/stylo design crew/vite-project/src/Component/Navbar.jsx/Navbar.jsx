import React, { useState } from 'react';
import { Link } from 'react-router-dom';




export default function Navbar() {


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // State to manage the services dropdown visibility on mobile

    // Function to toggle the menu state (open/close)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Function to close the menu when clicking the close button (X)
    const closeMenu = () => setIsMenuOpen(false);

    // Function to toggle the services dropdown visibility on mobile
    const toggleServicesDropdown = () => setIsServicesOpen(!isServicesOpen);



    return (

        <>
            <nav className="flex items-center justify-between p-4 bg-white-900 relative">
                <div className="flex items-center space-x-4">
                    <img src="https://placehold.co/50x50" alt="Company Logo" className="h-8" />
                    <div>
                        <span className="text-xl font-bold">pinki</span>
                        <span className="text-sm block">Design Crew</span>
                    </div>
                </div>

                {/* Desktop and Tablet Menu (hidden on mobile) */}
                <div className="hidden md:flex items-center space-x-6">
                    <div className="relative group">
                        <button className="flex items-center space-x-1" onClick={toggleServicesDropdown}>
                            <span>Services</span>
                            <i className={`fas ${isServicesOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        </button>
                        {/* Dropdown on hover for large screens */}
                        <div className={`absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isServicesOpen ? 'block' : 'hidden'}`}>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Service 1</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Service 2</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Service 3</a>
                        </div>
                    </div>
                    <Link to={"ourportfolio"} className="hover:underline">Our Portfolio</Link>
                    <Link to={"Pricing"} className="hover:underline">Pricing</Link>
                    <Link to={"aboutus"} className="hover:underline">About Us</Link>
                    <Link to={"reviews"} className="hover:underline">Reviews</Link>
                    <Link to={"contactus"} className="hover:underline">Contact Us</Link>
                    <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-1 focus:outline-none hover:bg-indigo-600 rounded">+1 (866) 657 5669</button>
                    <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-1 focus:outline-none hover:bg-indigo-600 rounded">Live Chat</button>

                    {/* <a href="#" className="hover:underline">+1 (866) 657 5669</a> */}
                    {/* <a href="#" className="hover:underline">Live Chat</a> */}


                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden flex items-center space-x-4">
                    {!isMenuOpen && (
                        <button
                            className="border border-white px-4 py-2 rounded-md"
                            onClick={toggleMenu}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    )}
                </div>

                {/* Full-Screen Mobile Navigation Menu with Slide-in Effect */}
                <div
                    className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-3xl"
                        onClick={closeMenu}
                    >
                        <i className="fas fa-times"></i>
                    </button>

                    {/* Mobile Services Dropdown */}
                    <div className="text-white">
                        <button
                            onClick={toggleServicesDropdown}
                            className="flex items-center space-x-1 text-white hover:underline"
                        >
                            <span>Services</span>
                            <i className={`fas ${isServicesOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        </button>
                        {isServicesOpen && (
                            <div className="space-y-2 mt-2">
                                <a href="#" className="block text-white px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>Service 1</a>
                                <a href="#" className="block text-white px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>Service 2</a>
                                <a href="#" className="block text-white px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>Service 3</a>
                            </div>
                        )}
                    </div>

                    <Link to={"ourportfolio"} className="text-white hover:underline" >Our Portfolio</Link>
                    <Link to={"Pricing"} className="text-white hover:underline" >Pricing</Link>
                    <Link to={"aboutus"} className="text-white hover:underline" >About Us</Link>
                    <Link to={"reviews"} className="text-white hover:underline" >Reviews</Link>
                    <Link to={"contactus"} className="text-white hover:underline" >Contact Us</Link>
                </div>
            </nav>



        </>
    );
}
