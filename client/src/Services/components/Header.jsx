import React, { useEffect, useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../Components/Loader';

const Header = () => {
  const [category, setCategory] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [loading, setloading] = useState(true);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const toggleMenu = () => {
      setToggle(!toggle);
      const mainMenu = document.getElementsByClassName('main-menu')[0];
      mainMenu.style.left = toggle ? '-100%' : '0%';
      mainMenu.style.opacity = toggle ? '0' : '1';
    };

    const menuButton = document.getElementById('mainMenuHeaderService');
    const close_in = document.getElementById('close_in');
    menuButton.addEventListener('click', toggleMenu);
    close_in.addEventListener('click', toggleMenu);

    document.querySelectorAll("li.submenu").forEach(function (submenu) {
      submenu.addEventListener("click", function () {
        setToggleDropdown(!toggleDropdown)
        var ul = this.querySelector("li.submenu ul");
        ul.style.display = !toggleDropdown ? 'block' : 'none';
        ul.style.visibility = !toggleDropdown ? 'visible' : 'hidden';
      });
    });


    return () => {
      menuButton.removeEventListener('click', toggleMenu);
    };
  }, [toggle, toggleDropdown]);

  useEffect(() => {
    const callcategories = async () => {
      try {
        setloading(true)
        const req = await fetch('/api/getAllServicecategories', {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        })
          .then(response => response.json())
          .then(jsonData => {
            setCategory(jsonData);
            setloading(false)
          }).catch(error => console.error(error))

      } catch (error) {
        console.log(error);
      }
    }
    callcategories();
  }, [])

  const handleService = (item) => {
    // Check if the window width is less than 992 pixels
    if (window.innerWidth < 992) {
      // Get the element with the class "main-menu"
      const mainMenu = document.querySelector('.main-menu');
      
      // Set the opacity and left position of the element
      mainMenu.style.opacity = '0';
      mainMenu.style.left = '-100%';
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/ServicesCategory?${item.service_category_name}`, { state: item });
  };
  

  const RedirectPage = (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(page);
  };

  return (
    <>
      <header>
        <Loader isLoading={loading} />
        <div id="top_line" style={{ marginBottom: '0px !important' }}>
          <div className="md:container md:mx-auto ml-2 mr-2">
            <div className="row py-[20px]">
              <div className="col-sm-4 hidden-xs">
                <span id="tag_line" className='uppercase flex items-center'><HiLocationMarker /> 10535 S Wilcrest Drive, Houston, TX 77099</span>
              </div>
              <div className="col-sm-8">
                <ul id="top_links" className=''>
                  <li className='md:space-x-5 flex flex-col items-center md:flex-row '>
                    <div className='flex flex-wrap justify-between items-center sm:space-x-5  space-y-2'>
                      <p className='text-xl md:text-2xl max-w-full md:text-center '>Commerical: <a href="tel:+18323618176" id="phone_top">+1(832) 361-8176</a></p>
                      <p className='text-xl md:text-2xl max-w-full md:text-center '>Residental: <a href="tel:+18322434931" id="phone_top">+1(832) 243-4931</a></p>
                      <a href="mailto:Office@allforelectric.com" className='md:mb-0 mb-5'>
                        <span className='flex md:justify-center space-y-5 items-center text-xl md:text-2xl'>
                          <MdEmail /> &nbsp;&nbsp;Office@allforelectric.com
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="md:container md:mx-auto">
          <div className="md:row flex justify-center items-center py-10 ">
            <div className="col-xs-3">
              <div id="logo" className='relative md:bottom-2' >
                <a href='/'>
                  <img src="/logoColor.png" width={120} alt="Electrician" data-retina="true" />
                </a>
              </div>
            </div>
            <nav className="col-xs-9">
              <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close w-12 h-10"
                href="javascript:void(0);" id="mainMenuHeaderService">
                <span>Menu mobile</span>
              </a>
              <div className="main-menu">
                <div id="header_menu" className='p-4 '>
                  <a href="/" className='flex justify-center w-full'>
                    <img src="/logoColor.png" width="100" height="35" alt="Electrician" data-retina="true" />
                  </a>
                </div>
                <a href="javascript:void(0)" className="open_close" id="close_in"><i className="icon_close"></i></a>
                <ul>
                  <li className="submenu">
                    <a href="/" className="show-submenu">Home </a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);" className="show-submenu">Services <i className="icon-down-open-mini"></i></a>
                    <ul>
                      {
                        category?.map((item, i) => {
                          return <>
                            <li className='cursor-pointer' onClick={() => handleService(item)}>
                              <a href="javascript:void(0)">{item.service_category_name}</a>
                            </li>
                          </>
                        })
                      }
                    </ul>
                  </li>

                  <li>
                    <a onClick={() => RedirectPage('/aboutus')} href="javascript:void(0)">About us</a>
                  </li>
                  <li><a onClick={() => RedirectPage('/clients')} href="javascript:void(0)">Our Clients</a></li>


                  <li><a onClick={() => RedirectPage('/contact-us')} href="javascript:void(0)">Contact us</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header