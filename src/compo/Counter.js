import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import handshake from '../assets/icon/handshake-svgrepo-com.png'
import project from '../assets/icon/pie-chart-svgrepo-com (1).png'
import icn from '../assets/icon/route-svgrepo-com (1).png'
import people from '../assets/icon/group-svgrepo-com.png'

export const Counter = () => {
    const [counterState, setCounterState] = useState(false)
    return (

        <div>
            <div
                class="relative h-[600px] overflow-hidden bg-center bg-cover  bg-no-repeat bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            </div>
            <div class="container px-6 md:px-12">
                <div
                    class="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                    <div class="mb-12  grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                    </div>
                    <div className='px-5 py-6'>
                        <ScrollTrigger onEnter={() => setCounterState(true)}
                            onExit={() => setCounterState(false)} >
                            <div className='grid gap-8 lg:grid-cols-4 md:grid-cols-2 gap-x-8 justify-center sm:grid-cols-1 text-center px-20 '>
                                <div className=' flex flex-col items-center justify-center'>
                                    <img className='w-16 h-16' src={handshake} alt="" />
                                    <h2 className='pt-3 text-6xl font-bold text-[#262626]'>
                                        {counterState &&
                                            <CountUp start={0} end={125} duration={2.75}>
                                            </CountUp>}+</h2>
                                    <p className='py-2 text-[#595959]'>Clients</p>
                                </div>
                                <div className=' flex flex-col items-center justify-center'>
                                    <img className='w-16 h-16' src={project} alt="" />
                                    <h2 className=' pt-3 text-6xl font-bold text-[#262626]'>
                                        {counterState &&
                                            <CountUp start={0} end={200} duration={2.75}>
                                            </CountUp>}+</h2>
                                    <p className='py-2 text-[#595959]'>Projects</p>
                                </div>
                                <div className=' flex flex-col items-center justify-center'>
                                    <img className='w-16 h-16' src={icn} alt="" />
                                    <h2 className=' pt-3 text-6xl font-bold text-[#262626]'>
                                        {counterState &&
                                            <CountUp start={0} end={95} duration={2.75}>
                                            </CountUp>}%</h2>
                                    <p className='py-2 text-[#595959]'>Success Rate</p>
                                </div>
                                <div className=' flex flex-col items-center justify-center'>
                                    <img className='w-16 h-16' src={people} alt="" />
                                    <h2 className='pt-3 text-6xl font-bold text-[#262626]'>
                                        {counterState &&
                                            <CountUp start={0} end={20} duration={2.75}>
                                            </CountUp>}+</h2>
                                    <p className='py-2 text-[#595959]'>Employee</p>
                                </div>
                            </div>
                        </ScrollTrigger>
                    </div >
                </div></div>
        </div>


    )
}
