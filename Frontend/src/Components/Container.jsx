import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Box, Heading, Image, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import url from "./vars";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const Container = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/events`);
        setData(response.data.events);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDetails = (item) => {
    navigate("/eventDetails", { state: { item: item } });
  };

  return (
    <Box p={8}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={8}
      >
        {data.map((item, index) => (
          <MotionBox
            key={index}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            textAlign="center"
            style={{ maxWidth: "100%" }}
            position="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={item.imageUrl[0]}
              alt={item.title}
              borderRadius="md"
              mb={4}
              w="100%"
            />
            <Box textAlign="left">
              <Heading as="h2" size="md" mb={2}>
                {item.title}
              </Heading>
              <Text mb={4}>{item.description}</Text>
              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Starting ticket with: ₹{item.Price}
              </Text>
              <Button
                bg="rgb(81, 118, 147)"
                color="white"
                _hover={{ bg: "rgba(81, 118, 147, 0.8)" }}
                position="absolute"
                bottom={4}
                right={4}
                onClick={() => handleDetails(item)}
              >
                Details
              </Button>
            </Box>
          </MotionBox>
        ))}
      </Grid>
    </Box>
  );
};

export default Container;
