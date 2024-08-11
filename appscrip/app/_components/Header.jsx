// icons
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { TbShoppingBag } from "react-icons/tb";
import { CiUser } from "react-icons/ci";

// next js tag
import Link from "next/link";
import Image from "next/image";

// logo
import iconLogo from "/public/icons8-logo.svg";

export const Header = () => {
  return (
    <>
      <header className="bg-white border-b-2">
        <div className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex max-sm:flex max-sm:items-center max-sm:gap-2 md:items-center md:gap-12">
              <div className=" hidden max-sm:flex">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
              <Link className="block" href="/">
                <Image src={iconLogo} width={40} height={40} alt="logo" />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-black font-extrabold text-4xl"
                      href="#"
                    >
                      LOGO
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className=" sm:flex max-sm:flex w-54 items-center gap-3 ">
                <div>
                  <CiSearch className="h-7 w-7" />
                </div>
                <div>
                  <GoHeart className="h-7 w-7" />
                </div>
                <div>
                  <TbShoppingBag className="h-7 w-7" />
                </div>
                <div>
                  <CiUser className="h-7 w-7 max-sm:hidden" />
                </div>
                <div className="max-sm:hidden">
                  <select placeholder="ENG">
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
          <div className="hidden max-sm:flex max-sm:gap-2 max-sm:items-center">
            <p className="text-gray-400">HOME</p>
            <hr className="h-4 border" />
            <p>SHOP</p>
          </div>
          <div className="flex mt-10 h-16 max-sm:hidden items-center justify-center">
            <div className="md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-20">
                  <li>
                    <Link
                      className="navLink text-black font-bold text-xl relative "
                      href="/shop"
                    >
                      {" "}
                      SHOP{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="navLink text-black font-bold text-xl relative "
                      href="/skills"
                    >
                      {" "}
                      SKILLS{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="navLink text-black font-bold text-xl relative "
                      href="/stories"
                    >
                      {" "}
                      STORIES{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="navLink text-black font-bold text-xl relative "
                      href="/about"
                    >
                      {" "}
                      ABOUT{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="navLink text-black font-bold text-xl relative "
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
