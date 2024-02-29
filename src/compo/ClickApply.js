import React from 'react'
import carr from '../assets/white.jpg'
import { Link } from 'react-router-dom';

export const ClickApply = () => {
    return (
        <div>
            <div className=' flex-wrap bg-gradient-to-r from-gray-100 to-gray-200 p-10 md:p-20 flex items-center  justify-around mt-4'>

                <a href="" className='p-3'>
                    <Link to='/Contact' href="javascript:;">
                        <div class="relative  max-w-96 w-auto rounded-lg bg-gradient-to-tr from-red-500 to-blue-300 p-0.5 shadow-lg">
                            <div class="bg-white p-7 rounded-md">
                                <h1 class="font-bold text-xl mb-2">Careers</h1>
                                <p>Hire Fresher, frontend, backend, ui/ux, Fullstack Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt perspiciatis tempora officiis, neque mollitia nobis iure necessitatibus modi sapiente incidunt sunt molestiae provident dignissimos aut omnis accusantium architecto nihil! Illum? </p>
                            </div>
                        </div>
                    </Link>
                </a>

                <a href="" className='p-3'>
                    <Link to='/Support' href="javascript:;">
                        <div class="relative max-w-96 w-auto rounded-lg bg-gradient-to-tr from-red-500 to-blue-300 p-0.5 shadow-lg">
                            <div class="bg-white p-7 rounded-md">
                                <h1 class="font-bold text-xl mb-2">Support</h1>
                                <p>supporting,  java, frontend, backend, testing, Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores laborum accusantium expedita quasi excepturi asperiores sunt alias eos consequatur autem, vel, odio soluta sit impedit assumenda saepe veritatis fugit?</p>
                            </div>
                        </div>
                    </Link>
                </a>
                <a href="" className='p-3'>
                    <div class="relative  max-w-96 w-auto rounded-lg bg-gradient-to-tr from-red-500 to-blue-300 p-0.5 shadow-lg">
                        <div class="bg-white p-7 rounded-md">
                            <h1 class="font-bold text-xl mb-2">Course</h1>
                            <p>Hire Fresher, frontend, backend, ui/ux, Fullstack  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo dolores voluptates vero est nostrum atque, reprehenderit obcaecati adipisci omnis porro eos dicta quis qui, perferendis harum nesciunt illo cupiditate.</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}
