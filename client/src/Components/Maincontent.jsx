import React from 'react'

const Maincontent = () => {
  return (
    <main>
      <div id="get_quote">
        <div className="container">
          <div className="row m-0">
            <div className="col-md-9">
              <h3>Looking for a quality and affordable electrician service? </h3>
            </div>
            <div className="col-md-3">
              <a href="quotation_wizard.html" className="btn_quote">Get a quote</a>
            </div>
          </div>
        </div>
      </div>

      <div id="feat_home">
        <div className="container margin_60">
          <div className="row m-0">
            <div className="col-md-4 col-sm-4">
              <div className="box_feat">
                <a href="#"><i className="icon_info"></i></a>
                <p>
                  <img src="img/home_icon_1.png" alt="" width="110" height="100" data-retina="true" />
                </p>
                <h3>+1000 Happy customers</h3>
                <p>
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="box_feat">
                <a href="#"><i className="icon_info"></i></a>
                <p>
                  <img src="img/home_icon_2.png" alt="" width="110" height="100" data-retina="true" />
                </p>
                <h3>Excellence Certificate</h3>
                <p>
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="box_feat">
                <a href="#"><i className="icon_info"></i></a>
                <p>
                  <img src="img/home_icon_3.png" alt="" width="110" height="100" data-retina="true" />
                </p>
                <h3>Latest technologies</h3>
                <p>
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-center">Meis impedit labitur voluptatum mea ut!</h2>
          <div className="phone_feat">
            <a href="tel://004542344599">Call Us 004594234244</a>
          </div>
        </div>
      </div>

      <div className="container margin_60">
        <div className="row m-0">
          <div className="col-md-4 col-sm-4">
            <a href="service_1.html"><img src="img/service_home_1.jpg" alt="" className="img-responsive border" /></a>
            <h3>Air condition installation</h3>
            <p>
              Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex.
              <br /><a href="service_1.html" className="link_normal">Read more</a>
            </p>
          </div>
          <div className="col-md-4 col-sm-4">
            <a href="service_2.html"><img src="img/service_home_2.jpg" alt="" className="img-responsive border" /></a>
            <h3>Wiring and installation</h3>
            <p>
              Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex.
              <br /><a href="service_2.html" className="link_normal">Read more</a>
            </p>
          </div>
          <div className="col-md-4 col-sm-4">
            <a href="service_3.html"><img src="img/service_home_3.jpg" alt="" className="img-responsive border" /></a>
            <h3>Security systems</h3>
            <p>
              Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex.
              <br /><a href="service_2.html" className="link_normal">Read more</a>
            </p>
          </div>
        </div>

        <hr />

        <div className="row m-0">
          <div className="col-md-4">
            <h4>Some words about us</h4>
            <p>
              Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot persecuti mel. Libris hendrerit ex sea. Duo legere evertitur an, pri hinc <strong>doctus definitiones</strong> an, vix id dicam putent.
            </p>
            <p>
              Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot persecuti mel. Libris hendrerit ex sea. Duo legere evertitur an, pri hinc doctus definitiones an, vix id dicam putent. Ius ornatus instructior in.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Mission</h4>
            <p>
              Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot persecuti mel. Libris hendrerit ex sea. Duo legere evertitur an, pri hinc <strong>doctus definitiones</strong> an, vix id dicam putent. Ius ornatus instructior in.
            </p>
            <ul className="list_2">
              <li><strong>Cum doctus civibus efficiantur in</strong></li>
              <li><strong>Quot persecuti mel.</strong></li>
              <li><strong>Vix id dicam putent</strong></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>10 Years of experience</h4>
            <p>
              Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot persecuti mel. Libris hendrerit ex sea. Duo legere evertitur an, pri hinc <strong>doctus definitiones</strong> an, vix id dicam putent. Ius ornatus instructior in.
            </p>
            <ul className=" list_ok">
              <li><strong>Cum doctus civibus efficiantur in</strong></li>
              <li><strong>Quot persecuti mel.</strong></li>
              <li><strong>Vix id dicam putent</strong></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="bg_content magnific">
        <div>
          <h3>View a demo of Job task</h3>
          <p>
            Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex.
          </p>
          <a href="https://www.youtube.com/watch?v=AwJIrdYAdAA" className="video"><i className="icon-play-circled2-1"></i></a>
        </div>
      </div>
    </main>
  )
}

export default Maincontent