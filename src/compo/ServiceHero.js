import React from 'react'
import main from '../assets/modern-equipped-computer-lab (1).jpg'
import { Link } from 'react-router-dom';
export const ServiceHero = () => {
    return (
        <div className="pt-24">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                    Our Support
                </h1>
            </div>
            <section className="bg-white  max-w-[1240px] mx-auto">
                <section class="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
                    <img class="xl:max-w-6xl" src={main} alt="" />
                    <div class="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                        <div class="flex justify-between font-bold text-sm">

                            <p class="text-gray-400"></p>
                        </div>
                        <h2 class="text-3xl font-semibold mt-4 md:mt-10">Support</h2>
                        <p class="my-3 text-justify font-medium text-gray-700 leading-relaxed">At our core, we champion sustainability and ethical practices. By leveraging our expertise in Java, Core Java, Spring Boot, Microservices, APIs, backend, frontend, React.js, JavaScript, AngularJS, TypeScript, and Apache, we help clients align their technological transformations with their environmental and social responsibility goals. Together, we create value not only in business but also in communities worldwide, ensuring a brighter, more sustainable future for all.
                        </p>
                        <Link to='/Contactus' href="javascript:;">
                            <button class="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Read
                                More</button> </Link>
                    </div>
                </section>
            </section></div>
    )
}
