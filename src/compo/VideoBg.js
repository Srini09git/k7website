import React from 'react'
import videoBg from '../video/abstract_line1.mp4'
import { motion } from 'framer-motion';


const text = "Most Trusted Software Development & Outsourcing company".split(" ");

export const VideoBg = () => {
    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <video src={videoBg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay loop muted />

            <div className='max-w-[1020px] mt-[0px] w-full h-screen mx-auto text-center flex flex-col justify-center absolute -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4'>
                <p className='text-[#00df9a]  lg:text-6xl md:text-8xl sm:text-4xl text-4xl font-bold md:py-6'>

                </p>
                <p className='text-[#ffffff]  lg:text-6xl md:text-8xl sm:text-4xl text-4xl font-bold md:py-6'>
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
                <h1 className='font-bold p-2 text-white'>
                    We provide full-cycle software development service, web development, backend development, design and prototying, software development, testing, development and application maintenance
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200  hover:from-green-500 hover:to-green-300 inline-block text-transparent bg-clip-text'>
                        Think.Solve.`Develop`
                    </p>

                </div>
                {/* <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>*/}
            </div>

        </div>

    )
}
