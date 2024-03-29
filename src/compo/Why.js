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
                <div className=' pt-32 '>
                    <div className=' text-center flex flex-col justify-center lg:text-5xl md:text-4xl sm:text-2xl text-3xl  md:py-6'>
                        <h1 className='font-bold'>Other low-code platforms get</h1>
                        <h1 className='font-bold '>developers to <span className='bg-gradient-to-r from-blue-400 via-red-500 to-red-700  hover:from-green-500 hover:to-green-300 inline-block text-transparent bg-clip-text'>work faster</span></h1>
                        <p className=' text-center  lg:text-1xl md:text-2xl sm:text-2xl text-2xl  py-6 px-8 pb-24'>But with 1000+ webs to develop, you need something simple and smart.</p>

                        <p className=' text-center  lg:text-1xl md:text-4xl sm:text-2xl text-3xl font-bold-300 py-6 px-8 pb-10'>The only way you can clear your backlog
                            is with a platform built for everyone</p>
                    </div>

                    <div className='grid  md:grid-cols-2 gap-3 max-w-[1020px] mt-[0px] w-full h-auto mx-auto justify-items-center items-center pb-24'>




                        <div class="max-w-sm p-10 border border-gray-200 rounded-lg shadow  bg-yellow-300 transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-105">

                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">KEEP COSTS LOW</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-900">OOur competitive prices and quick time-to-market guarantee that your projects get completed within budget and timelines. Additionally, our efficient resource allocation and optimization strategies ensure that you maximize your return on investment while minimizing unnecessary expenditures, helping you stay financially prudent and competitive in the market.</p>
                        </div>

                        <div>
                            <div class="max-w-sm p-10 border border-gray-200 rounded-lg shadow bg-orange-300 transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-105">

                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">ACCESS BUSINESS-READY TEAMS</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-900 ">Our bench strength across various technologies helps in quicker and efficient customer engagement, right from day one. With a diverse and skilled team readily available, we ensure seamless onboarding and swift project initiation, allowing businesses to leverage our expertise and hit the ground running with their initiatives. </p>
                            </div>
                        </div>
                        <div>
                            <div class="max-w-sm p-10  border border-gray-200 rounded-lg shadow bg-green-300 transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-105">

                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                                        ACHIEVE HIGHEST STANDARDS OF QUALITY</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-900">With our highly experienced team of technical experts, customers can expect only the highest standards of quality. We adhere to rigorous quality assurance protocols and continuously strive for excellence in every aspect of our service delivery, ensuring that our clients receive unparalleled solutions that meet and exceed their expectations.</p>
                            </div>

                        </div>
                        <div class="max-w-sm p-10  border border-gray-200 rounded-lg shadow bg-red-400 transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-105">



                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">BENEFIT FROM QUICKER TIME-TO-MARKET</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-900">Our deep understanding of Agile practices and the culture of automation-first approach, lead to quicker time-to-market. By leveraging cutting-edge technologies and streamlined processes, we empower businesses to swiftly bring their ideas from conception to reality, gaining a competitive edge in today's fast-paced market landscape.</p>

                        </div>

                        <div class="max-w-sm p-10  border border-gray-200 rounded-lg shadow bg-indigo-500 transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-105">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Focus on Customer Experience</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-900">Deeply ingrained in all our processes and workflows is the intense focus on customer experience. We strive to anticipate and exceed our customers' expectations at every touchpoint, ensuring seamless interactions and delivering solutions that truly resonate with their needs and goals.</p>
                        </div>

                        <div class="max-w-sm p-10  border border-gray-200 rounded-lg shadow bg-purple-300 transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-105">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Honesty and Integrity</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-900">At K7 InfoTech, we pride ourselves on fostering a culture of trust and stability, where honesty and integrity serve as the bedrock of our operations. Transparency and ethical conduct are ingrained in every aspect of our interactions, ensuring that we consistently uphold the highest standards of professionalism and reliability.</p>

                        </div>
                    </div>
                </div>

            </Parallax>

            <Testimonials />
            <Ceo />
        </div>
    )
}
