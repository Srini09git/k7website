import React from 'react'
import linkedin from '../assets/icon/linkedin (1).png'

export const Followus = () => {
    return (

        <div className=' bg-gradient-to-r from-gray-900 to-gray-700 p-10 md:p-20 flex items-center  justify-around'>
            <h1 className='text-white lg:text-6xl md:text-6xl sm:text-2xl md:ml-20'>Follow us to know <span className='bg-gradient-to-r from-red-300 via-red-500 to-yellow-200 text-transparent bg-clip-text'>#LifeAtK7IT</span></h1>
            <a className='text-white text-4xl md:mr-20  flex items-end w-7 md:w-24 lg:w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' href="https://www.linkedin.com/company/k7infotech/"><img src={linkedin} alt="" /></a>
        </div>
    )
}
