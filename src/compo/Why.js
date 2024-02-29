import React from 'react'
import { Parallax } from 'react-parallax';
import whybg from '../assets/white.jpg'
import { Ceo } from './Ceo';
import flex from '../assets/icon/DrawKit Vector Illustration Project Manager (14).png'
import simple from '../assets/icon/DrawKit Vector Illustration Project Manager (13).png'
import time from '../assets/icon/DrawKit Vector Illustration Project Manager (15).png'
import fast from '../assets/icon/DrawKit Vector Illustration Project Manager (12).png'
import { Testimonials } from './Testimonials';


export const Why = () => {
    return (
        <div>
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


                        <div class="max-w-sm p-10  border border-gray-200 rounded-lg shadow bg-yellow-200">

                            <img className='w-24 text-gray-900 dark:text-gray-400 mb-3' src={simple} alt='/' />

                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Simple</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-900">We built K7Infotech simple on purpose. Process owners and business analysts can collaborate with developers to create a culture of innovation.</p>

                        </div>

                        <div class="max-w-sm p-10 border border-gray-200 rounded-lg shadow  bg-blue-200">
                            <img className='w-24 text-gray-900 dark:text-gray-400 mb-3' src={flex} alt='/' />
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Fast</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-900">No-code workflows can be up and running in hours. Fully functional apps can be ready in days. Launch new applications every week.</p>
                        </div>

                        <div>
                            <div class="max-w-sm p-10 border border-gray-200 rounded-lg shadow bg-green-200">
                                <img className='w-24 text-gray-900 dark:text-gray-400 mb-3' src={time} alt='/' />
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Flexible</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-900 ">Automated workflows, custom pages, dashboards, and integrations, all on the same platform.  </p>
                            </div>
                        </div>
                        <div>
                            <div class="max-w-sm p-10  border border-gray-200 rounded-lg shadow bg-red-200">
                                <img className='w-24 text-gray-900 dark:text-gray-400 mb-3' src={fast} alt='/' />
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Powerful</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-900">K7Infotech has everything developers need to build complete applications including reusable custom components and API endpoints.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Parallax>

            <Testimonials />
        </div>
    )
}
