import React, { useState, useEffect } from 'react';
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"; 
import v3_f1 from '../assets/v3_f1.jpg';
import v3_f2 from '../assets/v3_f2.jpg';
import v3_f3 from '../assets/v3_f3.jpg';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [v3_f1, v3_f2, v3_f3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <Box className="banner" position='relative' overflow='hidden'>
      <Image
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        w='100%'
        maxH='450px'
        objectFit='cover'
      />
      <Box
        position='absolute'
        top='50%'
        left='0'
        transform='translateY(100%)'
        zIndex='10' 
        width='100%' 
        overflow='hidden' 
      >
        <motion.div
          className="col-md-6 col-xs-12 homepage_bannerfrm"
          textAlign='center'
          color='white'
         
          initial={{ x: '-100%' }}
          animate={{ x: '100%', transition: { duration: 4, repeat: Infinity, repeatType: "reverse" } }} 
        >
          <Text as="h2" color="white" bg='rgba(0, 0, 0, 0.5)' pt={2} pb={2} textAlign='center'>Best Event Planner in India</Text>
        </motion.div>
      </Box>
      <Flex
        position='absolute'
        bottom='10px'
        left='50%'
        transform='translateX(-50%)'
        alignItems='center'
        zIndex='10' 
      >
        {images.map((image, index) => (
          <Box
            key={index}
            w='10px'
            h='10px'
            borderRadius='50%'
            backgroundColor={currentImageIndex === index ? 'pink' : 'lightgray'}
            margin='0 5px'
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Carousel;
