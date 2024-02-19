import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Hero from './Hero';
// import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={` h-24  mx-auto px-4 text-black z-50 fixed top-0 left-0 right-0  ${scrolled ? 'bg-white opacity-90' : ''}`}>
            <div className='h-24 max-w-[1240px] mx-auto flex justify-between items-center   px-4 text-black z-50 fixed top-0 left-0 right-0  '>
                <h1 className='w-full text-3xl font-bold text-[#272727]'>K7IT.</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4'><a href='/home'>AboutUs</a></li>
                    <li className='p-4'><a href='/Service'>Service</a></li>
                    <li className='relative p-4 group'>
                        <a href=''>Platform</a>
                        <ul className='absolute hidden text-black shadow-lg group-hover:block'>
                            <li className='p-3 border-b border-gray-600 bg-white'><a href='/Why'>WhyK7</a></li>
                            <li className='p-3 border-b border-gray-600  bg-white'><a href='/Why/values'>Values</a></li>
                            <li className='p-3 border-b border-gray-600  bg-white'><a href='/Contactus'>ContactUs</a></li>
                        </ul>
                    </li>
                    <li className='p-4'><a href='/Contact'>Careers</a></li>
                </ul>
                <div onClick={() => setNav(!nav)} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <ul className={nav ? 'fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-lime-200 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-[#ffffff] m-4'>K7IT.</h1>
                    <li className='p-4 border-b border-gray-600'><a href='/home'>AboutUs</a></li>
                    <li className='p-4 border-b border-gray-600'><a href='/Service'>Service</a></li>
                    <li className='p-4 border-b border-gray-600'><a href=''>Platform</a></li>
                    <li className='p-4 border-b border-gray-600'><a href='/Why'>WhyK7</a></li>
                    <li className='p-4 border-b border-gray-600'><a href='/Why'>item</a></li>
                    <li className='p-4 border-b border-gray-600'><a href='/Contactus'>Contactus</a></li>
                    <li className='p-4 border-b border-gray-600'><a href='/Contact'>Careers</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
