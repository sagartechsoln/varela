import 'tw-elements';
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './Admin/components';
import './App.css';

import { useStateContext } from './Admin/contexts/ContextProvider';
// Lazily load the Admin components
const Dashboard = React.lazy(() => import('./Admin/pages/Dashboard'));
const Product = React.lazy(() => import('./Admin/pages/Product'));
const AdminLogin = React.lazy(() => import('./Admin/pages/Login'));
const AdminLogout = React.lazy(() => import('./Admin/pages/Logout'));
const Profile = React.lazy(() => import('./Admin/pages/Profile'));
const Services = React.lazy(() => import('./Admin/pages/Services'));
const Category = React.lazy(() => import('./Admin/pages/Category'));
const ServiceCategory = React.lazy(() => import('./Admin/pages/ServiceCategory'));

const ProductHome = React.lazy(() => import('./Products/Home'));
const Aboutus = React.lazy(() => import('./Aboutus'));
const ProductDetail = React.lazy(() => import('./Products/ProductDetail'));
const EnquiryStatus = React.lazy(() => import('./Products/EnquiryStatus'));
const Login = React.lazy(() => import('./Login'));
const Signup = React.lazy(() => import('./Signup'));
const Logout = React.lazy(() => import('./Logout'));
import ServiceHome from './Services/ServiceHome'
const ServicesCategory = React.lazy(() => import('./Services/ServicesCategory'));
const ServiceDetail = React.lazy(() => import('./Services/ServiceDetail'));
const Clients = React.lazy(() => import('./Clients'));
const Contactus = React.lazy(() => import('./Contactus'));

const App = () => {
  const checkAdminPath = ['/Admin', '/Admin/Product', '/Admin/Profile', '/Admin/Services', '/Admin/Category', '/Admin/ServiceCategory']
  const adminComponentsExists = checkAdminPath.includes(window.location.pathname);
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  console.log(window.location.pathname);
  return (
    <BrowserRouter>
      <div className={currentMode === 'Dark' ? 'dark' : ''}>
        {
          adminComponentsExists ?
            <div className="flex relative dark:bg-main-dark-bg">
              <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                <TooltipComponent
                  content="Settings"
                  position="Top"
                >
                  <button
                    type="button"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor, borderRadius: '50%' }}
                    className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                  >
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>
              {activeMenu ? (
                <div className={`w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white`}>
                  <Sidebar checkAdminPath={checkAdminPath} />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar checkAdminPath={checkAdminPath} />
                </div>
              )}
              <div
                className={
                  activeMenu
                    ? `dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full`
                    : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                }
              >
                <div className="sticky md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                  <Navbar />
                </div>
                <div>
                  {themeSettings && (<ThemeSettings />)}
                  <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                      {/* dashboard  */}
                      <Route path="/Admin" element={(<Dashboard />)} />
                      <Route path="/Admin/Product" element={(<Product />)} />
                      <Route path="/Admin/Category" element={(<Category />)} />
                      <Route path="/Admin/Profile" element={(<Profile />)} />
                      <Route path="/Admin/Services" element={(<Services />)} />
                      <Route path="/Admin/ServiceCategory" element={(<ServiceCategory />)} />
                    </Routes>
                  </Suspense>
                </div>
                <Footer />
              </div>
            </div>
            : <>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/Admin/Login" element={(<AdminLogin />)} />
                  <Route path="/Admin/Logout" element={(<AdminLogout />)} />
                  <Route path="/Products" element={(<ProductHome />)} />
                  {/* <Route path="/" element={(<Home />)} /> */}
                  <Route path="/aboutus" element={(<Aboutus />)} />
                  <Route path="/ProductDetail" element={(<ProductDetail />)} />
                  <Route path="/EnquiryStatus" element={(<EnquiryStatus />)} />
                  <Route path="/Login" element={(<Login />)} />
                  <Route path="/Signup" element={(<Signup />)} />
                  <Route path="/Logout" element={(<Logout />)} />
                  <Route path="/" element={(<ServiceHome />)} />
                  <Route path="/ServicesCategory" element={(<ServicesCategory />)} />
                  <Route path="/ServiceDetail" element={(<ServiceDetail />)} />
                  <Route path="/clients" element={(<Clients />)} />
                  <Route path="/contact-us" element={(<Contactus />)} />
                </Routes>
              </Suspense>
            </>
        }</div>
    </BrowserRouter>
  );
};

export default App;
