import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from '../Components/Footer';
import { HiArrowRight } from 'react-icons/hi';
const ServicesCategory = () => {
  const location = useLocation();
  const serviceCategoryName = location.state;
  const [allServices, setAllServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const SkeletonLoader = () => {
    return (
      <div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
        <div className="flex items-center justify-center w-full h-[300px] mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <span className="sr-only">Loading...</span>
      </div>

    );
  };


  useEffect(() => {
    setIsLoading(true);
    const callServices = async () => {
      try {
        const response = await fetch('/api/getAllServices', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        const jsonData = await response.json();

        const sortedServices = jsonData
          .filter(item => item?.service_category_name === serviceCategoryName.service_category_name)
          .sort((a, b) => a.service_title.localeCompare(b.service_title)); // Sort services in ascending order based on the service_title key

        setAllServices(sortedServices);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    if (allServices.length === 0 || serviceCategoryName) callServices();
  }, [serviceCategoryName]);

  const handleClick = (item) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/ServiceDetail?${item.service_title}`, { state: item });
  };


  const voidElements = new Set(['br', 'hr', 'img', 'input', 'link', 'meta', 'area', 'base', 'col', 'command', 'embed', 'keygen', 'param', 'source', 'track', 'wbr']);

  function createElementsFromHTML(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const elements = Array.from(doc.body.childNodes);

    return elements.map((element, index) => {
      if (element.nodeType === Node.TEXT_NODE) {
        return element.textContent;
      } else {
        const tagName = element.tagName.toLowerCase();
        const props = {};
        Array.from(element.attributes).forEach((attr) => {
          props[attr.name] = attr.value;
        });

        if (voidElements.has(tagName)) {
          // Handle void elements (self-closing tags) separately
          return React.createElement(tagName, { ...props, key: index });
        } else {
          // Recursively create child elements
          return React.createElement(
            tagName,
            { ...props, key: index },
            createElementsFromHTML(element.innerHTML)
          );
        }
      }
    });
  }

  return (
    <main>
      <head>
        <title>
          Service Categories
        </title>
      </head>
      <Header />
      <section id="sub_header" className='relative'>
        <div className='absolute top-0 w-full h-full bg-black/60'></div>
        <div className="container">
          <div className="main_title">
            <h1 className='text-2xl md:text-5xl'>{serviceCategoryName.service_category_name}</h1>
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
                  <li aria-current="page">
                    <div class="flex items-center">
                      <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                      </svg>
                      <span class="ml-1  font-medium text-gray-400 md:ml-2 dark:text-gray-400 text-2xl">{serviceCategoryName.service_category_name}</span>
                    </div>
                  </li>
                </ol>
              </nav>

            </p>

          </div>
        </div>
      </section>
      <main>
        <div className="md:container md:mx-auto ml-4 mr-4 margin_60">
          <div className="row m-0">
            <div className="col-md-9">
              <div className="row mb-6">
                {
                  isLoading ? "Loading Services...." : allServices?.map((item, i) => {
                    const sanitizedContent = createElementsFromHTML(item.description)[0];

                    return <>
                      <div onClick={() => handleClick(item)} className="col-md-6 md:mb-6 cursor-pointer p-4 shadow-lg">
                        <div className='w-full h-[300px] overflow-hidden'>
                          <img src={`/uploads/services/${item?.imageBody}`} alt="" className="img-responsive w-full h-full border" />
                        </div>
                        <div className=' p-4'>
                          <h3 className='font-semibold text-center mt-2 mb-5 text-[2.2rem] line-clamp-1'>{item.service_title}</h3>
                          <div className='text-wrapper'>
                            <div className="text-justify">
                              {sanitizedContent}
                            </div>
                          </div>

                          <div className='mt-4 flex justify-center mt-4'>
                            <a href="javascript:void(0)" onClick={() => handleClick(item)} class="inline-flex items-center px-4 py-2 bg-[#00254a] rounded-md text-white font-bold transition-colors duration-300 ease-in-out group hover:bg-[#ff6600]">
                              <span class="relative transition-colors duration-300 ease-in-out group-hover:text-[#fff]">
                                <span class="relative inline-block">
                                  Read More
                                </span>
                              </span>
                              <span class="ml-2 mt-1 transition-all duration-300 ease-in-out transform group-hover:translate-x-1">
                                <HiArrowRight className='group-hover:text-[#fff]' />
                              </span>
                            </a>

                          </div>
                        </div>
                      </div>
                    </>
                  })
                }
              </div>
              <hr />
              <div class="row mt-10">
                <div class="col-md-6">
                  <ul class="feat">
                    <li class="mb-10">
                      <img src="img/icon_service_1.png" alt="" width="50" height="54" data-retina="true" />
                      <h4 className='font-bold text-3xl mb-2 space-x-5'>Fast Callback and Response</h4>
                      <p>
                        Get a quick callback and response. We ensure prompt communication and assistance to address your queries.
                      </p>
                    </li>
                    <li class="mb-10">
                      <img src="img/icon_service_2.png" alt="" width="50" height="50" data-retina="true" />
                      <h4 className='font-bold text-3xl mb-2 space-x-5'>Dedicated Help Center</h4>
                      <p>
                        Access our dedicated help center where our team is available to provide support and answer your questions.
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="feat">
                    <li class="mb-10">
                      <img src="img/icon_service_3.png" alt="" width="50" height="56" data-retina="true" />
                      <h4 className='font-bold text-3xl mb-2 space-x-5'>Professional Diagnosis</h4>
                      <p>
                        Benefit from our professional diagnosis services, ensuring accurate assessments and recommendations.
                      </p>
                    </li>
                    <li class="mb-10">
                      <img src="img/icon_service_4.png" alt="" width="50" height="50" data-retina="true" />
                      <h4 className='font-bold text-3xl mb-2 space-x-5'>Transportation</h4>
                      <p>
                        Avail transportation facilities for convenient and hassle-free commuting to your desired locations.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="col-md-3">
              <div className="box_style_1">
                {/* <ul id="cat_nav">
                  <li><a href="service_1.html">Air condition</a></li>
                </ul>
                <hr /> */}
                <h5 className='mt-4 mb-4'>Did you find what you need?</h5>
                <p className="nopadding">
                  <Link to="/contact-us">
                    <a className="link_normal">Contact us</a>
                  </Link>
                </p>
              </div>

              <div className="quote_banner">
                <a href="quotation.html">Need a quotation?</a>
              </div>

              <div className="box_style_2">
                <h4 className='font-bold text-2xl'><i className="icon_lightbulb_alt"></i> Power-saving tips</h4>
                <ul className='list-disc'>
                  <li>Save energy by turning off lights when not in use.</li>
                  <li>Use energy-efficient appliances and LED light bulbs.</li>
                  <li>Unplug electronics and chargers when not in use to avoid standby power consumption.</li>
                  <li>Install programmable thermostats to optimize energy usage for heating and cooling.</li>
                  <li>Seal air leaks and insulate your home to improve energy efficiency.</li>
                  <li>Consider using natural light during the day to reduce reliance on artificial lighting.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>

      <div className='mt-10'>
        <Footer />
      </div>
    </main>
  );
};

export default ServicesCategory;
