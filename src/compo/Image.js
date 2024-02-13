import React from 'react'
import { Parallax } from 'react-parallax'
import Note from '../assets/written-accessories-desk.jpg'
export const Image = () => {
    return (
        <div>
            <Parallax strength={600} className=' h-full' bgImage={Note} >
                <div className=" h-full" >
                    <div>Normal parallax</div>
                </div>
            </Parallax>
        </div>
    )
}
