import React from 'react'
import Errorz from '../assets/404.jpg'
import { Link } from 'react-router-dom';


export const Error = () => {
    return (
        <div><section class="bg-white ">
            <div class="container min-h-screen px-6 py-12 lg:flex lg:items-center lg:gap-12 max-w-[1240px] mx-auto">
                <div class="wf-ull lg:w-1/2">
                    <p class="text-sm font-medium text-blue-500 ">404 error</p>
                    <h1 class="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">Page not found</h1>
                    <p class="mt-4 text-gray-500 ">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>

                    <div class="flex items-center mt-6 gap-x-3">
                        <Link to='/home' href="javascript:;">
                            <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto">
                                <svg xmlns="" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>



                                <span>Go back</span>
                            </button>
                        </Link>


                    </div>
                </div>

                <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img class="w-full max-w-lg lg:mx-auto" src={Errorz} alt="" />
                </div>
            </div>
        </section></div>
    )
}
