import React, { useRef } from 'react'

import emailjs, { send } from '@emailjs/browser';
import contactz from '../assets/business-people-casual-meeting_53876-101882.jpg'

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6gutwlo', 'template_nvutoqh', form.current, 'jE-EyzKvmQkkPYowf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <div
                class="relative h-[600px] overflow-hidden bg-center bg-cover  bg-no-repeat bg-[url('https://img.freepik.com/free-photo/friends-using-smartphones-together-chilling_53876-26151.jpg?w=900&t=st=1707820300~exp=1707820900~hmac=b7e36bbebbead7042f98840ffac8b0c555887e3f5f610021bc07c6fb89d166d2')]">
            </div>
            <div class="container px-6 md:px-12">
                <div
                    class="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                    <div class="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                        <div class="mx-auto mb-12 text-center lg:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="mx-auto mb-6 h-8 w-8 text-green-700 ">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                            </svg>
                            <h6 class="font-medium">Bengaluru, India</h6>
                        </div>
                        <div class="mx-auto mb-12 text-center lg:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="mx-auto mb-6 h-8 w-8 text-red-600 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <h6 class="font-medium">No.17,LV Nilayam, 3rd cross, Jayanthi Nagar Ext,
                                Horamavu, Bangalore
                                Pin code -560043</h6>
                        </div>
                        <div class="mx-auto mb-6 text-center md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="mx-auto mb-6 h-8 w-8 text-blue-600 ">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <h6 class="font-medium">+91 8068036654</h6>
                            <h6 class="font-medium">+91 8904106042</h6>
                        </div>
                        <div class="mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="fill" width="30" height="30" viewBox="0 0 84 64" stroke-width="2"
                                stroke="currentColor" class="mx-auto mb-6 h-8 w-8 text-yellow-600 ">
                                <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9 c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089 H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065 c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016 c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102 c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069 c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"></path>
                            </svg>
                            <h6 class="font-medium">careers@k7itech.com</h6>
                        </div>
                    </div>

                </div>
            </div>



            <div class="container my-24 mx-auto md:px-6">

                <section class="mb-32 text-center">
                    <div class="py-12 md:px-12">
                        <div class="container mx-auto xl:px-32">
                            <div class="grid items-center lg:grid-cols-2">
                                <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                                    <div
                                        class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px]  md:px-12 lg:-mr-14">
                                        <h2 class="mb-12 text-3xl font-bold">Contact us</h2>
                                        <form action="#" className='flex flex-wrap flex-col gap-5 border-black mx-auto mt-16 max-w-xl sm:mt-20' ref={form} onSubmit={sendEmail}>
                                            <div class="relative mb-6" data-te-input-wrapper-init>
                                                <label className='pl-0 flex' for="exampleInput90">Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="client_name"
                                                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleInput90"
                                                />

                                            </div>
                                            <div class="relative mb-6" data-te-input-wrapper-init>
                                                <label className='pl-0 flex' for="exampleInput90">Mail
                                                </label>
                                                <input
                                                    type="email"
                                                    name="client_email"
                                                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleInput91"
                                                />
                                            </div>
                                            <div class="relative mb-6" data-te-input-wrapper-init>
                                                <label className='pl-0 flex' for="exampleInput90">Message
                                                </label>
                                                <textarea
                                                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlTextarea1"
                                                    rows="3"
                                                ></textarea>

                                            </div>


                                            <button
                                                type="button"
                                                value={send}
                                                data-te-ripple-init
                                                data-te-ripple-color="light"
                                                class="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  lg:mb-0">
                                                Send
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div class="md:mb-12 lg:mb-0">
                                    <div
                                        class="relative h-[700px] rounded-lg shadow-lg ">
                                        <iframe
                                            src="https://maps.app.goo.gl/Ngd9xtQBtavBiv5K7"
                                        ></iframe>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.7809318539522!2d77.66773959775391!3d13.027792048444123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11339ddb83d1%3A0x938eceb3dbb15991!2sK7%20Infotech!5e0!3m2!1sen!2sin!4v1707801420999!5m2!1sen!2sin" class="absolute left-0 top-0 h-full w-full rounded-lg"
                                            frameborder="0"
                                            allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

            </div >
        </div >

    )
};