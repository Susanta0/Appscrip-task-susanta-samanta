// this page is client server rendering thats why i am using "use client"
"use client";

// react hook
import React, { useEffect, useState } from "react";
// next js tag
import Image from "next/image";

// react icons
import { Box, Badge, Button } from "@chakra-ui/react";

// icons logo
import logo2 from "/public/system-regular-146-label.gif";
import logo3 from "/public/system-regular-28-info.gif";

const Products = ({ selectedSortOption, filters }) => {
  const [storeData, setStoreData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

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
           <div key={index} className="flex flex-col m-8 rounded shadow-md w-60 max-sm:w-80 animate-pulse h-96">
               <div className="h-48 rounded-t bg-gray-700"></div>
               <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900">
                   <div className="w-full h-6 rounded bg-gray-700"></div>
                   <div className="w-full h-6 rounded bg-gray-700"></div>
                   <div className="w-3/4 h-6 rounded bg-gray-700"></div>
               </div>
           </div>
       ))}
   </div>
    ):(
      <div className=" mt-6 px-4 pb-4 grid max-sm:grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {filteredData.map((ele) => (
          <Box
            key={ele.id}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            className="py-2 "
            boxShadow="outline"
            rounded="md"
            bg="white"
            height={"fit-content"}
          >
            <Image
              src={ele.image}
              alt="ele.title"
              width={150}
              height={100}
              className="m-auto border h-[12em]"
            />

            <Box className="px-2">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                  noOfLines={1}
                >
                  {ele.title}
                </Box>
              </Box>

              <Box className="flex gap-5 mt-2" alignItems="center">
                <Image
                  className=""
                  height={25}
                  width={25}
                  src={logo3}
                  alt="logo"
                />
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {ele.description}
                </Box>
              </Box>

              <Box className="flex gap-5 mt-2" alignItems="center">
                <Image
                  className=""
                  width={25}
                  height={25}
                  src={logo2}
                  alt="logo"
                />
                <Box
                  as="span"
                  color="gray.600"
                  fontSize="md"
                  className="font-bold"
                >
                  {ele.price}
                </Box>
              </Box>
            </Box>
            <Box className="flex justify-between px-2 max-sm:px-0 max-sm:space-x-2">
              <Button
              fontSize={13}
                color="white"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                _hover={{
                  bgGradient: "linear(to-r, red.500, yellow.500)",
                }}
              >
                View Details
              </Button>
              <Button
              fontSize={13}
              >Add To Cart</Button>
            </Box>
          </Box>
        ))}
      </div> 
    )}
     
    </>
  );
};

export default Products;
