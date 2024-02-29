import React from 'react';
import Frame from './Frame'; // assuming you have a Frame component
import front from '../assets/frontend k7.jpg';
import backend from '../assets/backend k7.jpg';
import apiz from '../assets/Api k7.jpg';
import uiux from '../assets/ui k7.jpg';
import { Link } from 'react-router-dom';


const ServiceSection = ({ title, subtitle, imageSrc }) => {
    return (
        <section className=" lg:items-center items-center">
            {/* {<div className="lg:w-1/2">
                <p className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">{title}</p>
                <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">{subtitle}</h2>
            </div>

            <div className="mt-4 lg:w-1/2 lg:mt-0">
                <Frame>
                    <img className="object-cover w-full h-64 rounded-lg md:h-96" src={imageSrc} alt="" />
                </Frame>
            </div>} */}

            <Frame>

                <div class="px-2 py-20 w-full flex justify-center">
                    <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                        <div class="lg:w-1/2">
                            <div class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg">
                                <img src={imageSrc} alt="rocket" />
                            </div>
                        </div>
                        <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                            <h2 class="text-3xl text-gray-800 font-bold">
                                {title}
                                <span class="text-indigo-600"> Development</span>
                            </h2>
                            <p class="mt-4 text-gray-600">
                                {subtitle}
                            </p>
                            <Link to='/Contact'>
                                <div class="mt-8">
                                    <a href="#" class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Start Now</a>
                                </div></Link>

                        </div>
                    </div>
                </div>


            </Frame>
        </section>

    );
};

export default ServiceSection;