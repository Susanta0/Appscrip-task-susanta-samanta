// react icons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "./Recommended.css";
const Recommended = ({ handleShow, show, setSelectedSortOption }) => {
  const handleSortChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

  return (
    <>
      <div className="r-con">
        <hr />

        <div className="r-conChild ">
          <div className="r-conChild1">
            <p className="r-conChild2">20 ITEMS</p>
            <p className="r-conChild3">FILTER</p>
            <div className="show_con">
              {!show ? (
                <IoIosArrowForward className="show_b" />
              ) : (
                <IoIosArrowBack className="show_b" />
              )}
              <button className="button_show" onClick={handleShow}>
                {!show ? "SHOW FILTER" : "HIDE FILTER"}
              </button>
            </div>
          </div>
          <div>
            <select
              name=""
              id=""
              className="select"
              onChange={handleSortChange}
            >
              <option className="option" value="recommended">
                RECOMMENDED
              </option>
              <option className="option" value="newestfirst">
                NEWEST FIRST
              </option>
              <option className="option" value="popular">
                POPULAR
              </option>
              <option className="option" value="asc">
                PRICE : HIGH TO LOW
              </option>
              <option className="option" value="dec">
                PRICE : LOW TO HIGH
              </option>
            </select>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
};

export default Recommended;
