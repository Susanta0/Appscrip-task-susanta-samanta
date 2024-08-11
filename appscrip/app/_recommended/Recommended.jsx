// react icons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Recommended = ({ handleShow, show, setSelectedSortOption }) => {
  
  const handleSortChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

  return (
    <>
      <div className="px-16 max-sm:px-0">
        <hr />

        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-20 h-24 max-sm:h-8">
            <p className="font-bold text-black text-lg max-sm:hidden">
              20 ITEMS
            </p>
            <p className="font-bold text-black hidden text-lg max-sm:flex max-sm:flex-shrink max-sm:ml-6">
              FILTER
            </p>
            <div className="w-fit flex items-center gap-2 max-sm:hidden">
              {!show ? (
                <IoIosArrowForward className="text-gray-400" />
              ) : (
                <IoIosArrowBack className="text-gray-400" />
              )}
              <button className="underline text-gray-400" onClick={handleShow}>
                {!show ? "SHOW FILTER" : "HIDE FILTER"}
              </button>
            </div>
          </div>
          <div className="">
            <select
              name=""
              id=""
              className="font-bold text-lg max-sm:mr-6"
              onChange={handleSortChange}
            >
              <option
                className="font-normal hover:bg-white"
                value="recommended"
              >
                RECOMMENDED
              </option>
              <option
                className="font-normal hover:bg-white"
                value="newestfirst"
              >
                NEWEST FIRST
              </option>
              <option className="font-normal hover:bg-white" value="popular">
                POPULAR
              </option>
              <option className="font-normal hover:bg-white" value="asc">
                PRICE : HIGH TO LOW
              </option>
              <option className="font-normal hover:bg-white" value="dec">
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
