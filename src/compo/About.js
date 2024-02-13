import React from 'react';
import Laptop from '../assets/vecteezy_online-education-concept-illustration-digital-classroom_10869731.png';
import Frame from './Frame';
import { Parallax } from 'react-parallax';
import bgimg from '../assets/13268.jpg'

const About = () => {
    return (
        <Parallax strength={300} bgImage={bgimg} className=' object-fill'>
            <div className='w-full py-16 px-4 ' id="about-section">
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                    <Frame>
                        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
                    </Frame>
                    <div className='flex flex-col justify-center gap-3'>
                        <p className='text-[#df0000] font-bold md:text-4xl sm:text-3xl text-2xl py-2'>About Us</p>
                        <p>
                            K7 Infotech is Software Development & Outsourcing company based in Bangalore.
                        </p>
                        <p>
                            Today we are regarded as one of the most reliable and trusted software Development company specializing in Web Development, Java Development & App Development.
                        </p>
                        <p>
                            We undertake projects as simple as Website Development or web Designing to Complex Web Applications like CRM, E-commerce Development and Android/iPhone App Development.
                        </p>
                        <p>
                            We believe quality always speaks more than words and thrive to provide state of the art technology in all the relative fields.
                        </p>
                        <p>
                            Serving clients all over the world from small businesses, to individuals to Fortune 100+ companies, we established ourselves as a top Software Development company in Bangalore
                        </p>
                        <button className='bg-black text-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default About;
