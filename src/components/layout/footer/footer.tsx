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
            <div className="!w-[20%] flex-[0_0_auto]">
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
                  {/* <p className="social-title">
                    Active{' '}
                    <span>
                      With Us{' '}
                      <i className="icon-[mingcute--right-fill] text-[14px]" />
                    </span>
                  </p> */}
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
            <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6 ml-[1%]">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title qr-title text-center">TELEGRAM</h4>
                <img
                  src="https://gstatic.clewm.net/caoliao-resource/231117/a44fa42f_4b16ec36_1666157560.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu ">
                <h4 className="fw-title qr-title text-center">SKYPE</h4>
                <img
                  src="https://gstatic.clewm.net/caoliao-resource/231117/a44fa42f_4b16ec36_1666157560.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6 mr-[4%]">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title qr-title text-center">WhatsApp</h4>
                <img
                  src="https://gstatic.clewm.net/caoliao-resource/231117/a44fa42f_4b16ec36_1666157560.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">CONTACT US</h4>
                <ul>
                  <li className="!mb-[2rem] flex hover:text-green-500">
                    <i className="icon-[material-symbols--location-on] mr-2 text-2xl text-green-500" />
                    142 - omexcity, New york
                  </li>
                  <li className="!mb-[2rem] flex hover:text-green-500">
                    <i className="icon-[mingcute--earth-2-line] mr-2 text-2xl text-green-500" />
                    www.baidu.com
                  </li>
                  <li className="!mb-[2rem] flex hover:text-green-500">
                    <i className="icon-[mingcute--phone-fill] mr-2 text-2xl text-green-500" />
                    +852 374648273
                  </li>
                  <li className="!mb-[1.5rem] flex hover:text-green-500">
                    <i className="icon-[mingcute--mail-fill] mr-2 text-2xl text-green-500" />
                    my@qq.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__wrap">
        <div className="container mx-auto">
          <div className="copyright__text flex w-full items-center justify-between">
            <p>
              Copyright © {new Date().getFullYear()} - All Rights Reserved By{' '}
              <span>Mykd</span>
            </p>
            <div className="flex h-[30px]">
              <img src="/images/footer_1.png" className="mr-[20px]" alt="" />
              <img src="/images/footer_2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
