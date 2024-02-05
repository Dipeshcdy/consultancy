import React from 'react'

const Contact = () => {
    return (
        <>
            <section class="bg-white" id="contact">
                <div>
                    <iframe className='w-full border-none' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.9260475675203!2d84.5169672445058!3d27.620937187917047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994ef517e50ba15%3A0xa36ac22020797e16!2sCollege%20of%20Software%20Engineering%20(CSE)%2C%20Tandi!5e0!3m2!1sen!2snp!4v1707126940283!5m2!1sen!2snp" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div class="mb-4">
                        <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p class="text-base font-semibold uppercase tracking-wide text-primary wow animate__animated animate__fadeInUp">
                                Contact
                            </p>
                            <h2
                                class="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl wow animate__animated animate__fadeInLeft">
                                Get in Touch
                            </h2>
                            <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 wow animate__animated animate__fadeInUp animate__delay-1s">Feel free to contact us !!
                            </p>
                        </div>
                    </div>
                    <div class="flex items-stretch justify-center">
                        <div class="grid md:grid-cols-2">
                            <div class="h-full pr-6">
                                <p class="mt-3 mb-12 text-lg text-gray-600 wow animate__animated animate__fadeInLeft animate__delay-1s">
                                    If you have any questions or would like to learn more about Surplus International Education Consultancy and our services, please don’t hesitate to contact us.
                                </p>
                                <ul class="mb-6 md:mb-0 wow animate__animated animate__fadeInLeft animate__delay-2s">
                                    <li class="flex">
                                        <div class="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="h-6 w-6">
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                <path
                                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="ml-4 mb-4">
                                            <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900">Our Address
                                            </h3>
                                            <p class="text-gray-600 dark:text-slate-400">Ratnanagar-2</p>
                                            <p class="text-gray-600 dark:text-slate-400">Chitwan, Nepal</p>
                                        </div>
                                    </li>
                                    <li class="flex">
                                        <div class="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="h-6 w-6">
                                                <path
                                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                </path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div class="ml-4 mb-4">
                                            <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900">Contact
                                            </h3>
                                            <p class="text-gray-600 dark:text-slate-400">Mobile: 9748292615</p>
                                            <p class="text-gray-600 dark:text-slate-400">Mail: surplusinternational7@gmail.com</p>
                                        </div>
                                    </li>
                                    <li class="flex">
                                        <div class="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="h-6 w-6">
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                <path d="M12 7v5l3 3"></path>
                                            </svg>
                                        </div>
                                        <div class="ml-4 mb-4">
                                            <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900">Working
                                                hours</h3>
                                            <p class="text-gray-600 dark:text-slate-400">Sunday - Friday: 08:00 - 17:00</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="card h-fit max-w-6xl p-5 md:p-12 wow animate__animated animate__zoomIn animate__delay-1s" id="form">
                                <h2 class="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                                <form action="" method="POST" class="flex flex-col gap-5">
                                    <div>
                                        <div class="relative">
                                            <input type="text" name="name" id="name" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                                            <label for="name" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="relative">
                                            <input type="text" name="email" id="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                                            <label for="email" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="relative">
                                            <input type="text" name="phone" id="phone" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                                            <label for="phone" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Phone</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="relative">
                                            <textarea type="text" name="message" id="message" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=""></textarea>
                                            <label for="message" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Message</label>
                                        </div>

                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="w-full relative  bg-transparent border-2 border-primary  text-primary hover:text-white transition-all duration-500 px-6 py-3 font-xl rounded-md sm:mb-0 before:content-[''] before:absolute before:left-0 before:w-full before:bottom-0 before:h-0 hover:before:h-full before:bg-primary before:transition-all before:duration-500 overflow-hidden"><span class="relative">Send Message</span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Contact