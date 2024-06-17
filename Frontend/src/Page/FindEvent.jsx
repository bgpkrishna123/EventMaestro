import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Box,
  Heading,
  Image,
  Text,
  Button,
  Skeleton,
  SkeletonText,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import url from "../Components/vars";
import AppNavbar from "../Components/AppNavbar";

const MotionBox = motion(Box);

const FindEvent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/events`);
        setData(response.data.events);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDetails = (item) => {
    navigate("/eventDetails", { state: { item: item } });
  };

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <AppNavbar />
      <Box p={8}>
        <Heading as="h1" mb={8} textAlign="center">
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
          {isLoading ? (
            Array.from({ length: 12 }).map((_, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md" className="shadow-lg">
                <Skeleton height="200px" borderRadius="md" mb={4} />
                <SkeletonText noOfLines={4} spacing="4" />
              </Box>
            ))
          ) : (
            paginatedData.map((item, index) => (
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
        <HStack justifyContent="center" mt={8}>
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            style={{ opacity: currentPage === 1 ? 0 : 1 }}
          >
            Previous
          </Button>
          <Button
            bg="#FEAEA3"
            color="white"
          >
            {currentPage}
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={currentPage * itemsPerPage >= data.length}
            style={{ opacity: currentPage * itemsPerPage >= data.length ? 0 : 1 }}
          >
            Next
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default FindEvent;
