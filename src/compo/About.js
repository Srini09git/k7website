import React from 'react';
import about1 from '../assets/DrawKit Vector Illustration Project Manager (1).png';
import about2 from '../assets/DrawKit Vector Illustration Project Manager (4).png';
import about3 from '../assets/DrawKit Vector Illustration Project Manager (6).png';
import Frame from './Frame';
import { Parallax } from 'react-parallax';
import bgimg from '../assets/13268.jpg'


const About = () => {
    return (
        <Parallax strength={300} bgImage={bgimg} className=' object-fill'>
            <div className='w-full py-16 px-4 ' id="about-section ">
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
                    <Frame>
                        <img className='w-[500px] mx-auto my-4' src={about1} alt='/' />

                    </Frame>
                    <div className='flex flex-col justify-center gap-3'>
                        <p className='text-[#df0000] font-bold md:text-4xl sm:text-3xl text-2xl py-2'>About Us</p>
                        <p>
                            K7 Infotech is Software Development & Outsourcing company based in Bangalore.
                        </p>
                        <p>
                            Today we are regarded as one of the most reliable and trusted software Development company specializing in Web Development, Java Development & App Development.
                        </p>
                        <p>
                            We undertake projects as simple as Website Development or web Designing to Complex Web Applications like CRM, E-commerce Development and Android/iPhone App Development.
                        </p>
                        <p>
                            We believe quality always speaks more than words and thrive to provide state of the art technology in all the relative fields.
                        </p>
                        <p>
                            Serving clients all over the world from small businesses, to individuals to Fortune 100+ companies, we established ourselves as a top Software Development company in Bangalore
                        </p>

                    </div>
                </div>


                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>

                    <div className='flex flex-col justify-center gap-3'>

                        <p>
                            K7 Infotech is Software Development & Outsourcing company based in Bangalore.
                        </p>
                        <p>
                            Today we are regarded as one of the most reliable and trusted software Development company specializing in Web Development, Java Development & App Development.
                        </p>
                        <p>
                            We undertake projects as simple as Website Development or web Designing to Complex Web Applications like CRM, E-commerce Development and Android/iPhone App Development.
                        </p>
                        <p>
                            We believe quality always speaks more than words and thrive to provide state of the art technology in all the relative fields.
                        </p>
                        <p>
                            Serving clients all over the world from small businesses, to individuals to Fortune 100+ companies, we established ourselves as a top Software Development company in Bangalore
                        </p>

                    </div>
                    <Frame>
                        <img className='w-[500px] mx-auto my-4' src={about2} alt='/' />

                    </Frame>
                </div>


                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
                    <Frame>
                        <img className='w-[500px] mx-auto my-4' src={about3} alt='/' />

                    </Frame>
                    <div className='flex flex-col justify-center gap-3'>

                        <p>
                            K7 Infotech is Software Development & Outsourcing company based in Bangalore.
                        </p>
                        <p>
                            Today we are regarded as one of the most reliable and trusted software Development company specializing in Web Development, Java Development & App Development.
                        </p>
                        <p>
                            We undertake projects as simple as Website Development or web Designing to Complex Web Applications like CRM, E-commerce Development and Android/iPhone App Development.
                        </p>
                        <p>
                            We believe quality always speaks more than words and thrive to provide state of the art technology in all the relative fields.
                        </p>
                        <p>
                            Serving clients all over the world from small businesses, to individuals to Fortune 100+ companies, we established ourselves as a top Software Development company in Bangalore
                        </p>
                        <button className='bg-black text-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default About;
