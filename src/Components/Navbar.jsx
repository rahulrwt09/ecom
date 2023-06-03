// import { Link } from "react-router-dom" 
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//    <Link to="/">Home</Link>
//    <Link to="/add">Add Product</Link>
//    <Link to="/login">Login</Link>
//     </div>
//   )
// }

// export default Navbar

import { Link } from "react-router-dom";
import { Box, Flex, Heading, Link as ChakraLink } from "@chakra-ui/react";
const Navbar = ({heading= "Product List"}) => {
  return (
    <Box bg="blue.500" p={4} color="white" style={{  
    
        top: '0',
        position:'fixed',
        width:'100%',
        
        }}>
      <Flex align="center">
        <Heading as="h1" size="md" mr={4}>
        {heading}
        </Heading>
        <Link to="/" style={{ textDecoration: "none", marginRight: "16px" }}>
          Home
        </Link>
        <Link to="/add" style={{ textDecoration: "none", marginRight: "16px" }}>
          Add Product
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          Login
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;

