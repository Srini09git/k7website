import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Hero from './Hero';

const Navbar = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

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

    const closeNav = () => {
        setNav(false); // Close the mobile navigation menu
    };

    return (
        <div className={`h-24 mx-auto px-4 text-black z-50 fixed top-0 left-0 right-0 ${scrolled ? 'bg-white opacity-95' : ''}`}>
            <div className='h-24 max-w-[1240px] mx-auto flex justify-between items-center px-4 text-black z-50 fixed top-0 left-0 right-0'>
                <Link to='/' onClick={handleScrollToTop}><h1 className='w-full text-3xl font-bold text-[#272727]'>K7IT.</h1></Link>
                <ul className='hidden md:flex'>
                    <li className='p-4 hover:bg-gray-900 hover:text-white'><Link to='/' onClick={handleScrollToTop}>AboutUs</Link></li>
                    <li className='p-4 hover:bg-gray-900 hover:text-white'><Link to='/Service' onClick={handleScrollToTop}>Service</Link></li>
                    <li className='relative p-4 group hover:bg-gray-900 hover:text-white' onClick={handleScrollToTop}>
                        <a href=''>Platform</a>
                        <ul className='absolute hidden text-black shadow-lg group-hover:block'>
                            <li className='p-3 border-b border-gray-600 bg-white hover:bg-gray-600 hover:text-white'><Link to='/Why' onClick={handleScrollToTop}>WhyK7</Link></li>
                            <li className='p-3 border-b border-gray-600 bg-white hover:bg-gray-600 hover:text-white'><Link to='/Support' onClick={handleScrollToTop}>Support</Link></li>
                            <li className='p-3 border-b border-gray-600 bg-white hover:bg-gray-600 hover:text-white'><Link to='/Contactus' onClick={handleScrollToTop}>ContactUs</Link></li>
                        </ul>
                    </li>
                    <li className='p-4 hover:bg-gray-900 hover:text-white'><Link to='/Contact'>Careers</Link></li>
                </ul>
                <div onClick={() => setNav(!nav)} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <ul className={`fixed left-0 top-0 w-[100%] h-full bg-lime-200 transition-transform duration-300 ease-in-out ${nav ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                    <Link to='/' onClick={() => { handleScrollToTop(); closeNav(); }}><h1 className='w-full text-3xl font-bold text-[#ffffff] m-4'> K7IT.</h1> </Link>
                    <li className='p-4 border-b border-gray-600'><Link to='/' onClick={() => { handleScrollToTop(); closeNav(); }}>AboutUs</Link></li>
                    <li className='p-4 border-b border-gray-600'><a><Link to='/Service' onClick={() => { handleScrollToTop(); closeNav(); }}>Service</Link></a></li>
                    <li className='p-4 border-b border-gray-600'><Link to='/Why' onClick={() => { handleScrollToTop(); closeNav(); }}>WhyK7</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to='/Support' onClick={() => { handleScrollToTop(); closeNav(); }}>Support</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to='/Contactus' onClick={() => { handleScrollToTop(); closeNav(); }}>Contactus</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to='/Contact' onClick={() => { handleScrollToTop(); closeNav(); }}>Careers</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
