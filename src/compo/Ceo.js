import React, { useRef, useEffect } from 'react';
import Ceophoto from '../assets/k7 profile.png';

export const Ceo = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (contentRef.current) {
                contentRef.current.scrollTop += 1; // Adjust the scrolling speed as needed
                if (contentRef.current.scrollTop >= contentRef.current.scrollHeight - contentRef.current.clientHeight) {
                    contentRef.current.scrollTop = 0;
                }
            }
        }, 50); // Adjust the interval (milliseconds) as needed

        return () => clearInterval(scrollInterval);
    }, []);
    return (
        <div>
            <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">

                        <div className="overflow-y-scroll max-h-[500px] " ref={contentRef}> {/* Adjust the max height as needed */}
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl pb-6 pt-6">Kesavulu Arthala
                                <br class="block sm:hidden" /> <span className='text-blue-500'>CEO</span>
                            </h2>
                            <h1 className=' text-2xl font-semibold pt-3'>From Rags to Riches: The Inspirational Journey of Kesavulu A, Founder of K7 Infotech</h1>

                            <h2 className=' text-2xl text-blue-700 font-bold pt-3 pb-3'>Early Life: Overcoming Adversity</h2>
                            <p className=' text-1x1 '>
                                Growing up in a cramped household where seven to eight family members shared a single room, Kesavulu was no stranger to adversity. Despite the challenging circumstances, he refused to let his environment dictate his future. From a young age, Kesavulu harbored a burning desire to break free from the cycle of poverty and create a better life for himself and his family.
                            </p>

                            <h2 className=' text-2xl text-blue-700 font-bold pt-3 pb-3'>Education: A Path to Success</h2>
                            <p className=' text-1x1 '>
                                Education became Kesavulu's ticket to a brighter future. With limited resources at his disposal, he embarked on a journey of self-study, devouring books and educational materials with relentless determination. Despite lacking access to formal tutoring or educational support, Kesavulu's unwavering commitment to learning saw him excel academically.
                            </p>

                            <h2 className=' text-2xl text-blue-700 font-bold pt-3 pb-3'>Overcoming Financial Hurdles</h2>
                            <p className=' text-1x1 '>
                                However, financial constraints threatened to derail his dreams. Unable to afford the exorbitant college fees, Kesavulu found himself at a crossroads. Determined not to let financial adversity stand in his way, he took matters into his own hands.
                            </p>

                            <h2 className=' text-2xl text-blue-700 font-bold pt-3 pb-3'>Professional Journey: Turning Dreams into Reality</h2>
                            <p className=' text-1x1 '>
                                Despite the challenges and sacrifices, Kesavulu persevered, successfully completing his bachelor's degree in computer science. Armed with a solid educational foundation and a relentless drive to succeed, Kesavulu embarked on his professional journey, eager to carve out a niche for himself in the competitive world of technology.
                            </p>

                            <p className=' text-1x1 '>
                                His first job marked the beginning of a remarkable career trajectory. Over the years, Kesavulu honed his skills, gaining invaluable experience and expertise in the field of software development and IT. Armed with a wealth of knowledge and a burning entrepreneurial spirit, Kesavulu set his sights on a new endeavor – founding his own company.
                            </p>

                            <h2 className=' text-2xl text-blue-700 font-bold pt-3 pb-3'>Entrepreneurial Success: Building K7 Infotech</h2>
                            <p className=' text-1x1 '>
                                In 2019, Kesavulu founded K7 Infotech, a leading IT solutions provider specializing in software development, web design, and digital marketing. Drawing on his own experiences and insights gained from his journey, Kesavulu sought to create a platform that would empower aspiring professionals and equip them with the skills and knowledge needed to succeed in the ever-evolving tech industry.
                            </p>

                            <p className=' text-1x1 '>
                                Parallel to running K7 Infotech, Kesavulu also launched a Java full-stack training program, aimed at bridging the gap between academic learning and industry requirements. Through personalized mentorship and hands-on training, Kesavulu is committed to nurturing the next generation of tech talent, helping them unlock their full potential and pursue rewarding careers in IT.
                            </p>

                            <h2 className=' text-2xl text-blue-700 font-bold pt-3 pb-3'>Conclusion: A Story of Triumph</h2>
                            <p className=' text-1x1 '>
                                Today, Kesavulu's story serves as an inspiration to countless individuals around the world. From humble beginnings to entrepreneurial success, his journey is a testament to the transformative power of hard work, resilience, and unwavering determination. Through his relentless pursuit of excellence and commitment to empowering others, Kesavulu A has truly epitomized the spirit of triumph over adversity.
                            </p>

                        </div>
                        <div>
                            <div className="relative">
                                <img className="w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={Ceophoto} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
};
