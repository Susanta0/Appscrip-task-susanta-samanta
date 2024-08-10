import React from "react";

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

const Footer = () => {
  return (
    <>
      <footer className="bg-black border">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-20">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-3 lg:gap-y-16">
              <div className="w-fit col-span-2">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    BE THE FIRST TO KNOW
                  </h2>

                  <p className="mt-4 font- text-white">
                    Sign up for updates from metta muse
                  </p>
                </div>
              </div>

              <div className="col-span-2 mb-52 w-fit lg:flex lg:items-end">
                <form className="w-[36em] max-sm:w-[20em]">
                  <label htmlFor="UserEmail" className="sr-only">
                    {" "}
                    Email{" "}
                  </label>

                  <div className="focus-within:ring sm:flex sm:items-center sm:gap-4">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Enter your e-mail..."
                      className="w-full pl-6 h-12 border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                    />

                    <button className="mt-1 w-full bg-transparent rounded-md border px-14 py-2 text-xl font-light uppercase tracking-wide text-white sm:mt-0 sm:w-auto sm:shrink-0">
                      SUBSCRIBE
                    </button>
                  </div>
                </form>
              </div>

              <div className=" border col-span-2 sm:col-span-1">
                <p className="text-xl font-bold text-white">CONTACT US</p>

                <ul className="mt-4 space-y-1 text-lg font-light">
                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      +44 221 133 5360{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      customercare@mettamuse.com{" "}
                    </Link>
                  </li>
                </ul>
                <p className="text-xl font-bold text-white mt-5">CURRENCY</p>
                <div className="w-fit flex items-center mt-3">
                  <div>
                    <Image
                      src={americaLogo}
                      width={26}
                      height={26}
                      alt="united-states-of-america_logo"
                    />
                  </div>
                  <p className="w-fi">🔹</p>
                  <p className="text-white font-bold text-1xl">USD</p>
                </div>

                <ul className="mt-2 text-lg font-light">
                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      Transactions will be completed in Euros and a currency
                      reference is available on hover.{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" col-span-2 sm:col-span-1">
                <p className="text-xl font-bold text-white">metta muse</p>

                <ul className="mt-6 space-y-4 text-lg font-light">
                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      About Us{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      Stories{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      Artisans{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      Boutiques{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      EU Compliances Docs{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="text-xl font-bold text-white">QUICK LINKS</p>

                <ul className="mt-6 space-y-4 text-lg font-light">
                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      Orders & Shipping{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      Join/Login as a Seller{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      Payment & Pricing{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      Return & Refunds{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      FAQs{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      {" "}
                      Terms & Conditions{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="text-xl font-bold text-white">FOLLOW US</p>

                <div className="bg-red- flex gap-3 mt-6">
                  <div className="border p-1.5 rounded-full">
                    <RiInstagramFill className="h-5 w-5 text-white" />
                  </div>
                  <div className="border p-1.5 rounded-full">
                    <SiLinkedin className="h-5 w-5 text-white" />
                  </div>
                </div>
                <p className="text-xl font-bold text-white mt-14">
                  metta muse ACCEPTS
                </p>
                <div className="flex items-center justify-between mt-4 ">
                  <div className=" flex items-center justify-center border rounded-md bg-white  h-8 w-14">
                    <Image src={Gpay} width={36} height={36} alt="G Pay" />
                  </div>
                  <div className=" flex items-center justify-center border rounded-md bg-white  h-8 w-14">
                    <Image
                      src={mastercard}
                      width={24}
                      height={24}
                      alt="MasterCard"
                    />
                  </div>
                  <div className=" flex items-center justify-center border rounded-md bg-white h-8 w-14">
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

          <div className="mt-8 pt-8">
            <div className="">
              <p className="text-sm text-center text-white">
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
