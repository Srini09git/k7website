import React, { useRef, useState } from 'react';
import emailjs, { send } from '@emailjs/browser';
import imaz from '../assets/origami-boats-leadership-concept.jpg'
import { Parallax } from 'react-parallax';
import { Followus } from './Followus';



export const Contact = () => {

    const form = useRef();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();

        const formFields = form.current.elements;
        let isFormValid = true;

        // Client-side validation
        for (let field of formFields) {
            if (field.type !== 'submit' && field.value.trim() === '') {
                isFormValid = false;
                break;
            }
        }

        if (!isFormValid) {
            setIsError(true);
            setTimeout(() => {
                setIsError(false);
            }, 5000); // Clear error message after 5 seconds
            return;
        }

        emailjs.sendForm('service_6gutwlo', 'template_l3a2iri', form.current, 'jE-EyzKvmQkkPYowf')
            .then((result) => {
                console.log(result.text);
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false);
                }, 5000); // Clear success message after 5 seconds
                form.current.reset(); // Reset form fields
            })
            .catch((error) => {
                console.log(error.text);
                setIsError(true);
                setTimeout(() => {
                    setIsError(false);
                }, 5000); // Clear error message after 5 seconds
            });
    };


    return (
        <div className=' flex-col '>


            <Parallax strength={500} bgImage={imaz} bgImageAlt='bg' className='object-fill'>
                <div class=" px-6 py-24 sm:py-32 lg:px-8 " >

                    <div class="mx-auto max-w-2xl text-center pt-30">
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">We're more than a workplace.  </h2>
                        <h2 class="text-3xl font-bold tracking-tight text-blue-600 sm:text-6xl">We're a family. </h2>
                        <p class="mt-2 text-lg leading-8 text-gray-600">We know that finding a meaningful and rewarding career can be a long journey. Our goal is to make that process easy for you and to create a work environment that's enriching—one that you'll look forward to every day.</p>
                    </div>
                    <form action="#" className='flex flex-wrap flex-col gap-5 border-black mx-auto mt-16 max-w-xl sm:mt-20' ref={form} onSubmit={sendEmail}>
                        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                {/* {first name} */}
                                <label for="first-name" class="block text-sm font-semibold leading-6 text-black">First name</label>
                                <div class="mt-2.5">
                                    <input type="text" name="user_first" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            {/* {last name} */}
                            <div>
                                <label for="last-name" class="block text-sm font-semibold leading-6 text-black">Last name</label>
                                <div class="mt-2.5">
                                    <input type="text" name="user_last" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            {/* {gmail } */}
                            <div class="sm:col-span-2">
                                <label for="email" class="block text-sm font-semibold leading-6 text-black">Email</label>
                                <div class="mt-2.5">
                                    <input type="email" name="user_email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            {/* {number } */}
                            <div class="sm:col-span-2">
                                <label for="PhoneNumber" class="block text-sm font-semibold leading-6 text-black">Phone Number</label>
                                <div class="mt-2.5">
                                    <input type="number" name="user_number" id="PhoneNumber" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            {/* {year of graduatiob } */}
                            <div class="sm:col-span-2">
                                <label for="graduation" class="block text-sm font-semibold leading-6 text-black">Year of Graduation</label>
                                <div class="mt-2.5">
                                    <input type="number" name="user_graduation" id="graduation" autocomplete="organization" min="1980" max="2025" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            {/* {Gender } */}
                            <div>
                                <label for="gender" class="block text-sm font-semibold leading-6 text-black">Gender</label>
                                <div class="mt-2.5">
                                    <select name="user_gender" id="gender" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400  sm:text-sm sm:leading-6" >
                                        <option value="none">None</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">other</option>
                                    </select>
                                </div>
                            </div>
                            {/* {Experience } */}
                            <div>
                                <label for="exp" class="block text-sm font-semibold leading-6 text-black">Experience In Years</label>
                                <div class="mt-2.5">
                                    <select name="user_exp" id="exp" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400  sm:text-sm sm:leading-6">
                                        <option value="fresher">fresher</option>
                                        <option value="0-1 Year">0-1 year</option>
                                        <option value="1-3 Year">1-3 year</option>
                                        <option value="3-5 Year">3-5 year</option>
                                        <option value="5+ Year">5+ year</option>
                                    </select>
                                </div>
                            </div>
                            {/* {Location } */}
                            <div class="sm:col-span-2">
                                <label for="location" class="block text-sm font-semibold leading-6 text-black">Current Location</label>
                                <div class="mt-2.5">
                                    <input type="text" name="user_location" id="location" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            {/* {skill } */}
                            <div class="sm:col-span-2">
                                <label for="job" class="block text-sm font-semibold leading-6 text-black">Skills</label>
                                <div class="mt-2.5">

                                    <select name="user_job" id="job" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                        <option value="none">none</option>
                                        <option value="Software Developer">Software Developer</option>
                                        <option value="Full stack Developers">full stack Developers</option>
                                        <option value="Front-End Developer">front-End Developer</option>
                                        <option value="Back-End Developer">Back-End Developer</option>
                                        <option value="API Developer">API Developer</option>
                                        <option value="Quality Testing">Quality Testing </option>
                                        <option value="Manual Testing ">Manual Testing </option>
                                        <option value="UI/UX desiger">UI/UX desiger</option>
                                        <option value="Graphic desiger">Graphic desiger</option>
                                    </select>
                                </div>
                            </div>
                            {/* {message } */}




                            <div class="sm:col-span-2">
                                <label for="user_message" class="block text-sm font-semibold leading-6 text-black">Message</label>
                                <div class="mt-2.5">
                                    <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>
                            {/* {submit } */}

                        </div>
                        <div class="mt-10">
                            <button type="submit" value={send} class="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110">Let's talk</button>
                        </div>
                    </form>
                    {isSuccess && <div class="bg-green-100 border-l-4 border-green-500 text-green-700 max-w-90 p-4 rounded-lg relative bg-center ">
                        <p class="text-lg font-semibold">Email sent successfully!</p>
                        <p>Your order has been successfully confirmed and is now being processed.</p>
                    </div>}
                    {isError && <div className="text-red-500 text-center mt-4">Failed to send email. Please try again later.</div>}
                </div>
            </Parallax >
            <Followus />
        </div >

    );
};