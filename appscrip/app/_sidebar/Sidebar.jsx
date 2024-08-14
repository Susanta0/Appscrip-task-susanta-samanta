"use client";
import React, { useState } from "react";
import "./Sidebar.css";

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

      <div className="container2 ">
        {show && (
          <aside className="aside">
            <div className="chil01">
              <input type="checkbox" name="" id="" />
              <p>CUSTOMIZBLE</p>
            </div>
            <br />
            <hr />
            <br />

            <details className="details">
              <summary className="summary">
                <div>
                  <span className="span1"> IDEAL FOR </span>

                  <span className="span2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="arrow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>

                <span className="all"> All </span>
              </summary>

              <div className="listMain">
                <header>
                  <button
                    type="button"
                    onClick={() => handleFilterChange("all")}
                  >
                    Unselect all
                  </button>
                </header>

                <ul>
                  <li>
                    <label htmlFor="FilterMen">
                      <input
                        type="checkbox"
                        id="FilterMen"
                        checked={filters.men}
                        onChange={() => handleFilterChange("men")}
                      />

                      <span> Men </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterWomen">
                      <input
                        type="checkbox"
                        id="FilterWomen"
                        checked={filters.women}
                        onChange={() => handleFilterChange("women")}
                      />

                      <span> Women </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterKids">
                      <input
                        type="checkbox"
                        id="FilterKids"
                        checked={filters.kids}
                        onChange={() => handleFilterChange("kids")}
                      />

                      <span> Baby & Kids </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
            <hr className=" hr2" />

            <details className="details">
              <summary className="summary">
                <div>
                  <span className="span1"> IDEAL FOR </span>

                  <span className="span2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="arrow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>

                <span className="all"> All </span>
              </summary>

              <div className="listMain">
                <header>
                  <button type="button">Unselect all</button>
                </header>

                <ul>
                  <li>
                    <label htmlFor="FilterRed">
                      <input type="checkbox" id="FilterRed" />

                      <span> Rainy Season </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterBlue">
                      <input type="checkbox" id="FilterBlue" />

                      <span>Casual</span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterGreen">
                      <input type="checkbox" id="FilterGreen" />

                      <span>Wedding</span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterGreen">
                      <input type="checkbox" id="FilterGreen" />

                      <span>Party</span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterGreen">
                      <input type="checkbox" id="FilterGreen" />

                      <span>Regular</span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
            <hr className="hr2" />

            <details className="details">
              <summary className="summary">
                <div>
                  <span className="span1"> WORK </span>

                  <span className="span2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="arrow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>

                <span className="all"> All </span>
              </summary>

              <div className="listMain">
                <header>
                  <button type="button">Unselect all</button>
                </header>

                <ul>
                  <li>
                    <label htmlFor="FilterRed">
                      <input type="checkbox" id="FilterRed" />

                      <span> Frech Knot </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterBlue">
                      <input type="checkbox" id="FilterBlue" />

                      <span>Zardosi</span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterGreen">
                      <input type="checkbox" id="FilterGreen" />

                      <span>Fancy</span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterGreen">
                      <input type="checkbox" id="FilterGreen" />

                      <span>Embroidery</span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
            <hr className="hr2" />

            <details className="details">
              <summary className="summary">
                <div>
                  <span className="span1"> FABRIC </span>

                  <span className="span2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                     className="arrow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>

                <span className="all"> All </span>
              </summary>

              <div className="listMain">
                <header>
                  <button type="button">Unselect all</button>
                </header>

                <ul>
                  <li>
                    <label htmlFor="FilterRed">
                      <input type="checkbox" id="FilterRed" />

                      <span> Muslin </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterBlue">
                      <input type="checkbox" id="FilterBlue" />

                      <span>Satin Blend</span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterGreen">
                      <input type="checkbox" id="FilterGreen" />

                      <span>Satin</span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterGreen">
                      <input type="checkbox" id="FilterGreen" />

                      <span>Tericoat</span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterGreen">
                      <input type="checkbox" id="FilterGreen" />

                      <span>Liner</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="FilterGreen">
                      <input type="checkbox" id="FilterGreen" />

                      <span>Raw Silk</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="FilterGreen">
                      <input type="checkbox" id="FilterGreen" />

                      <span>Cotton</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="FilterGreen">
                      <input type="checkbox" id="FilterGreen" />

                      <span>Silk</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="FilterGreen">
                      <input type="checkbox" id="FilterGreen" />

                      <span>Cotton Silk</span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
            <hr className="hr2" />

            <details className="details">
              <summary className="summary">
                <div>
                  <span className="span1"> SEGMENT </span>

                  <span className="span2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="arrow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>

                <span className="all"> All </span>
              </summary>

              <div className="listMain">
                <header>
                  <button type="button">Unselect all</button>
                </header>

                <ul>
                  <li>
                    <label htmlFor="FilterRed">
                      <input type="checkbox" id="FilterRed" />

                      <span> Velvet </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterBlue">
                      <input type="checkbox" id="FilterBlue" />

                      <span>Zardosi</span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterGreen">
                      <input type="checkbox" id="FilterGreen" />

                      <span>Cotton</span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterGreen">
                      <input type="checkbox" id="FilterGreen" />

                      <span>Leather</span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
            <hr className="hr2" />

            <details className="details">
              <summary className="summary">
                <div>
                  <span className="span1"> SUITABLE FOR </span>

                  <span className="span2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="arrow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>

                <span className="all"> All </span>
              </summary>

              <div className="listMain">
                <header>
                  <button type="button">Unselect all</button>
                </header>

                <ul>
                  <li>
                    <label htmlFor="FilterRed">
                      <input type="checkbox" id="FilterRed" />

                      <span> Half Sleeve </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterBlue">
                      <input type="checkbox" id="FilterBlue" />

                      <span>Cap Sleeve</span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
            <hr className="hr2" />

            <details className="details">
              <summary className="summary">
                <div>
                  <span className="span1"> RAW MATERIALS </span>

                  <span className="span2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="arrow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>

                <span className="all"> All </span>
              </summary>

              <div className="listMain">
                <header>
                  <button type="button">Unselect all</button>
                </header>

                <ul>
                  <li>
                    <label htmlFor="FilterRed">
                      <input type="checkbox" id="FilterRed" />

                      <span> Wool </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterBlue">
                      <input type="checkbox" id="FilterBlue" />

                      <span>Silk</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="FilterRed">
                      <input type="checkbox" id="FilterRed" />

                      <span> Leather </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterBlue">
                      <input type="checkbox" id="FilterBlue" />

                      <span>Cotton</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="FilterBlue">
                      <input type="checkbox" id="FilterBlue" />

                      <span>Cellulosic Fibers</span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
            <hr className="hr2" />

            <details className="details">
              <summary className="summary">
                <div>
                  <span className="span1"> PATTERN </span>

                  <span className="span2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="arrow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>

                <span className="all"> All </span>
              </summary>

              <div className="listMain">
                <header>
                  <button type="button">Unselect all</button>
                </header>

                <ul>
                  <li>
                    <label htmlFor="FilterRed">
                      <input type="checkbox" id="FilterRed" />

                      <span> Windowpane </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterBlue">
                      <input type="checkbox" id="FilterBlue" />

                      <span>Pinstripes</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="FilterRed">
                      <input type="checkbox" id="FilterRed" />

                      <span> Solid </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterBlue">
                      <input type="checkbox" id="FilterBlue" />

                      <span>Chalk Stripes</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="FilterBlue">
                      <input type="checkbox" id="FilterBlue" />

                      <span>Slim Fit</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="FilterBlue">
                      <input type="checkbox" id="FilterBlue" />

                      <span>Tartan</span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
            <hr className="hr2" />
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
