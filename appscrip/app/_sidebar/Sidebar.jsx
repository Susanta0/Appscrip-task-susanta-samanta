import React from "react";
import "./Siderbar.css";
const Sidebar = () => {
  return (
    <>
    <div className="flex border gap-2 px-16">
      <aside className=" py-10 w-[20%] ">
        <div className=" flex items-center gap-2">
          <input className="w-6 h-6" type="checkbox" name="" id="" />
          <p className="font-bold text-lg">CUSTOMIZBLE</p>
        </div>
        <br />
        <hr />
        <br />

        <details className="overflow-hidden [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-2  text-gray-900 transition">
            <span className="text-lg font-bold"> IDEAL FOR </span>

            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="bg-white">
            <header className="flex flex-col mt-4 gap-4">
              <span className="text-1xl text-black"> All </span>

              <button
                type="button"
                className="w-fit text-sm text-gray-400 underline underline-offset-4"
              >
                Unselect all
              </button>
            </header>

            <ul className="space-y-3 mt-6">
              <li>
                <label
                  htmlFor="FilterRed"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterRed"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black"> Men </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterBlue"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterBlue"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    {" "}
                    Women{" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    {" "}
                    Baby & Kids{" "}
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </details>
        <hr className=" mt-5 border border-gray-200" />

        <details className="mt-5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-2  text-gray-900 transition">
            <span className="text-lg font-bold"> OCCASION </span>

            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="bg-white">
            <header className="flex flex-col mt-4 gap-4">
              <span className="text-1xl text-black"> All </span>

              <button
                type="button"
                className="w-fit text-sm text-gray-400 underline underline-offset-4"
              >
                Unselect all
              </button>
            </header>

            <ul className="space-y-3 mt-6">
              <li>
                <label
                  htmlFor="FilterRed"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterRed"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    {" "}
                    Rainy Season{" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterBlue"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterBlue"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Casual
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Wedding
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">Party</span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Regular
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </details>
        <hr className=" mt-5 border border-gray-200" />

        <details className="mt-5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-2  text-gray-900 transition">
            <span className="text-lg font-bold"> WORK </span>

            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="bg-white">
            <header className="flex flex-col mt-4 gap-4">
              <span className="text-1xl text-black"> All </span>

              <button
                type="button"
                className="w-fit text-sm text-gray-400 underline underline-offset-4"
              >
                Unselect all
              </button>
            </header>

            <ul className="space-y-3 mt-6">
              <li>
                <label
                  htmlFor="FilterRed"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterRed"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    {" "}
                    Frech Knot{" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterBlue"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterBlue"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Zardosi
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">Fancy</span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Embroidery
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </details>
        <hr className=" mt-5 border border-gray-200" />

        <details className="mt-5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-2  text-gray-900 transition">
            <span className="text-lg font-bold"> FABRIC </span>

            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="bg-white">
            <header className="flex flex-col mt-4 gap-4">
              <span className="text-1xl text-black"> All </span>

              <button
                type="button"
                className="w-fit text-sm text-gray-400 underline underline-offset-4"
              >
                Unselect all
              </button>
            </header>

            <ul className="space-y-3 mt-6">
              <li>
                <label
                  htmlFor="FilterRed"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterRed"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    {" "}
                    Muslin{" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterBlue"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterBlue"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Satin Blend
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">Satin</span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Tericoat
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">Liner</span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Raw Silk
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Cotton
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">Silk</span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Cotton Silk
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </details>
        <hr className=" mt-5 border border-gray-200" />

        <details className="mt-5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-2  text-gray-900 transition">
            <span className="text-lg font-bold"> SEGMENT </span>

            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="bg-white">
            <header className="flex flex-col mt-4 gap-4">
              <span className="text-1xl text-black"> All </span>

              <button
                type="button"
                className="w-fit text-sm text-gray-400 underline underline-offset-4"
              >
                Unselect all
              </button>
            </header>

            <ul className="space-y-3 mt-6">
              <li>
                <label
                  htmlFor="FilterRed"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterRed"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    {" "}
                    Velvet{" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterBlue"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterBlue"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Zardosi
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Cotton
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterGreen"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterGreen"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Leather
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </details>
        <hr className=" mt-5 border border-gray-200" />

        <details className="mt-5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-2  text-gray-900 transition">
            <span className="text-lg font-bold"> SUITABLE FOR </span>

            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="bg-white">
            <header className="flex flex-col mt-4 gap-4">
              <span className="text-1xl text-black"> All </span>

              <button
                type="button"
                className="w-fit text-sm text-gray-400 underline underline-offset-4"
              >
                Unselect all
              </button>
            </header>

            <ul className="space-y-3 mt-6">
              <li>
                <label
                  htmlFor="FilterRed"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterRed"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    {" "}
                    Half Sleeve{" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterBlue"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterBlue"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Cap Sleeve
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </details>
        <hr className=" mt-5 border border-gray-200" />

        <details className="mt-5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-2  text-gray-900 transition">
            <span className="text-lg font-bold"> RAW MATERIALS </span>

            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="bg-white">
            <header className="flex flex-col mt-4 gap-4">
              <span className="text-1xl text-black"> All </span>

              <button
                type="button"
                className="w-fit text-sm text-gray-400 underline underline-offset-4"
              >
                Unselect all
              </button>
            </header>

            <ul className="space-y-3 mt-6">
              <li>
                <label
                  htmlFor="FilterRed"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterRed"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    {" "}
                    Wool{" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterBlue"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterBlue"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">Silk</span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="FilterRed"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterRed"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    {" "}
                    Leather{" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterBlue"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterBlue"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Cotton
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="FilterBlue"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterBlue"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Cellulosic Fibers
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </details>
        <hr className=" mt-5 border border-gray-200" />

        <details className="mt-5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-2  text-gray-900 transition">
            <span className="text-lg font-bold"> PATTERN </span>

            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="bg-white">
            <header className="flex flex-col mt-4 gap-4">
              <span className="text-1xl text-black"> All </span>

              <button
                type="button"
                className="w-fit text-sm text-gray-400 underline underline-offset-4"
              >
                Unselect all
              </button>
            </header>

            <ul className="space-y-3 mt-6">
              <li>
                <label
                  htmlFor="FilterRed"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterRed"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    {" "}
                    Windowpane{" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterBlue"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterBlue"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Pinstripes
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="FilterRed"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterRed"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    {" "}
                    Solid{" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterBlue"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterBlue"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Chalk Stripes
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="FilterBlue"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterBlue"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Slim Fit
                  </span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="FilterBlue"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterBlue"
                    className="size-5 rounded border-black"
                  />

                  <span className="text-1xl font-normal text-black">
                    Tartan
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </details>
        <hr className=" mt-5 border border-gray-200" />


        
      </aside>

      <div className="lg:col-span-3">
        {/* <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                </p>
              </div>
            </a>
          </li>
        </ul> */}
      </div>
    </div>
      
      
    </>
  );
};

export default Sidebar;
