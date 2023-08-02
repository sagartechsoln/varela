import React from 'react'
import Header from './Services/components/Header';
import Footer from './Components/Footer';
import { MdMobileScreenShare, MdOutlineEmail } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const Contactus = () => {

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
                <div className="md:container">
                    <div className="main_title">
                        <h1 className='text-2xl md:text-5xl'>Contact Us</h1>
                        <p>
                            <nav className="flex justify-center" aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 ">
                                    <li className="inline-flex items-center">
                                        <Link to="/">
                                            <a className="inline-flex items-center text-xl font-medium text-gray-100 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                                <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                                </svg>
                                                Home
                                            </a>
                                        </Link>
                                    </li>
                                    <li aria-current="page">
                                        <div className="flex items-center mt-1">
                                            <svg className="w-3 h-3 text-gray-400 mx-1 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                            </svg>
                                            <span className="ml-1 text-lg font-medium text-gray-100 md:ml-2 dark:text-gray-400">Contact</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                        </p>

                    </div>
                </div>
            </section>

            <main>
                <div className="md:container md:mx-auto margin_60">
                    <div className="row m-0" >
                        <div className="col-md-9">
                            <div id="map" className='mb-10'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.7631062142104!2d-95.57138812406681!3d29.66864787511507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e7f90729bba1%3A0x96b337cf270e4e9e!2s10535%20S%20Wilcrest%20Dr%2C%20Houston%2C%20TX%2077099%2C%20USA!5e0!3m2!1sen!2sin!4v1688795542155!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <hr />

                            <div id="message-contact" className='mt-10'></div>
                            <form >
                                <div className="row m-0">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <label>First name</label>
                                            <input type="text" className="form-control" id="name_contact" name="name_contact" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <label>Last name</label>
                                            <input type="text" className="form-control" id="lastname_contact" name="lastname_contact" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-0">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" id="email_contact" name="email_contact" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <label>Phone number</label>
                                            <input type="text" id="phone_contact" name="phone_contact" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-0">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Your message</label>
                                            <textarea rows="5" id="message_contact" name="message_contact" className="form-control" style={{ height: '100px' }}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-0">
                                    <div className="col-md-6">
                                        <input type="submit" value="Submit" className="btn_1 green medium add_bottom_30 bg-gray-500" id="submit-contact" />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-3">
                            <div className="box_style_2">
                                <h5 className='mt-2 mb-2 font-bold'>Address</h5>
                                <ul className='list-disc'>
                                    <li><strong>10535 S WILCREST DRIVE, HOUSTON, TX 77099</strong></li>
                                </ul>
                                <h5 className='mt-2 mb-2 font-bold'>Contacts</h5>
                                <ul className='list-disc'>
                                    <li><strong>Commercial and Residential Services</strong><br />
                                        <a href="tel://+1(832) 361-8176">+1(832) 361-8176</a><br />
                                        <a href="tel://+1(832) 243-4931">+1(832) 243-4931</a>
                                    </li>
                                    <li><strong>Product Purchase</strong><br /><a href="tel://+1(281) 741-2541 ">+1(281) 741-2541 </a><br /><small>Monday to Friday 10am - 6pm</small></li>
                                    <li><strong>General info</strong><br />
                                        <a href="mailto:Sales@allforelectric.com">Sales@allforelectric.com</a><br />
                                        <a href="mailto:Accounting@allforelectric.com">Accounting@allforelectric.com</a><br />
                                        <a href="mailto:Office@allforelectric.com">Office@allforelectric.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="quote_banner"><a href="#">Need a quotation?</a></div>
                        </div>
                    </div>
                </div>
            </main>



            <div className='mt-10'>
                <Footer />
            </div>

        </main>
    )
}

export default Contactus