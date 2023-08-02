import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const RedirectPage = (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(page);
  };
  return (
    <footer>
      <div className="md:container md:mx-auto ml-2 mr-2">
        <div className="row m-0">
          <div className="col-md-4 col-sm-6">
            <div className='flex justify-center '>
              <img src="/logo.png" width="175" height="35" alt="Electrician" data-retina="true" id="logo_footer" />
            </div>
            <p className='text-justify'>
              Varela American Electric INC has been proudly serving residential and commercial customers in Richmond, Texas and surrounding areas for almost two decades now. We have the experience and skills necessary to take care of your different electrical needs so that your building works properly all the time.
            </p>
          </div>
          <div className="col-md-3 col-md-offset-1 col-sm-3 md:mt-0 mt-4">
            <h3>Discover</h3>
            <ul className='mt-4'>
              <li className='mt-4'><a href="javascript:void(0)" onClick={() => RedirectPage('/aboutus')}>About us</a></li>
              <li className='mt-4'><a href="javascript:void(0)" onClick={() => RedirectPage('/')}>Services</a></li>
              <li className='mt-4'><a href="javascript:void(0)" onClick={() => RedirectPage('/clients')}>Clients</a></li>
              <li className='mt-4'><a href="javascript:void(0)" onClick={() => RedirectPage('/contact-us')}>Contact us</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-3" id="contact_bg">
            <h3 className='mb-5'>Contacts</h3>
            <ul id="contact_details_footer">
              <li id="address_footer" className='text-2xl'>10535 S WILCREST DRIVE, HOUSTON, TX 77099</li>
              <li id="phone_footer" >
                <p className='mb-1 relative bottom-1 font-bold text-2xl'>Commercial and Residential Services</p>
                <a href="tel://+18323618176" className='text-2xl'>+1(832) 361-8176</a> <br />
                <a href="tel://+18322434931" className='text-2xl'>+1(832) 243-4931</a>
              </li>
              <li id="email_footer"><a href="mailto:Office@allforelectric.com" className='text-2xl'>Office@allforelectric.com</a></li>
            </ul>
          </div>
        </div>
        <div id="social_footer">
          <ul>
            <li><a href="#"><i className="icon-facebook"></i></a></li>
            <li><a href="#"><i className="icon-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div id="copy">
        <div className="md:container md:mx-auto flex justify-between">
          <p>© <a href="/">Varela American Electric</a> {new Date().getFullYear()} - All rights reserved.</p>
          <p>Crafted By<a className='ml-2 text-red-500 font-bold' target='_blank' href="https://sagartech.co.in/">Sagar Tech - Technical Solution</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
