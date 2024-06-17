import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Box,
  Heading,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import url from "../Components/vars";
import AppNavbar from "../Components/AppNavbar";
import Footer from "./Footer";

const MotionBox = motion(Box);

const BookedEvents = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      console.error("User not logged in");
      return;
    }
  
    try {
      const response = await axios.get(`${url}/events/getEventsBooked`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setData(response.data.events);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const handleDetails = (item) => {
    navigate("/eventDetails", { state: { item: item } });
  };

  return (
    <>
      <AppNavbar />
      <Box p={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>
          Event Tickets
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={8}
        >
          {data.length === 0 ? (
            <Box w="100%" textAlign="center">
              <Text fontSize="2xl" fontWeight="bold">No Ticket Found</Text>
            </Box>
          ) : (
            data.map((item, index) => (
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
                    bg="#FEAEA3"
                    color="white"
                    _hover={{ bg: "#A0522D" }}
                    position="absolute"
                    bottom={4}
                    right={4}
                    onClick={() => handleDetails(item)}
                  >
                    Details
                  </Button>
                </Box>
              </MotionBox>
            ))
          )}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default BookedEvents;
