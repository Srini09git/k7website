import React from 'react'
import carr from '../assets/white.jpg'
import { Link } from 'react-router-dom';

export const ClickApply = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: Adds smooth scrolling behavior
        });
    };
    return (

        <div>
            <div className=' flex-wrap bg-gradient-to-r from-gray-100 to-gray-200 p-10 md:p-20 flex items-center  justify-around mt-4'>

                <a href="" className='p-3'>
                    <Link to='/Contact' href="javascript:;" onClick={handleScrollToTop}>
                        <div class="relative  max-w-96 w-auto rounded-lg bg-gradient-to-tr from-red-500 to-blue-300 p-0.5 shadow-lg">
                            <div class="bg-white p-7 rounded-md">
                                <h1 class="font-bold text-xl mb-2">Careers</h1>
                                <p>We hire and develop people who have different backgrounds, different perspectives, and different lived experiences. These differences ensure that we have and attract the cognitive diversity to deliver a variety of perspectives, observations, and insights which are essential to drive the innovation needed to reinvent.</p>
                            </div>
                        </div>
                    </Link>
                </a>

                <a href="" className='p-3'>
                    <Link to='/Support' href="javascript:;" onClick={handleScrollToTop}>
                        <div class="relative max-w-96 w-auto rounded-lg bg-gradient-to-tr from-red-500 to-blue-300 p-0.5 shadow-lg">
                            <div class="bg-white p-7 rounded-md">
                                <h1 class="font-bold text-xl mb-2">Support</h1>
                                <p>We help our clients advance their environmental, social and governance goals by connecting sustainability to their transformations; operate our business with a strong commitment to the environment, ethics and human rights; and work to create value in communities around the world.</p>
                            </div>
                        </div>
                    </Link>
                </a>
                <a href="" className='p-3'>
                    <Link to='/Course' href="javascript:;" onClick={handleScrollToTop}>
                        <div class="relative  max-w-96 w-auto rounded-lg bg-gradient-to-tr from-red-500 to-blue-300 p-0.5 shadow-lg">
                            <div class="bg-white p-7 rounded-md">
                                <h1 class="font-bold text-xl mb-2">Course</h1>
                                <p>At K7 Infotech, we specialized training in Java full-stack and modern frontend technologies, led by a seasoned professional with 14 year's experience. Gain hands-on skills & confidence to excel in the software industry. Join us at K7IT to unleash your potential as a full-stack developer.</p>
                            </div>
                        </div>
                    </Link>
                </a>
            </div>
        </div>
    )
}
