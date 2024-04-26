import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: Adds smooth scrolling behavior
        });
    };

    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>K7 InfoTech</h1>
                <p className='py-4 text-gray-600'>At K7 Infotech, we understand the importance of staying ahead in today's competitive market. That's why we're dedicated to providing top-notch software and outsourcing services that help businesses stay agile, efficient, and ahead of the curve.</p>
            </div>
            <div className=' flex lg:justify-end  ml-70 mt-6'>
                <div className=' pr-11'>
                    <h6 className='font-medium text-gray-900'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm text-gray-700'><Link to='/home' onClick={handleScrollToTop}>About</Link></li>
                        <li className='py-2 text-sm text-gray-700'><Link to='/Why' onClick={handleScrollToTop}>Why K7</Link></li>
                        <li className='py-2 text-sm text-gray-700'><Link to='/Service' onClick={handleScrollToTop}>Service</Link></li>
                        <li className='py-2 text-sm text-gray-700'><Link to='/Contactus' onClick={handleScrollToTop}>Contactus</Link></li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-900'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm text-gray-700'><Link to='/Contactus' onClick={handleScrollToTop}>Support</Link></li>
                        <li className='py-2 text-sm text-gray-700'><Link to='/Contact' onClick={handleScrollToTop}>Careers</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
