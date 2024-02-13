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
                <div class="relative flex flex-col min-w-0 break-words bg-gray-200 shadow-soft-xl rounded-2xl bg-clip-border">
                    <div class="flex-auto p-4">
                        <div class="flex flex-wrap -mx-3">
                            <div class="max-w-full px-3 lg:w-1/2 lg:flex-none">
                                <div class="flex flex-col h-full">

                                    <h5 class="font-bold pt-5">{title}</h5>
                                    <p class="mb-12">{subtitle}</p>
                                    <Link to='/Contact' class="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500" href="javascript:;">
                                        Apply
                                        <i class="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
                                    </Link>
                                </div>
                            </div>
                            <div class="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">


                                <div class="relative flex items-center justify-center rounded-xl h-full">
                                    <img class="relative w-5/6 z-20  rounded-x1 " src={imageSrc} alt="rocket" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Frame>
        </section>

    );
};

export default ServiceSection;