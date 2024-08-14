// icons
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { TbShoppingBag } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import Link from "next/link";

// logo
import iconLogo from "/public/icons8-logo.svg";
import Image from "next/image";
import "./Header.css"
export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="headerChild">
          <div className="headerChild2">
            <div className="headerChild3">
              <div className="headerChild4">
                <button className="btnLogo ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hhhh"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <Link className="icn" href="/">
                <Image src={iconLogo} width={40} height={40} alt="logo" />
              </Link>
            </div>

            <div className="child5">
              <nav aria-label="Global">
                <ul className="ul">
                  <li>
                    <Link
                      className="a1"
                      href="#"
                    >
                      LOGO
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="child6">
              <div className="child6-pro">
                <div>
                  <CiSearch className="icons12" />
                </div>
                <div>
                  <GoHeart className="icons12" />
                </div>
                <div>
                  <TbShoppingBag className="icons12" />
                </div>
                <div>
                  <CiUser className="icons13" />
                </div>
                <div className="eng">
                  <select placeholder="ENG" className="engchild">
                    <option value="ENG">ENG</option>
                    <option value="IND">IND</option>
                    <option value="AUS">AUS</option>
                    <option value="AUS">AUS</option>
                    <option value="NWZ">NWZ</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="child7">
            <p >HOME</p>
            <hr className="hr" />
            <p style={{color:"black"}}>SHOP</p>
          </div>
          <div className="child8">
            <div className="child8-child">
              <nav aria-label="Global">
                <ul>
                  <li>
                    <Link
                      className="navLink"
                      href="/shop"
                    >
                      {" "}
                      SHOP{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="navLink"
                      href="/skills"
                    >
                      {" "}
                      SKILLS{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="navLink"
                      href="/stories"
                    >
                      {" "}
                      STORIES{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="navLink"
                      href="/about"
                    >
                      {" "}
                      ABOUT{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="navLink"
                      href="/contactus"
                    >
                      {" "}
                      CONTACT US{" "}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
