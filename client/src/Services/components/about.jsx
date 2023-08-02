import React, { useState, useEffect } from 'react';

const AboutusComp = () => {
    const [showsection, setShowsection] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setShowsection(false);

            } else {
                setShowsection(true);
            }
        };

        handleResize(); // Check on initial render

        window.addEventListener('resize', handleResize); // Listen for window resize events

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='flex flex-col lg:flex-row  justify-between m-4 lg:mx-auto sm:px-4 lg:px-12  max-w-[1600px]'>

            {
                !showsection &&

                <h1 className=" text-[20px] mb-4 lg:mb-1 text-left font-bold text-[#00254a] tracking-wider ">ABOUT<span className='text-red-500'> US</span></h1>
            }
            <div className='w-full lg:w-[48%]'>
                <img src={'/about.jpg'} alt="" className='rounded-md' />
            </div>
            <div className='w-full lg:w-[48%]'>
                {
                    showsection &&
                    <h1 className="text-[17px] mb-1 text-left font-bold text-[#00254a] tracking-wider">ABOUT<span className='text-red-500'> US</span></h1>
                }
                <h2 className='text-[22px]  xl:text-[42px] mb-6 mt-5 text-left leading-[4.3rem] font-semibold  text-[#00254a]'>Welcome to Varela American Electric</h2>
                <p className='text-[16px] xl:text-[17px] text-justify text-gray-600 font-medium leading-[3rem] tracking-wide'>Varela American Electric INC has been proudly serving residential and commercial customers in Houston, Texas and surrounding areas for almost 8 Years. We have the experience and skills necessary to take care of your different electrical needs so that your building works properly all the time. Our company has been known for staying above the competition. This has been due to our ability to listen closely to our clients' needs and deliver solutions that will benefit them. </p>
            </div>
        </div>
    );
};

export default AboutusComp;