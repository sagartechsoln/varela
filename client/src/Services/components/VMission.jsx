import React from 'react';
import { useState } from 'react';

const VisionMissionSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <h2 className='text-center text-5xl font-bold mb-20 mt-32'>
                <span className='text-[#00254a] uppercase'>Our</span>
                <span className='text-red-500 ml-2 uppercase'>Vision & Mission</span>
            </h2>

            <div className='md:container md:mx-auto mb-40'>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white hover:bg-red-500 cursor-pointer duration-300 ease-in-out rounded-lg shadow-lg p-6 flex flex-col items-center vision-card group">
                        <div class="flex-shrink-0 mr-4  mb-4">
                            <i className='icon-eye-1 text-8xl group-hover:text-white'></i>
                        </div>
                        <div>
                            <h2 class="text-4xl font-bold text-center mb-4 group-hover:text-white">Our Vision</h2>
                            <p class="text-gray-600 mt-2 mb-4 text-justify w-[90%] mx-auto group-hover:text-white">To be the leading provider of innovative and sustainable electrical solutions, powering a brighter future for our communities.</p>
                        </div>
                    </div>
                    <div class="bg-white hover:bg-red-500 cursor-pointer rounded-lg shadow-lg p-6 flex flex-col items-center vision-card group">
                        <div class="flex-shrink-0 mr-4  mb-4">
                            <i className='icon-bullseye text-8xl  group-hover:text-white'></i>
                        </div>
                        <div>
                            <h2 class="text-4xl font-bold text-center mb-4 group-hover:text-white">Our Mission</h2>
                            <p class="text-gray-600 mt-2 mb-4 text-justify w-[90%] mx-auto group-hover:text-white">At Varela American Electric, our mission is to deliver exceptional electrical services with unmatched reliability and customer satisfaction. We strive to exceed industry standards, foster long-term partnerships, and contribute to the growth and progress of our clients and the communities we serve.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VisionMissionSection;
