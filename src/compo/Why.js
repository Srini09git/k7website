import React from 'react'
import { Parallax } from 'react-parallax';
import whybg from '../assets/white.jpg'
export const Why = () => {
    return (

        <Parallax strength={500} bgImage={whybg} bgImageAlt='bg' className='object-fill  '>
            <div className=' pt-32'>
                <div className=' text-center flex flex-col justify-center lg:text-5xl md:text-4xl sm:text-2xl text-3xl  md:py-6'>
                    <h1 className='font-bold'>Other low-code platforms get</h1>
                    <h1 className='font-bold '>developers to <span className='bg-gradient-to-r from-blue-400 via-red-500 to-red-700  hover:from-green-500 hover:to-green-300 inline-block text-transparent bg-clip-text'>work faster</span></h1>
                    <p className=' text-center  lg:text-1xl md:text-2xl sm:text-2xl text-2xl  py-6 px-8 pb-24'>But with 1000+ webs to develop, you need something simple and smart.</p>

                    <p className=' text-center  lg:text-1xl md:text-4xl sm:text-2xl text-3xl font-bold-300 py-6 px-8 pb-10'>The only way you can clear your backlog
                        is with a platform built for everyone</p>
                </div>

                <div className='grid  md:grid-cols-2 gap-3 max-w-[1020px] mt-[0px] w-full h-auto mx-auto justify-items-center items-center pb-24'>


                    <div class="max-w-sm p-10  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-red-200">
                        <svg class="w-7 h-7 text-gray-900 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                        </svg>
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Simple</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">We built K7Infotech simple on purpose. Process owners and business analysts can collaborate with developers to create a culture of innovation.</p>

                    </div>

                    <div class="max-w-sm p-10 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-blue-200">
                        <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                        </svg>
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Fast</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">No-code workflows can be up and running in hours. Fully functional apps can be ready in days. Launch new applications every week.</p>
                    </div>

                    <div>
                        <div class="max-w-sm p-10 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  bg-green-200">
                            <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                            </svg>
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Flexible</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">Automated workflows, custom pages, dashboards, and integrations, all on the same platform.  </p>
                        </div>
                    </div>
                    <div>
                        <div class="max-w-sm p-10  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  bg-yellow-200">
                            <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                            </svg>
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Powerful</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">K7Infotech has everything developers need to build complete applications including reusable custom components and API endpoints.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    )
}
