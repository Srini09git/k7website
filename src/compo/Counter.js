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
        <div className='px-20 py-12 pb-64'>
            <ScrollTrigger onEnter={() => setCounterState(true)}
                onExit={() => setCounterState(false)} >
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-center px-20 pt-60'>
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
    )
}
