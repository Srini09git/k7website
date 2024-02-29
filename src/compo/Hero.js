import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax'
import Note from '../assets/5153829.jpg'
import About from './About';
//import { Contact, ContactUs } from './Contact';
import { Followus } from './Followus';

import { VideoBg } from './VideoBg';
import { Why } from './Why';
import { ContactUs } from './ContactUs';
import { Counter } from './Counter';
import { ClickApply } from './ClickApply';
import { GoogleReview } from './GoogleReview';
import { Sponsors } from './Sponsors';



const text = "Most Trusted Software Development & Outsourcing company".split(" ");

const Hero = () => {
    return (
        <div>

            <VideoBg />

            {/*<Parallax strength={300} bgImage={Note} className=' object-fill' style={{ objectFit: 'fill' }}>
                <div className='text-white ' id="hero-section">

                    <div className='max-w-[1020px] mt-[0px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                        <p className='text-[#00df9a]  lg:text-6xl md:text-8xl sm:text-4xl text-4xl font-bold md:py-6'>

                        </p>
                        <p className='text-[#000000]  lg:text-6xl md:text-8xl sm:text-4xl text-4xl font-bold md:py-6'>
                            {text.map((el, i) => (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 4.75,
                                        delay: i / 10,
                                    }}
                                    key={i}
                                >
                                    {el}{" "}
                                </motion.span>
                            ))}
                        </p>
                        <h1 className='font-bold p-2 text-black'>
                            We provide full-cycle software development service, web development, backend development, design and prototying, software development, testing, development and application maintenance
                        </h1>
                        <div className='flex justify-center items-center'>
                            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200  hover:from-green-500 hover:to-green-300 inline-block text-transparent bg-clip-text'>
                                Think.Solve.`Develop`
                            </p>

                        </div>
                         <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
                    </div>

                </div >
            </Parallax>*/}




            <About />
            <Sponsors />

            <Counter />
            <Followus />
            <ClickApply />
            <GoogleReview />


        </div >
    );
};

export default Hero;
