import React, { useState, useEffect } from 'react'
import Header from './Services/components/Header';
// import TestimonialSlider from './Components/Testimonial';
import Footer from './Components/Footer';
import AboutComponent from './Services/components/about';
import VisionMissionSection from './Services/components/VMission';
const Aboutus = () => {

  return (
    <main className='dark:bg-slate-800'>
      <head>
        <title>
          About us
        </title>
      </head>
      <Header />
      <section id="sub_header" className='relative'>
        <div className='absolute top-0 w-full h-full bg-black/60'></div>
        <div className="container">
          <div className="main_title">
            <h1 className='text-2xl md:text-5xl'>About us</h1>
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
                      <span class="ml-1  font-medium text-gray-400 md:ml-2 dark:text-gray-400 text-2xl">About us</span>
                    </div>
                  </li>
                </ol>
              </nav>

            </p>

          </div>
        </div>
      </section>

      <div className='mt-28'>
      <AboutComponent />
      <VisionMissionSection />
      </div>

      {/* End section */}
      {/* <main>
        <div className="container margin_60">
          <div id="intro">
            <p>
              <img src="img/about_1.jpg" alt="" className="img-responsive" />
            </p>
            <h2>"The art of repairing since 1998"</h2>
            <p className="lead">
              Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot
              persecuti mel.
              <br /> Libris hendrerit ex sea. Duo legere evertitur an, pri hinc
              doctus definitiones an, vix id dicam putent. Ius ornatus instructior
              in.
            </p>
          </div>
          <hr />
          <div className="row m-0">
            <div className="col-sm-4">
              <h3>Some words about us</h3>
              <p>
                Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot
                persecuti mel. Libris hendrerit ex sea. Duo legere evertitur an, pri
                hinc <strong>doctus definitiones</strong> an, vix id dicam putent.
                Ius ornatus.
              </p>
              <p>
                Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot
                persecuti mel. Libris hendrerit ex sea. Duo legere evertitur an, pri
                hinc <strong>doctus definitiones</strong> an, vix id dicam putent.
                Ius ornatus.
              </p>
              <h4>Mission</h4>
              <p>
                Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot
                persecuti mel. Libris hendrerit ex sea. Duo legere evertitur an, pri
                hinc <strong>doctus definitiones</strong> an, vix id dicam putent.
                Ius ornatus.
              </p>
              <p>
                Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot
                persecuti mel. Libris hendrerit ex sea. Duo legere evertitur an, pri
                hinc <strong>doctus definitiones</strong> an, vix id dicam putent.
                Ius ornatus.
              </p>
              <h4>Filosofy</h4>
              <p>
                Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot
                persecuti mel. Libris hendrerit ex sea. Duo legere evertitur an, pri
                hinc <strong>doctus definitiones</strong> an, vix id dicam putent.
                Ius ornatus.
              </p>
            </div>
            <div className="col-sm-7 col-sm-offset-1">
              <ul className="feat" id="about">
                <li>
                  <i className="icon-flash-1" />
                  <h4>Professional service</h4>
                  <p>
                    Eum purto epicurei cotidieque at, ius luptatum invidunt no, vim
                    at sint pertinacia repudiandae. Ad cum dicant laboramus
                    delicatissimi, ex has nonumes explicari prodesset, brute
                    tincidunt conclusionemque no has. Sit ullum latine ei. Ius id
                    adhuc iriure torquatos. Justo prompta senserit eos cu, omnesque
                    posidonium liberavisse pri in.
                  </p>
                </li>
                <li>
                  <i className="icon-flash-1" />
                  <h4>Affordable price</h4>
                  <p>
                    Eum purto epicurei cotidieque at, ius luptatum invidunt no, vim
                    at sint pertinacia repudiandae. Ad cum dicant laboramus
                    delicatissimi, ex has nonumes explicari prodesset, brute
                    tincidunt conclusionemque no has. Sit ullum latine ei. Ius id
                    adhuc iriure torquatos. Justo prompta senserit eos cu, omnesque
                    posidonium liberavisse pri in.
                  </p>
                </li>
                <li>
                  <i className="icon-flash-1" />
                  <h4>Great support</h4>
                  <p>
                    Eum purto epicurei cotidieque at, ius luptatum invidunt no, vim
                    at sint pertinacia repudiandae. Ad cum dicant laboramus
                    delicatissimi, ex has nonumes explicari prodesset, brute
                    tincidunt conclusionemque no has. Sit ullum latine ei. Ius id
                    adhuc iriure torquatos. Justo prompta senserit eos cu, omnesque
                    posidonium liberavisse pri in.
                  </p>
                </li>
                <li>
                  <i className="icon-flash-1" />
                  <h4>Service Warranty</h4>
                  <p>
                    Eum purto epicurei cotidieque at, ius luptatum invidunt no, vim
                    at sint pertinacia repudiandae. Ad cum dicant laboramus
                    delicatissimi, ex has nonumes explicari prodesset, brute
                    tincidunt conclusionemque no has. Sit ullum latine ei. Ius id
                    adhuc iriure torquatos. Justo prompta senserit eos cu, omnesque
                    posidonium liberavisse pri in.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* End row */}
          {/* <hr />
          <div className="text-center">
            <h2>Our professional team</h2>
            <p className="lead">
              Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot
              persecuti mel.
              <br /> Libris hendrerit ex sea. Duo legere evertitur an, pri hinc
              doctus definitiones an, vix id dicam putent. Ius ornatus instructior
              in.
            </p>
          </div> */}
          {/*Team Carousel */}
          {/* <div className="row m-0">
            <div className="owl-carousel team-carousel">
              <div className="team-item">
                <div className="team-item-img">
                  <img src="img/team/team-1.jpg" alt="" />
                  <div className="team-item-detail">
                    <div className="team-item-detail-inner">
                      <h4>Mitchell Young</h4>
                      <p>
                        Similique sunt culpa qui officia deserunt mollitia animi
                        dolorum fuga.
                      </p>
                      <ul className="social">
                        <li>
                          <a href="#0">
                            <i className="icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon-google" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-item">
                <div className="team-item-img">
                  <img src="img/team/team-2.jpg" alt="" />
                  <div className="team-item-detail">
                    <div className="team-item-detail-inner">
                      <h4>Ronald Green</h4>
                      <p>
                        Similique sunt culpa qui officia deserunt mollitia animi
                        dolorum fuga.
                      </p>
                      <ul className="social">
                        <li>
                          <a href="#0">
                            <i className="icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon-google" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-item">
                <div className="team-item-img">
                  <img src="img/team/team-3.jpg" alt="" />
                  <div className="team-item-detail">
                    <div className="team-item-detail-inner">
                      <h4>Carl Peppard</h4>
                      <p>
                        Similique sunt culpa qui officia deserunt mollitia animi
                        dolorum fuga.
                      </p>
                      <ul className="social">
                        <li>
                          <a href="#0">
                            <i className="icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon-google" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-item">
                <div className="team-item-img">
                  <img src="img/team/team-4.jpg" alt="" />
                  <div className="team-item-detail">
                    <div className="team-item-detail-inner">
                      <h4>Sandra Bullock</h4>
                      <p>
                        Similique sunt culpa qui officia deserunt mollitia animi
                        dolorum fuga.
                      </p>
                      <ul className="social">
                        <li>
                          <a href="#0">
                            <i className="icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon-google" />
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/*End Team Carousel*/}
        {/* </div> */}
        {/* End container */}
        {/* <section className="promo_full">
          <div className="promo_full_wp">
            <div>
              <h3>
                What Clients say
                <span>Id tale utinam ius, an mei omnium recusabo iracundia.</span>
              </h3>
              <div className="container">
                <div className="row m-0">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="carousel_testimonials">
                      <div>
                        <div className="box_overlay">
                          <div className="pic">
                            <figure>
                              <img
                                src="img/testimonial_1.jpg"
                                alt=""
                                className="img-circle"
                              />
                            </figure>
                            <h4>
                              Roberta<small>12 October 2015</small>
                            </h4>
                          </div>
                          <div className="comment">
                            "Mea ad postea meliore fuisset. Timeam repudiare id eum,
                            ex paulo dictas elaboraret sed, mel cu unum nostrud."
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="box_overlay">
                          <div className="pic">
                            <figure>
                              <img
                                src="img/testimonial_1.jpg"
                                alt=""
                                className="img-circle"
                              />
                            </figure>
                            <h4>
                              Roberta<small>12 October 2015</small>
                            </h4>
                          </div>
                          <div className="comment">
                            "No nam indoctum accommodare, vix ei discere civibus
                            philosophia. Vis ea dicant diceret ocurreret."
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="box_overlay">
                          <div className="pic">
                            <figure>
                              <img
                                src="img/testimonial_1.jpg"
                                alt=""
                                className="img-circle"
                              />
                            </figure>
                            <h4>
                              Roberta<small>12 October 2015</small>
                            </h4>
                          </div>
                          <div className="comment">
                            "No nam indoctum accommodare, vix ei discere civibus
                            philosophia. Vis ea dicant diceret ocurreret."
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>  */}
      <div className='mt-10'>
        <Footer />
      </div>

    </main>
  )
}

export default Aboutus