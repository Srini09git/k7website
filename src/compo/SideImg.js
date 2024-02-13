import React from 'react'
import { Parallax } from 'react-parallax'
import Note from '../assets/written-accessories-desk.jpg'
export const SideImg = () => {
    return (
        <div>
            <Parallax strength={600} bgImage={Note} >
                <div className=" h-full" >
                    <div>Normal parallax</div>
                </div>
            </Parallax>
        </div>
    )
}
