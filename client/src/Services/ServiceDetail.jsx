import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
// import { BsArrowRight } from 'react-icons/bs';
import Footer from '../Components/Footer';

const ServiceDetail = () => {
    const location = useLocation();
    const serviceDetailsData = location.state;
    const [relatedService, setrelatedService] = useState([])
    const [relatedLoading, setrelatedLoading] = useState(true)
    const [likeClicked, setLikeClicked] = useState(false);
    const [dislikeClicked, setDislikeClicked] = useState(false);

    const navigate = useNavigate();

    const handleRollback = (item) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`/ServicesCategory?${item.service_category_name}`, { state: item });
    };

    useEffect(() => {
        setrelatedLoading(true)
        const callServices = async () => {
            try {
                const response = await fetch('/api/getAllServices', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const jsonData = await response.json();
                setrelatedService(jsonData.filter((item) => item._id != serviceDetailsData._id && item.service_category_name === serviceDetailsData.service_category_name));
                setrelatedLoading(false)
            } catch (error) {
                console.error(error);
            }
        };
        callServices();
    }, [serviceDetailsData]);

    const handleClick = (item) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`/ServiceDetail?${item.service_title}`, { state: item });
    };


    const handleLikeClick = () => {
        setLikeClicked(true);
        setDislikeClicked(false);
    };

    const handleDislikeClick = () => {
        setDislikeClicked(true);
        setLikeClicked(false);
    };
    return (
        <main>
            <head>
                <title>
                    {serviceDetailsData.service_title}
                </title>
            </head>
            <Header />
            <section id="sub_header" className='relative'>
                <div className='absolute top-0 w-full h-full bg-black/60'></div>
                <div className="container">
                    <div className="main_title">
                        <h1 className='text-2xl md:text-5xl'>{serviceDetailsData.service_title}</h1>
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
                                    <li>
                                        <div class="flex items-center">
                                            <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                            </svg>
                                            <a href="/" class="ml-1  font-medium text-2xl text-gray-200 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Services</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="flex items-center">
                                            <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                            </svg>
                                            <a href="/" class="ml-1  font-medium text-2xl text-gray-200 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{serviceDetailsData.service_category_name}</a>
                                        </div>
                                    </li>
                                    <li aria-current="page">
                                        <div class="flex items-center">
                                            <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                            </svg>
                                            <span class="ml-1  font-medium text-gray-400 md:ml-2 dark:text-gray-400 text-2xl capitalize ">{serviceDetailsData.service_title}</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>

                        </p>

                    </div>
                </div>
            </section>

            <div className="md:container md:mx-auto ml-2 mr-2 margin_60">
                <div className="row m-0">
                    <div className="col-md-9">
                        <div className='w-full h-[250px] md:h-[450px] overflow-hidden'>
                            <img src={`/uploads/services/${serviceDetailsData.imageBody}`} alt="" className="img-responsive border w-full h-full object-cover" />
                        </div>
                        <h3 className='mt-4 mb-4 font-bold text-2xl md:text-4xl'>Description</h3>
                        <p className='text-justify leading-9' dangerouslySetInnerHTML={{ __html: serviceDetailsData?.description }}></p>
                        <div className="flex items-center mt-10">
                            <p className="mr-4">Did you find this helpful?</p>
                            <button
                                className={`flex items-center justify-center w-8 h-8 mr-2 rounded-full ${likeClicked ? 'bg-green-500 text-white animate-bounce' : 'bg-gray-300 text-gray-500'
                                    }`}
                                onClick={handleLikeClick}
                            >
                                <i className="icon-thumbs-up-alt"></i>
                            </button>
                            <button
                                className={`flex items-center justify-center w-8 h-8 rounded-full ${dislikeClicked ? 'bg-red-500 text-white animate-bounce' : 'bg-gray-300 text-gray-500'
                                    }`}
                                onClick={handleDislikeClick}
                            >
                                <i className="icon-thumbs-down-alt"></i>
                            </button>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="box_style_1">
                            <ul id="cat_nav">
                                {
                                    relatedLoading ?
                                        <>
                                            <li className="skeleton-loader mt-5 h-10 bg-gray-300 animate-pulse"></li>
                                            <li className="skeleton-loader mt-5 h-10 bg-gray-200 animate-pulse"></li>
                                            <li className="skeleton-loader mt-5 h-10 bg-gray-100 animate-pulse"></li>
                                            <li className="skeleton-loader mt-5 h-10 bg-gray-200 animate-pulse"></li>
                                            <li className="skeleton-loader mt-5 h-10 bg-gray-300 animate-pulse"></li>
                                        </>
                                        :
                                        relatedService.slice(0, 5)?.map((item, index) => {
                                            return <>
                                                <li key={index} onClick={() => handleClick(item)} className='cursor-pointer '>
                                                    <a href="javascript:void(0)">{item.service_title}</a>
                                                </li>
                                            </>
                                        })
                                }
                            </ul>
                            <hr />
                            <h5 className='mt-5'>Did you find what you need?</h5>
                            <p className=" ">
                                <Link to="/contact-us">
                                    <a href="javascript:void(0)" className="link_normal text-blue-600 mt-1" >Contact us</a>
                                </Link>
                            </p>
                        </div>

                        {/* <div className="quote_banner">
                            <a href="quotation.html">Need a quotation?</a>
                        </div>
                        <div className="box_style_2">
                            <h4><i className="icon_lightbulb_alt"></i> Power saving tips</h4>
                            <ul>
                                <li>Nec no eros probatus, consetetur theophrastus.</li>
                                <li>Vis minimum sadipscing mediocritatem ex.</li>
                                <li>Postulant urbanitas usu in, in eum omnis viderer invenire.</li>
                                <li>Tritani salutatus constitutoApologies, but it seems there was a truncation in the provided HTML code. Could you please provide the remaining part of the code so that I can assist you better?
                                </li>
                                <li>Illum molestie pri ei, senserit indoctum dignissim vis an.</li>
                                <li>Eum accusam assueverit in, summo essent eirmod mel ut.</li>
                            </ul>
                            <p>
                                <a href="tips.html" className="link_normal">Read more</a>
                            </p>
                        </div> */}
                    </div>
                </div>
                <section className="flex items-center py-10">
                    <div className="md:container w-full md:mx-auto flex flex-col md:flex-row justify-center p-10 items-center bg-[#00254a]  rounded-md h-[250px]">
                        <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left">
                            <h2 className="text-2xl leading-9 md:text-4xl font-bold mb-4 text-white">Don't Settle for Electrical Problems. <p className='mt-4'> Choose Our Expert Electric Service Today!</p></h2>
                            {/* <p className="text-gray-300">We're here to help you with any questions or inquiries. Contact us today!</p> */}
                        </div>
                        <div className="w-full md:w-2/5 lg:w-2/5 flex justify-center md:justify-end mt-6 md:mt-0">
                            <a href={`tel:${serviceDetailsData.contactNumber}`} className="flex items-center justify-center bg-[#fff]  text-black py-8 px-10  text-2xl md:text-3xl rounded-md transition duration-300 ease-in-out">
                                Call Now
                                <div className="fs1 ml-2 flex justify-center items-center" aria-hidden="true" data-icon="$"></div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>


            <div className='mt-10'>
                <Footer />
            </div>
        </main >
    );
};

export default ServiceDetail;
