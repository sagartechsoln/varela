import React from 'react';

const Slider = () => {
  return (
    <div id="full-slider-wrapper">
      <div id="layerslider" style={{ width: '100%', height: '600px' }}>
        {/* First slide */}
        <div className="ls-slide" data-ls="slidedelay: 5000; transition2d:5;">
          <img src="img/slides/slide_1.jpg" className="ls-bg" alt="Slide background" />
          <h3
            className="ls-l"
            style={{
              top: '45%',
              left: '50%',
              fontSize: '50px',
              whiteSpace: 'nowrap',
              color: '#fff',
              textTransform: 'uppercase',
              fontWeight: 900,
              fontStyle: 'italic',
              textAlign: 'left'
            }}
            data-ls="offsetxin:0;durationin:2000;delayin:1000;easingin:easeOutElastic;rotatexin:90;transformoriginin:50% bottom 0;offsetxout:0;rotatexout:90;transformoriginout:50% bottom 0;"
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
              textAlign: 'left'
            }}
            data-ls="durationin:2000;delayin:1000;easingin:easeOutElastic;"
          >
            "We provide Reliable and Affordable services"
          </p>
          <a
            className="ls-l button_intro"
            style={{ top: '65%', left: '50%', whiteSpace: 'nowrap' }}
            data-ls="durationin:2000;delayin:1300;easingin:easeOutElastic;"
            href="#"
          >
            Read more
          </a>
        </div>

        {/* Second slide */}
        <div className="ls-slide" data-ls="slidedelay: 5000; transition2d:5;">
          <img src="img/slides/slide_2.jpg" className="ls-bg" alt="Slide background" />
          <h3
            className="ls-l"
            style={{
              top: '45%',
              left: '50%',
              fontSize: '50px',
              whiteSpace: 'nowrap',
              color: '#fff',
              textTransform: 'uppercase',
              fontWeight: 900,
              fontStyle: 'italic'
            }}
            data-ls="offsetxin:0;durationin:2000;delayin:1000;easingin:easeOutElastic;rotatexin:90;transformoriginin:50% bottom 0;offsetxout:0;rotatexout:90;transformoriginout:50% bottom 0;"
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
              whiteSpace: 'nowrap'
            }}
            data-ls="durationin:2000;delayin:1000;easingin:easeOutElastic;"
          >
            "Our Professional workers will take care of it it"
          </p>
          <a
            className="ls-l button_intro"
            style={{ top: '65%', left: '50%', whiteSpace: 'nowrap' }}
            data-ls="durationin:2000;delayin:1300;easingin:easeOutElastic;"
            href="#"
          >
            Read more
          </a>
        </div>

        {/* Third slide */}
        <div className="ls-slide" data-ls="slidedelay:5000; transition2d:5;">
          <img src="img/slides/slide_3.jpg" className="ls-bg" alt="Slide background" />
          <h3
            className="ls-l"
            style={{
              top: '45%',
              left: '50%',
              fontSize: '50px',
              whiteSpace: 'nowrap',
              color: '#fff',
              textTransform: 'uppercase',
              fontWeight: 900,
              fontStyle: 'italic'
            }}
            data-ls="offsetxin:0;durationin:2000;delayin:1000;easingin:easeOutElastic;rotatexin:90;transformoriginin:50% bottom 0;offsetxout:0;rotatexout:90;transformoriginout:50% bottom 0;"
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
              whiteSpace: 'nowrap'
            }}
            data-ls="durationin:2000;delayin:1000;easingin:easeOutElastic;"
          >
            "Our Professional workers will take care of it it"
          </p>
          <a
            className="ls-l button_intro"
            style={{ top: '65%', left: '50%', whiteSpace: 'nowrap' }}
            data-ls="durationin:2000;delayin:1300;easingin:easeOutElastic;"
            href="#"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
