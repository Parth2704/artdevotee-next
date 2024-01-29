import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/future/image";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";
import { ApiPost } from "../../Api/Api";
import foot_loc from "../../assets/images/foot-loc.png"
import fot_call from "../../assets/images/fot-call.png"
import fot_mail from "../../assets/images/fot-mail.png"
import visa from "../../assets/images/visa.png"
import master from "../../assets/images/master.png"
import discover from "../../assets/images/discover.png"
import american from "../../assets/images/american.png"
import go_to_top from "../../assets/images/go-to-top.png"
import foot_logo from "../../assets/images/foot-logo.png"

const Footer = () => {
  const router = useRouter();
  const [about, setAbout] = useState([]);
  useEffect(() => {
    ApiPost("get-home-content", {}).then((res) => {
      if (res?.data?.result) {
        setAbout(res?.data?.result?.about);
      }
    });
  }, []);
  return (
    <>
      <section className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="foot-top-inr">
              <Link href="/">
                <a className="foot-logo">
                <Image
                  src={foot_logo}
                  alt=""
                />
                </a>
              </Link>
              <ul className="sos-icns">
                <li>
                  <PinterestShareButton
                    media={
                      "https://artdevotee.com/dev/artdevotee_nextjs" + router?.pathname
                    }
                    description={
                      "https://artdevotee.com/dev/artdevotee_nextjs" + router?.pathname
                    }
                    url={
                      "https://artdevotee.com/dev/artdevotee_nextjs" + router?.pathname
                    }
                  >
                    <a>
                      <i className="fa fa-pinterest" aria-hidden="true"></i>
                    </a>
                  </PinterestShareButton>
                </li>
                <li>
                  <FacebookShareButton
                    url={
                      "https://artdevotee.com/dev/artdevotee_nextjs" + router?.pathname
                    }
                  >
                    <a>
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </FacebookShareButton>
                </li>
                <li>
                  <TwitterShareButton
                    url={
                      "https://artdevotee.com/dev/artdevotee_nextjs" + router?.pathname
                    }
                  >
                    <a>
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </TwitterShareButton>
                </li>
                <li>
                  <LinkedinShareButton
                    url={
                      "https://artdevotee.com/dev/artdevotee_nextjs" + router?.pathname
                    }
                  >
                    <a>
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </LinkedinShareButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-mid">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="fot-fst">
                  <p dangerouslySetInnerHTML={{ __html: about }} />
                  <Link href="/about-us">Read More +</Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="fot-scnd">
                  <h4>Quick Links</h4>
                  <div className="fot-scnd-inr">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                       <Link href="/about-us">About Us</Link>
                      </li>
                      <li>
                       <Link href="/">Our Products</Link>
                      </li>
                      <li>
                       <Link href="/sign-up">Sign Up</Link>
                      </li>
                      <li>
                       <Link href="/login">Login</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                       <Link href="/contact-us">Contact Us</Link>
                      </li>
                      <li>
                       <Link href="/how-it-works">How It Works</Link>
                      </li>
                      <li>
                       <Link href="/faq">FAQ</Link>
                      </li>
                      <li>
                       <Link href="/terms-condition">Terms and Conditions</Link>
                      </li>
                      <li>
                       <Link href="/privacy-policy">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="fot-lst">
                  <h4>Get In Touch</h4>
                  <ul>
                    <li>
                      <Image
                        src={foot_loc}
                        alt=""
                      />
                      Lorem Ipsum is simply dummy caption dummy address info
                      here.
                    </li>
                    <li className="fot-call">
                      <Image
                        src={fot_call}
                        alt=""
                      />
                      <a className="a_hover" href={`tel:+1 0123456789`}>
                        +1 0123456789
                      </a>
                      /
                      <a className="a_hover" href={`tel:+1 9876543210`}>
                        +1 9876543210
                      </a>{" "}
                    </li>
                    <li>
                      <Image
                        src={fot_mail}
                        alt=""
                      />
                      <a
                        className="a_hover"
                        href={`mailto:info@artdevotee.com`}
                      >
                        info@artdevotee.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-btm">
          <div className="container">
            <div className="foot-btm-inr">
              <p>
                Copyright &copy; 2022{" "}
               <Link href="/" passHref>
               <a target="_blank" rel="noopener noreferrer">
                  artdevotee.com
                </a>
                </Link>{" "}
                | All Rights Reserved.
              </p>
              <ul className="pay-opt">
                <li>
                  <p>Secure Payment Options</p>
                </li>
                <li>
                  <Image src={visa} alt=""/>
                </li>
                <li>
                  <Image src={master} alt=""/>
                </li>
                <li>
                  <Image src={discover} alt=""/>
                </li>
                <li>
                  <Image src={american}alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div id="stop" className="scrollTop">
        <span>
          <a>
            <Image src={go_to_top} alt=""/>
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
