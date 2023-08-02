import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from '../Components/Footer'
import AboutComponent from './components/about';
import { Link, useNavigate } from 'react-router-dom';
import VisionMissionSection from './components/VMission';
import Loader from '../Components/Loader';

const ServiceHome = () => {
  const [category, setCategory] = useState([]);
  const [categoryLoader, setCategoryLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const callcategories = async () => {
      try {
        setCategoryLoader(true)
        const req = await fetch('/api/getAllServicecategories', {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        })
          .then(response => response.json())
          .then(jsonData => {
            setCategory(jsonData);
            setCategoryLoader(false)
          }).catch(error => console.error(error))

      } catch (error) {
        console.log(error);
      }
    }
    callcategories();
  }, [])

  const handleService = (item) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/ServicesCategory?${item.service_category_name}`, { state: item });
  };

  return (
    <main>
      <head>
        <title>
          Services
        </title>
      </head>

      <Header />

      <div id="full-slider-wrapper">
        <div id="layerslider" className='mt-[200px] md:mt-[230px]' style={{ width: '100%', height: '600px' }}>
          <div className="ls-slide" data-ls="slidedelay: 5000; transition2d:5;">
            <img src="/3.png" className="ls-bg" alt="Slide background" />
            <h3
              className="ls-l"
              style={{
                top: '45%',
                left: '50%',
                fontSize: '50px',
                whiteSpace: 'nowrap',
                color: '#fff',
                textTransform: 'uppercase',
                fontWeight: '900',
                fontStyle: '',
                textAlign: 'left',
              }}
              data-ls="offsetxin:0;durationin:1000;delayin:500;easingin:easeOutElastic;rotatexin:90;transformoriginin:50% bottom 0;offsetxout:0;rotatexout:90;transformoriginout:50% bottom 0;"
            >
              Fast Electrical services!
            </h3>
            <p
              className="ls-l"
              style={{
                top: '52%',
                left: '50%',
                color: '#fff',
                fontSize: '24px',
                whiteSpace: 'nowrap',
                textAlign: 'left',
              }}
              data-ls="durationin:2000;delayin:1000;easingin:easeOutElastic;"
            >
              "We provide Reliable and Affordable services"
            </p>
          </div>

          <div className="ls-slide" data-ls="slidedelay: 5000; transition2d:5;">
            <img src="/mainImage.png" className="ls-bg" alt="Slide background" />
            <h3
              className="ls-l"
              style={{
                top: '45%',
                left: '50%',
                fontSize: '50px',
                whiteSpace: 'nowrap',
                color: '#fff',
                textTransform: 'uppercase',
                fontWeight: '900',
                fontStyle: '',
              }}
              data-ls="offsetxin:0;durationin:1000;delayin:500;easingin:easeOutElastic;rotatexin:90;transformoriginin:50% bottom 0;offsetxout:0;rotatexout:90;transformoriginout:50% bottom 0;"
            >
              Repair and troubleshooting!
            </h3>
            <p
              className="ls-l"
              style={{
                top: '52%',
                left: '50%',
                color: '#fff',
                fontSize: '24px',
                whiteSpace: 'nowrap',
              }}
              data-ls="durationin:2000;delayin:1000;easingin:easeOutElastic;"
            >
              "Our Professional workers will take care of it"
            </p>
          </div>

          <div className="ls-slide" data-ls="slidedelay:5000; transition2d:5;">
            <img src="/1.png" className="ls-bg" alt="Slide background" />
            <h3
              className="ls-l"
              style={{
                top: '45%',
                left: '50%',
                fontSize: '50px',
                whiteSpace: 'nowrap',
                color: '#fff',
                textTransform: 'uppercase',
                fontWeight: '900',
                fontStyle: '',
              }}
              data-ls="offsetxin:0;durationin:1000;delayin:500;easingin:easeOutElastic;rotatexin:90;transformoriginin:50% bottom 0;offsetxout:0;rotatexout:90;transformoriginout:50% bottom 0;"
            >
              Great equipment and products!
            </h3>
            <p
              className="ls-l"
              style={{
                top: '52%',
                left: '50%',
                color: '#fff',
                fontSize: '24px',
                whiteSpace: 'nowrap',
              }}
              data-ls="durationin:2000;delayin:1000;easingin:easeOutElastic;"
            >
              "Our Professional workers will take care of it"
            </p>
          </div>
        </div>
      </div>

      <main>
        <div id="get_quote">
          <div className="md:container md:mx-auto">
            <div className="row m-0">
              <div className="col-md-9">
                <h3 className='font-normal'>Looking for a quality and affordable electrician service? </h3>
              </div>
              <div className="col-md-3">
                <Link to={`/contact-us`}>
                  <a href="javascript:void(0)" className="btn_quote">Get a quote</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div id="feat_home">
          <div className="md:container md:mx-auto  margin_60">
            <div className="row m-0">
              <div className="col-md-4 col-sm-4">
                <div className="box_feat">
                  <p className="flex justify-center">
                    <img src="img/home_icon_1.png" alt="" width="110" height="100" data-retina="true" />
                  </p>
                  <h3 className='font-bold text-2xl mt-2 md:text-3xl'>+1000 Satisfied Customers</h3>
                  <p className='text-justify'>
                    Experience the satisfaction of over 1000 happy customers who have trusted us with their electrical needs. We prioritize customer happiness and strive to exceed expectations.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="box_feat">
                  <p className="flex justify-center">
                    <img src="img/home_icon_2.png" alt="" width="110" height="100" data-retina="true" />
                  </p>
                  <h3 className='font-bold text-2xl mt-2 md:text-3xl'>Excellence Recognized</h3>
                  <p className='text-justify'>
                    We are proud recipients of the Excellence Certificate, a testament to our commitment to delivering top-notch electric services. Trust us for exceptional quality and professionalism.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="box_feat">
                  <p className="flex justify-center">
                    <img src="img/home_icon_3.png" alt="" width="110" height="100" data-retina="true" />
                  </p>
                  <h3 className='font-bold text-2xl mt-2 md:text-3xl'>Cutting-Edge Technologies</h3>
                  <p className='text-justify'>
                    Stay ahead with our implementation of the latest technologies in the electrical industry. We leverage innovative solutions to provide efficient and future-proof electrical services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="md:container md:mx-auto margin_60 ml-2 mr-2">
        <h2 className='text-center text-5xl font-bold mb-20'>
          <span className='text-[#00254a] uppercase'>Our</span>
          <span className='text-red-500 ml-2 uppercase'>Services</span>
        </h2>

        <div className={`row m-0 mb-5 md:flex-row flex-col flex justify-center`}>
          {
            category?.map((item, i) => {
              return <>
                <div className={`col-sm-6 col-md-4 mb-5  m-2 `}>
                  <div className='shadow-lg'>
                    <div className='w-full h-[250px] overflow-hidden cursor-pointer' onClick={() => handleService(item)}>
                      <img src={`/uploads/serviceCategory/${item.imageService}`} alt={item.service_category_name} className="img-responsive border w-full h-full object-cover" />
                    </div>
                    <div className='p-4'>
                      <h3 className='font-bold text-3xl mt-5 mb-3'>{item.service_category_name}</h3>
                      <p className='line-clamp-3 mb-5'>
                        {item.service_content}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            })
          }
        </div>

        <hr />

        {/* aBOUT US */}
      </div>

      <AboutComponent />
      <VisionMissionSection />


      <Footer />
    </main>
  );
};

export default ServiceHome;
