import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Hero from './Hero';
// import { HashLink as Link } from 'react-router-hash-link';




const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    return (

        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black z-50 fixed top-0 left-0 right-0'>
            <h1 className='w-full text-3xl font-bold text-[#272727]'>K7IT.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'><a href='/home'>AboutUs</a></li>
                <li className='p-4'><a href='/Service'>Service</a></li>
                <li className='relative p-4 group'>
                    <a href='' >Platform</a>
                    <ul className='absolute hidden text-black shadow-lg group-hover:block'>
                        <li className='p-3 border-b border-gray-600'><a href='/Why'>WhyK7</a></li>
                        <li className='p-3 border-b border-gray-600'><a href='/Why/values'>Values</a></li>
                        <li className='p-3 border-b border-gray-600'><a href='/Contactus'>ContactUs</a></li>
                    </ul>
                </li>
                <li className='p-4'><a href='/Contact'>Careers</a></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-lime-200 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#ffffff] m-4'>K7IT.</h1>
                <li className='p-4 border-b border-gray-600'><a href='/home'>AboutUs</a></li>
                <li className='p-4 border-b border-gray-600'><a href='/Service'>Service</a></li>

                <li className='relative p-4 border-b border-gray-600 group'>
                    <a href='/Why' >Platform</a>
                    <ul className='absolute hidden bg-white text-black shadow-lg group-hover:block'>
                        <li className='p-2'><a href='/Why/mission'>Mission</a></li>
                        <li className='p-2'><a href='/Why/values'>Values</a></li>
                        <li className='p-2'><a href='/Contactus'>Team</a></li>
                    </ul>
                </li>
                <li className='p-4 border-b border-gray-600'><a href='/Contact'>Careers</a></li>
            </ul>
        </div>

    );
};

export default Navbar;
