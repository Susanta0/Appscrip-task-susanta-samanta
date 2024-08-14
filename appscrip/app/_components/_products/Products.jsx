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

import "./Products.css"

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
        <div className="product-container">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="sklt"
            >
              <div></div>
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        
        <div
          
          style={show ? { padding: "0px 55px 0px 0px " } : {}}
        id="card2"  className={`card-cont ${show ? 'grid-cols-3' : 'grid-cols-4'}`}
        >
          {filteredData.map((ele) => (
            <Box

              key={ele.id}
              maxW="sm"
              overflow="hidden"
              className="box"
              boxShadow={"inner"}
              bg="white"
              height={"fit-content"}
            >
              <Image
                src={ele.image}
                alt="ele.title"
                width={150}
                height={100}
                className="image"
              />

              <Box>
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
                <div className="text-con">
                  <Link
                    noOfLines={1}
                    className="text"
                    href="#"
                  >
                    Sign in {"or Create an account to see pricing"}
                  </Link>

                  <div onClick={() => toggleLike(ele.id)} className="icons-con">
                    {likedItems[ele.id] ? (
                      <AiFillHeart className="Fheart" />
                    ) : (
                      <AiOutlineHeart className="Lheart" />
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
