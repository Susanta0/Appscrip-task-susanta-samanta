// this page is client server rendering thats why i am using "use client"
"use client";
// react hook
import React, { useEffect, useState } from "react";

// next js tag
import Image from "next/image";

// Chakra Ui
import { Box, Text } from "@chakra-ui/react";

// react heart
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Link from "next/link";

const Products = ({ selectedSortOption, filters, show }) => {
  const [storeData, setStoreData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [id]: !prevLikedItems[id],
    }));
  };

  const fetchProductData = async () => {
    try {
      let data = await fetch(`https://fakestoreapi.com/products`);
      let res = await data.json();
      console.log(res);
      setStoreData(res);
      setFilteredData(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    let updatedData = [...storeData];

    if (filters.men) {
      updatedData = updatedData.filter(
        (product) => product.category === "men's clothing"
      );
    }
    if (filters.women) {
      updatedData = updatedData.filter(
        (product) => product.category === "women's clothing"
      );
    }
    if (filters.kids) {
      updatedData = updatedData.filter(
        (product) => product.category === "kids"
      );
    }

    if (selectedSortOption === "asc") {
      updatedData.sort((a, b) => b.price - a.price);
    } else if (selectedSortOption === "dec") {
      updatedData.sort((a, b) => a.price - b.price);
    }

    setFilteredData(updatedData);
  }, [filters, selectedSortOption, storeData]);

  return (
    <>
      {loading ? (
        <div className=" mt-6 px-4 pb-4 grid max-sm:grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col m-8 rounded shadow-md w-[17.4em] max-sm:w-80 animate-pulse h-96"
            >
              <div className="h-48 rounded-t bg-gray-700"></div>
              <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900">
                <div className="w-full h-6 rounded bg-gray-700"></div>
                <div className="w-full h-6 rounded bg-gray-700"></div>
                <div className="w-3/4 h-6 rounded bg-gray-700"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          
          style={show ? { padding: "0px 55px 0px 0px " } : {}}
          className={`mt-6 px-14 max-sm:px-1 pb-4 grid ${
            show ? "grid-cols-3" : "sm:grid-cols-3 lg:grid-cols-4"
          } gap-x-4 gap-y-4 max-sm:grid-cols-2`}
        >
          {filteredData.map((ele) => (
            <Box
              key={ele.id}
              maxW="sm"
              overflow="hidden"
              className="py-2 "
              boxShadow={"inner"}
              bg="white"
              height={"fit-content"}
            >
              <Image
                src={ele.image}
                alt="ele.title"
                width={150}
                height={100}
                className="m-auto h-[12em]"
              />

              <Box className="">
                <Text
                  color="black"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="lg"
                  textTransform="uppercase"
                  noOfLines={1}
                >
                  {ele.title}
                </Text>
                <div className="flex items-center justify-between">
                  <Link
                    noOfLines={1}
                    className=" text-gray-400 underline text-sm"
                    href="#"
                  >
                    Sign in {"or Create an account to see pricing"}
                  </Link>

                  <div onClick={() => toggleLike(ele.id)} className="w-fit">
                    {likedItems[ele.id] ? (
                      <AiFillHeart className="h-7 w-7 text-[#EB4C6B]" />
                    ) : (
                      <AiOutlineHeart className="h-7 w-7" />
                    )}
                  </div>
                </div>
              </Box>
            </Box>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
