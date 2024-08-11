'use client'

import React, { useEffect, useState } from 'react'
import "./Products.css"
// next js tag
import Image from 'next/image'

// react icons
import { Box, Badge, Button } from "@chakra-ui/react";
// icons logo

import logo2 from "/public/system-regular-146-label.gif";
import logo3 from "/public/system-regular-28-info.gif";
const Products = ({selectedSortOption}) => {
  const [storeData, setStoreData]=useState([])
  const [originalData, setOriginalData] = useState([]);

  const fetchProductData = async () => {
      try {
        let data= await fetch(`https://fakestoreapi.com/products`)
        let res= await data.json()
        console.log(res);
        setStoreData(res)
        setOriginalData(res) 
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(()=> {
    fetchProductData()
  },[])
  
  useEffect(() => {
    if (selectedSortOption === 'recommended') {
      setStoreData(originalData);
    } else if (selectedSortOption) {
      let sortedData = [...storeData];
      if (selectedSortOption === 'asc') {
        sortedData.sort((a, b) => b.price - a.price);
      } else if (selectedSortOption === 'dec') {
        sortedData.sort((a, b) => a.price - b.price);
      }
      setStoreData(sortedData);
    }
  }, [selectedSortOption, originalData]);



  return (
    <>
    <div className='overflow-y-auto' style={{ maxHeight: 'calc(120vh - 200px)' }}>
 <div className=" mt-6 px-4 pb-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {storeData.map((ele)=>(
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
    >
      <Image src={ele.image} alt="ele.title" width={150} height={100}  className="m-auto border h-[12em]" />

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
          <Image className="" height={25} width={25} src={logo3} alt="logo" />
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
          <Image className="" width={25} src={logo2} alt="logo" />
          <Box as="span" color="gray.600" fontSize="md" className="font-bold">
            {ele.price}
          </Box>
        </Box>
      </Box>
      <Box className=" flex justify-between px-2">
        <Button
        color="white"
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
          // onClick={() => navigate(`/products/${id}`)}
        >
          View Details
        </Button>
        <Button className="">Add To Cart</Button>
      </Box>
    </Box>
        ))}
       


      </div>
    </div>
    
   
    </>
  )
}

export default Products


// import React from "react";
// import { Box, Badge, Button } from "@chakra-ui/react";
// import logo from "/public/wired-gradient-680-it-developer.gif";
// import logo2 from "/public/system-regular-146-label.gif";
// import logo3 from "/public/system-regular-28-info.gif";
// import { StarIcon } from "@chakra-ui/icons";
// import Image from "next/image";
// // import { useNavigate } from "react-router-dom";
//  const ProductCard = ({
//   id,
//   image,
//   title,
//   description,
//   price,
//   rating,
// }) => {
//   const numFilledStars = rating && rating.rate;
//   const numReviews = rating && rating.count;

//   // const navigate = useNavigate();

//   return (
//     <Box
//       maxW="sm"
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden"
//       className="py-2 "
//       boxShadow="outline"
//       rounded="md"
//       bg="white"
//     >
//       <Image src={image} alt=""  className="m-auto" />

//       <Box className="px-2">
//         <Box display="flex" alignItems="baseline">
//           <Badge borderRadius="full" px="2" colorScheme="teal">
//             New
//           </Badge>
//           <Box
//             color="gray.500"
//             fontWeight="semibold"
//             letterSpacing="wide"
//             fontSize="xs"
//             textTransform="uppercase"
//             ml="2"
//             noOfLines={1}
//           >
//             {title}
//           </Box>
//         </Box>

//         <Box className="flex gap-5 mt-2" alignItems="center">
//           <Image className="" height={6} width={6} src={logo3} alt="logo" />
//           <Box
//             mt="1"
//             fontWeight="semibold"
//             as="h4"
//             lineHeight="tight"
//             noOfLines={1}
//           >
//             {description}
//           </Box>
//         </Box>

//         <Box className="flex gap-5 mt-2" alignItems="center">
//           <Image className="" width={8} src={logo2} alt="logo" />
//           <Box as="span" color="gray.600" fontSize="md" className="font-bold">
//             {price}
//           </Box>
//         </Box>
//         <Box className="flex" alignItems="center">
//           {Array(5)
//             .fill("")
//             .map((_, i) => (
//               <StarIcon
//                 key={i}
//                 color={i < numFilledStars ? "teal.500" : "gray.300"}
//               />
//             ))}
//           <Box className="flex justify-end w-[100%]" alignItems="center">
//             <Image className="" width={10} src={logo} alt="logo" />
//             <Box as="span" ml="2" color="gray.600" fontSize="sm">
//               {numReviews}{" "}
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//       <Box className=" flex justify-between px-2">
//         <Button
//         color="white"
//           bgGradient='linear(to-l, #7928CA, #FF0080)'
//           _hover={{
//             bgGradient: "linear(to-r, red.500, yellow.500)",
//           }}
//           // onClick={() => navigate(`/products/${id}`)}
//         >
//           View Details
//         </Button>
//         <Button className="">Add To Cart</Button>
//       </Box>
//     </Box>
//   );
// };

// export default ProductCard