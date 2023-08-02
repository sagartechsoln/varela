import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div id="top_line">
        <div className="container">
          <div className="row m-0">
            <div className="col-sm-4 hidden-xs">
              <span id="tag_line">"Electrician since 1998"</span>
            </div>
            <div className="col-sm-8">
              <ul id="top_links">
                <li>
                  <a href="tel://004542344599" id="phone_top">0045 043204434</a>
                  <span id="opening">Mon - Sat 8.00/18.00</span>
                </li>
                <li className="hidden-xs">
                  <a href="#">Purchase this template</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row m-0">
          <div className="col-xs-3">
            <div id="logo">
              <a href="index.html">
                <img src="/logoColor.png" width={120}  alt="Electrician" data-retina="true" />
              </a>
            </div>
          </div>
          <nav className="col-xs-9">
            <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="javascript:void(0);">
              <span>Menu mobile</span>
            </a>
            <div className="main-menu">
              <div id="header_menu">
                <img src="img/logo.png" width="175" height="35" alt="Electrician" data-retina="true" />
              </div>
              <a href="#" className="open_close" id="close_in">
                <i className="icon_close"></i>
              </a>
              <ul>
                <li className="submenu">
                  
                  <Link to="/">Home</Link>
                  <ul>
                    <li><a href="index.html">Home Layerslider</a></li>
                    <li><a href="index_2.html">Home Video Background</a></li>
                    <li><a href="index_3.html">Home with Contact form</a></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);" className="show-submenu">
                    Services <i className="icon-down-open-mini"></i>
                  </a>
                  <ul>
                    <li><Link to="/residential">Residential</Link></li>
                    <li><Link to="/commercial">commercial</Link></li>
                    
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);" className="show-submenu">
                    Quotation <i className="icon-down-open-mini"></i>
                  </a>
                  <ul>
                    <li><a href="quotation.html">Working quotation</a></li>
                    <li><a href="quotation_wizard.html">Working quotation wizard</a></li>
                  </ul>
                </li>
                <li><Link to="/about">About us</Link></li>
                <li className="submenu">
                  <a href="javascript:void(0);" className="show-submenu">
                    Pages <i className="icon-down-open-mini"></i>
                  </a>
                  <ul>
                    <li><a href="tips.html">Tips and Faq</a></li>
                    <li><a href="accessories.html">Accessories</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="blog_post.html">Blog post</a></li>
                    <li><a href="coming_soon/index.html">Coming soon</a></li>
                    <li><a href="shortcodes.html">Shortcodes</a></li>
                    <li><a href="icon_pack_1.html">Icon Pack 1</a></li>
                    <li><a href="icon_pack_2.html">Icon Pack 2</a></li>
                  </ul>
                </li>
                <li><Link to="/contact">Contact us</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header