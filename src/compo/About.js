import React from 'react';
import about1 from '../assets/DrawKit Vector Illustration Project Manager (1).png';
import about2 from '../assets/DrawKit Vector Illustration Project Manager (4).png';
import about3 from '../assets/DrawKit Vector Illustration Project Manager (6).png';
import Frame from './Frame';
import { Parallax } from 'react-parallax';
import bgimg from '../assets/13268.jpg'
import { Link } from 'react-router-dom';


const About = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: Adds smooth scrolling behavior
        });
    };


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

                            K7 Infotech is a distinguished Software Development & Outsourcing company headquartered in Bangalore, India. With a relentless commitment to excellence and innovation, we provide comprehensive software solutions tailored to meet the diverse needs of our clients worldwide.
                        </p>
                        <p>
                            Driven by a passion for technology and a customer-centric approach, we have earned a reputation as one of the most reliable and trusted software development companies in the industry. Our expertise spans across a wide spectrum of domains, including Web Development, Java Development, App Development, Full Stack Development, Backend Development, Frontend Development, UI/UX Design, API Development, and Custom Software Development.
                        </p>

                    </div>
                </div>


                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>

                    <div className='flex flex-col justify-center gap-3'>

                        <p>
                            At K7 Infotech, we understand that every project is unique, and we approach each assignment with dedication and professionalism. Whether it's a simple Website Development or a complex Web Application such as CRM, E-commerce Development, or Android/iPhone App Development, we possess the skills and experience to deliver exceptional results that exceed our clients' expectations.
                        </p>
                        <p>
                            Quality is at the forefront of everything we do. We firmly believe that quality speaks louder than words, and we are committed to delivering state-of-the-art technology solutions that not only meet but exceed industry standards. Our team of highly skilled professionals leverages the latest tools, methodologies, and best practices to ensure the highest quality deliverables.
                        </p>
                        <p>
                            Our client base is diverse, ranging from small businesses and startups to individuals and Fortune 100+ companies. Regardless of the size or complexity of the project, we approach each client with the same level of dedication and commitment, striving to build long-lasting partnerships based on trust, integrity, and mutual success.
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
                            As a top Software Development company in Bangalore, we take pride in our ability to deliver results that drive business growth and success. Our track record of successful projects and satisfied clients is a testament to our expertise, professionalism, and dedication to excellence.
                        </p>
                        <p>
                            Whether you're looking to develop a new software solution, enhance an existing application, or outsource your software development needs, K7 Infotech is your trusted partner for success. Contact us today to learn more about how we can help you achieve your goals and propel your business to new heights.
                        </p>
                        <Link to='/why' href="javascript:;" onClick={handleScrollToTop}>
                            <button className='bg-black hover:bg-gray-200 hover:text-blue-600  text-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>WHY !! K7 Infotech </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default About;
