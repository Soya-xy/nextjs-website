import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import icon_1 from '/public/images/icons/social_icon01.png'
import icon_2 from '/public/images/icons/social_icon02.png'
import icon_3 from '/public/images/icons/social_icon03.png'
import icon_4 from '/public/images/icons/social_icon04.png'
import logo from '/public/images/logo.png'

const Footer = () => {
  return (
    <footer className="footer-style-one">
      <div className="footer__top-wrap">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-xl-3 col-lg-5 col-md-7">
              <div className="footer-widget">
                <div className="footer-logo logo">
                  <Link href="/contact">
                    <Image src={logo} alt="Logo" width={177} height={40} />
                  </Link>
                </div>
                <div className="footer-text">
                  <p className="desc">
                    Lorem ipsum dolor sitamet consectur adipiscing Duis esollici
                    tudin augue euismod. Nulla ullam dolor sitamet consectetur
                  </p>
                  <p className="social-title">
                    Active{' '}
                    <span>
                      With Us{' '}
                      <i className="icon-[mingcute--right-fill] text-[14px]" />
                    </span>
                  </p>
                  <div className="footer-social">
                    <Link href="#">
                      <Image src={icon_1} alt="iocn" width={30} height={30} />
                    </Link>
                    <Link href="#">
                      <Image src={icon_2} alt="iocn" width={30} height={30} />
                    </Link>
                    <Link href="#">
                      <Image src={icon_3} alt="iocn" width={30} height={30} />
                    </Link>
                    <Link href="#">
                      <Image src={icon_4} alt="iocn" width={30} height={30} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">latest news</h4>
                <ul className="list-wrap menu">
                  {[1, 1].map((_v, k) => {
                    return (
                      <>
                        <div className="blog_wrapper1" key={k}>
                          <div className="blog_image">
                            <img
                              src="https://webstrot.com/html/domex/html/images/ft_blog1.png"
                              className="img-responsive"
                              alt="blog-img1_img"
                            />
                          </div>
                          <div className="blog_text">
                            <h5>
                              <a href="#">Lorem Night club and Beer bar </a>
                            </h5>
                            <div className="blog_date">June 28, 2019</div>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">gallery</h4>
                <ul className="list-wrap menu flex flex-wrap gap-2">
                  {[1, 1, 1, 1, 1, 1].map((_v, k) => {
                    return (
                      <li className="basis-[31%]" key={k}>
                        <img
                          src="https://webstrot.com/html/domex/html/images/ft_blog1.png"
                          className="img-responsive"
                          alt="blog-img1_img"
                        />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">CONTACT US</h4>
                <ul>
                  <li className="!mb-[1.5rem] flex hover:text-green-500">
                    <i className="icon-[material-symbols--location-on] mr-2 text-2xl text-green-500" />
                    512 - omexcity, California
                  </li>
                  <li className="!mb-[1.5rem] flex hover:text-green-500">
                    <i className="icon-[mingcute--earth-2-line] mr-2 text-2xl text-green-500" />
                    www.example.com
                  </li>
                  <li className="!mb-[1.5rem] flex hover:text-green-500">
                    <i className="icon-[mingcute--phone-fill] mr-2 text-2xl text-green-500" />
                    +65 1800-123-145
                  </li>
                  <li className="!mb-[1.5rem] flex hover:text-green-500">
                    <i className="icon-[mingcute--mail-fill] mr-2 text-2xl text-green-500" />
                    domex@example.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__wrap">
        <div className="container mx-auto">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="copyright__text">
                <p>
                  Copyright © {new Date().getFullYear()} - All Rights Reserved
                  By <span>Mykd</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
