"use client";
import React, { useState } from "react";

import Recommended from "../_recommended/Recommended";
import Products from "../_components/_products/Products";
const Sidebar = () => {
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [show, setShow] = useState(false);
  const [filters, setFilters] = useState({
    men: false,
    women: false,
    kids: false,
  });

  const handleShow = () => {
    setShow(!show);
  };

  // filter data
  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  return (
    <>
      <Recommended
        handleShow={handleShow}
        show={show}
        setSelectedSortOption={setSelectedSortOption}
      />

      <div className="flex gap-2 px-16 mt-2 max-sm:px-1 sm:px-2">
        {show && (
          <aside className=" px-14 py-10 w-[40%] ">
            <div className=" flex items-center gap-2">
              <input className="w-6 h-6" type="checkbox" name="" id="" />
              <p className="font-bold text-lg">CUSTOMIZBLE</p>
            </div>
            <br />
            <hr />
            <br />

            <details className="overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex flex-col cursor-pointer gap-2 text-gray-900 transition">
                <div className="w-full flex justify-between items-center">
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
                </div>

                <span className="text-1xl text-black"> All </span>
              </summary>

              <div className="bg-white">
                <header className="flex flex-col mt-4 gap-4">
                  <button
                    type="button"
                    className="w-fit text-sm text-gray-400 underline underline-offset-4"
                    onClick={() => handleFilterChange("all")}
                  >
                    Unselect all
                  </button>
                </header>

                <ul className="space-y-3 mt-6">
                  <li>
                    <label
                      htmlFor="FilterMen"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterMen"
                        checked={filters.men}
                        onChange={() => handleFilterChange("men")}
                        className="size-5 rounded border-black"
                      />

                      <span className="text-1xl font-normal text-black">
                        {" "}
                        Men{" "}
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterWomen"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterWomen"
                        className="size-5 rounded border-black"
                        checked={filters.women}
                        onChange={() => handleFilterChange("women")}
                      />

                      <span className="text-1xl font-normal text-black">
                        {" "}
                        Women{" "}
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterKids"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterKids"
                        className="size-5 rounded border-black"
                        checked={filters.kids}
                        onChange={() => handleFilterChange("kids")}
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
              <summary className="flex flex-col cursor-pointer gap-2 text-gray-900 transition">
                <div className="w-full flex justify-between items-center">
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
                </div>

                <span className="text-1xl text-black"> All </span>
              </summary>

              <div className="bg-white">
                <header className="flex flex-col mt-4 gap-4">
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

                      <span className="text-1xl font-normal text-black">
                        Party
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
                        Regular
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
            <hr className=" mt-5 border border-gray-200" />

            <details className="mt-5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex flex-col cursor-pointer gap-2 text-gray-900 transition">
                <div className="w-full flex justify-between items-center">
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
                </div>

                <span className="text-1xl text-black"> All </span>
              </summary>

              <div className="bg-white">
                <header className="flex flex-col mt-4 gap-4">
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

                      <span className="text-1xl font-normal text-black">
                        Fancy
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
                        Embroidery
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
            <hr className=" mt-5 border border-gray-200" />

            <details className="mt-5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex flex-col cursor-pointer gap-2 text-gray-900 transition">
                <div className="w-full flex justify-between items-center">
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
                </div>

                <span className="text-1xl text-black"> All </span>
              </summary>

              <div className="bg-white">
                <header className="flex flex-col mt-4 gap-4">
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

                      <span className="text-1xl font-normal text-black">
                        Satin
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

                      <span className="text-1xl font-normal text-black">
                        Liner
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

                      <span className="text-1xl font-normal text-black">
                        Silk
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
                        Cotton Silk
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
            <hr className=" mt-5 border border-gray-200" />

            <details className="mt-5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex flex-col cursor-pointer gap-2 text-gray-900 transition">
                <div className="w-full flex justify-between items-center">
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
                </div>

                <span className="text-1xl text-black"> All </span>
              </summary>

              <div className="bg-white">
                <header className="flex flex-col mt-4 gap-4">
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
              <summary className="flex flex-col cursor-pointer gap-2 text-gray-900 transition">
                <div className="w-full flex justify-between items-center">
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
                </div>

                <span className="text-1xl text-black"> All </span>
              </summary>

              <div className="bg-white">
                <header className="flex flex-col mt-4 gap-4">
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
              <summary className="flex flex-col cursor-pointer gap-2 text-gray-900 transition">
                <div className="w-full flex justify-between items-center">
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
                </div>

                <span className="text-1xl text-black"> All </span>
              </summary>

              <div className="bg-white">
                <header className="flex flex-col mt-4 gap-4">
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

                      <span className="text-1xl font-normal text-black">
                        Silk
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
              <summary className="flex flex-col cursor-pointer gap-2 text-gray-900 transition">
                <div className="w-full flex justify-between items-center">
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
                </div>

                <span className="text-1xl text-black"> All </span>
              </summary>

              <div className="bg-white">
                <header className="flex flex-col mt-4 gap-4">
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
        )}

        <Products
          selectedSortOption={selectedSortOption}
          filters={filters}
          show={show}
        />
      </div>
    </>
  );
};

export default Sidebar;
