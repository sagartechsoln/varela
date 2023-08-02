import React, { useState, useEffect } from 'react'
import Header from './Services/components/Header';
// import TestimonialSlider from './Components/Testimonial';
import Footer from './Components/Footer';
const Clients = () => {
    const logos = [
        {
            id: 1,
            img: "images/amazon.png"
        },
        {
            id: 2,
            img: "images/dunkin.png"
        },
        {
            id: 3,
            img: "images/jasonsdeli.png"
        },
        {
            id: 4,
            img: "images/motel.png",

        },
        {
            id: 5,
            img: "images/popeyes.png"
        },
        {
            id: 6,
            img: "images/dollargeneral.png"
        },
        {
            id: 7,
            img: "images/carney.png"
        },
    ]

    return (
        <main className='dark:bg-slate-800'>
            <head>
                <title>
                    Our Clients
                </title>
            </head>
            <Header />
            <section id="sub_header" className='relative'>
                <div className='absolute top-0 w-full h-full bg-black/60'></div>
                <div className="container">
                    <div className="main_title">
                        <h1 className='text-2xl md:text-5xl'>Our Clients</h1>
                        <p>
                            <nav class="flex justify-center" aria-label="Breadcrumb">
                                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                                    <li class="inline-flex items-center">
                                        <a href="/" class="inline-flex items-center text-2xl  font-medium text-gray-100 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                            <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                            </svg>
                                            Home
                                        </a>
                                    </li>

                                    <li aria-current="page">
                                        <div class="flex items-center">
                                            <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                            </svg>
                                            <span class="ml-1  font-medium text-gray-400 md:ml-2 dark:text-gray-400 text-2xl">Clients</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>

                        </p>

                    </div>
                </div>
            </section>

            <h2 className='text-center text-5xl font-bold mb-20 mt-20'>
                <span className='text-[#00254a] uppercase'>Clients we have worked for in the past.</span>
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-3 mt-5'>
                {
                    logos.map((logo) => {
                        return (

                            <div key={logo.id} className='px-2 lg:px-6 py-6 lg:py-10 border '>
                                <img src={logo.img} alt="logo" className={`h-[80px] sm:h-[120px] lg:h-[150px] aspect-[4/3] object-contain hover:scale-125 duration-300 ease-in-out mx-auto`} />
                            </div>

                        )
                    })
                }
            </div>
            <div className='mt-10'>
                <Footer />
            </div>

        </main>
    )
}

export default Clients