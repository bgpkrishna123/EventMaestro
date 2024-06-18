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
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import url from "../Components/vars";
import AppNavbar from "../Components/AppNavbar";

const MotionBox = motion(Box);

const FindEvent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const itemsPerPage = 12;
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/events`);
      setSearchResults(response.data.events);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${url}/events/search?title=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching events:", error);
    }
  };

  const handleDetails = (item) => {
    navigate("/eventDetails", { state: { item: item } });
  };

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < searchResults.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = searchResults.slice(startIndex, startIndex + itemsPerPage);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    handleSearch();
  };

  return (
    <>
      <AppNavbar />
      <Box p={8}>
        <Heading as="h1" mb={8} textAlign="center">
          Explore and Book Events
        </Heading>
        <Box display="flex" justifyContent="center" mb={4}>
          <InputGroup width="50%">
            <Input
              placeholder="Search events by title..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <InputRightElement>
              <Button
                bg="transparent"
                onClick={handleSearchButtonClick}
                _hover={{ bg: "transparent" }}
              >
                <SearchIcon />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
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
                position="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                pb={12} // Added padding to the bottom to make space for the button
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
                </Box>
                <Button
                  bg="#FEAEA3"
                  color="white"
                  _hover={{ bg: "#A0522D" }}
                  position="absolute"
                  bottom={4}
                  left="50%"
                  transform="translateX(-50%)"
                  width="calc(100% - 16px)" // Adjust width to fit within the container
                  margin="0 8px"
                  onClick={() => handleDetails(item)}
                >
                  Details
                </Button>
              </MotionBox>
            ))
          )}
        </Grid>
        <HStack justifyContent="center" mt={8}>
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
          >
            Previous
          </Button>
          <Button
            bg="#FEAEA3"
            color="white"
            _hover={{ bg: "#A0522D" }}
          >
            {currentPage}
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={currentPage * itemsPerPage >= searchResults.length}
            style={{ opacity: currentPage * itemsPerPage >= searchResults.length ? 0.5 : 1 }}
          >
            Next
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default FindEvent;
