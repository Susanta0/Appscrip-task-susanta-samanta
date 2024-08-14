// nextjs link
import Link from "next/link";

// payment method logos
import Gpay from "/public/google-pay.png";
import mastercard from "/public/card.png";
import paypal from "/public/paypal.png";
import amex from "/public/amex.png";
import applePay from "/public/apple-pay.png";
import shopPay from "/public/shoppay.svg";

// american flag logo
import americaLogo from "/public/united-states-of-america.png";

// react icons
import { RiInstagramFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import Image from "next/image";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="containerMain">
          <div className="containerMainChild">
            <div className="custom-grid">
              <div className="custom-grid2">
                <div>
                  <h2 className="heading">
                    BE THE FIRST TO KNOW
                  </h2>

                  <p className="para1">
                    Sign up for updates from metta muse
                  </p>
                </div>
                <div className="form-con">
                  <form className="form">
                    <label htmlFor="UserEmail" className="email">
                      {" "}
                      Email{" "}
                    </label>

                    <div className="emlbtnDiv">
                      <input
                        type="email"
                        id="UserEmail"
                        placeholder="Enter your e-mail..."
      
                      />

                      <button>
                        SUBSCRIBE
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="contact-us">
                <p className="para4">CONTACT US</p>

                <ul className="ul1">
                  <li>
                    <Link
                      href="#"
                     
                    >
                      {" "}
                      +44 221 133 5360{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                     
                    >
                      {" "}
                      customercare@mettamuse.com{" "}
                    </Link>
                  </li>
                </ul>
                <p className="currency">CURRENCY</p>
                <div>
                  <div>
                    <Image
                      src={americaLogo}
                      width={26}
                      height={26}
                      alt="united-states-of-america_logo"
                    />
                  </div>
                  <p>🔹</p>
                  <p className="usd">USD</p>
                </div>

                <ul className="link">
                  <li>
                    <Link
                      href="#"
                     
                    >
                      Transactions will be completed in Euros and a currency
                      reference is available on hover.
                    </Link>
                  </li>
                </ul>
              </div>
              <hr className="hr3" />
              <div className="contact-us">
                <p className="para4">metta muse</p>

                <ul className="ul1">
                  <li>
                    <Link
                      href="#"
                    
                    >
                      {" "}
                      About Us{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                    
                    >
                      {" "}
                      Stories{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                     
                    >
                      {" "}
                      Artisans{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                     
                    >
                      {" "}
                      Boutiques{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                    
                    >
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      
                    >
                      {" "}
                      EU Compliances Docs{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="contact-us">
                <p className="para4">QUICK LINKS</p>

                <ul className="ul1">
                  <li>
                    <Link
                      href="#"
                    
                    >
                      {" "}
                      Orders & Shipping{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                     
                    >
                      {" "}
                      Join/Login as a Seller{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                     
                    >
                      {" "}
                      Payment & Pricing{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      
                    >
                      {" "}
                      Return & Refunds{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                     
                    >
                      {" "}
                      FAQs{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                     
                    >
                      {" "}
                      Privacy Policy{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                     
                    >
                      {" "}
                      Terms & Conditions{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="contact-us">
                <p className="para4">FOLLOW US</p>

                <div className="iconsCon">
                  <div className="icon-wrapper">
                    <RiInstagramFill className="icons01" />
                  </div>
                  <div className="icon-wrapper">
                    <SiLinkedin className="icons01" />
                  </div>
                </div>
                <p className="custom-text2">
                  metta muse ACCEPTS
                </p>
                <div className="payment">
                  <div className="payment-icon">
                    <Image src={Gpay} width={36} height={36} alt="G Pay" />
                  </div>
                  <div className="payment-icon">
                    <Image
                      src={mastercard}
                      width={24}
                      height={24}
                      alt="MasterCard"
                    />
                  </div>
                  <div className="payment-icon">
                    <Image src={paypal} height={16} width={16} alt="Paypal" />
                  </div>
                  <div>
                    <Image src={amex} alt="AMEX" height={40} width={44} />
                  </div>
                  <div>
                    <Image
                      src={applePay}
                      alt="Apple Pay"
                      height={50}
                      width={50}
                    />
                  </div>
                  <div>
                    <Image
                      src={shopPay}
                      alt="Shop Pay"
                      height={50}
                      width={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer2">
            <div>
              <p className="copyright">
                Copyright &copy; 2023 mettamuse. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
