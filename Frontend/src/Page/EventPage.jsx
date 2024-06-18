import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Select,
  Flex,
  useToast,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import AppNavbar from "../Components/AppNavbar";
import Footer from "../Components/Footer";

const MotionBox = motion(Box);

const EventDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state?.item;
  const toast = useToast();

  const [selectedTicketType, setSelectedTicketType] = useState(
    item?.ticketTypes[0] || null
  );
  const [ticketCount, setTicketCount] = useState(1);
  const [ticketPrice, setTicketPrice] = useState(item?.Price || 0);
  const [totalPrice, setTotalPrice] = useState(item?.Price || 0);

  useEffect(() => {
    if (item) {
      setSelectedTicketType(item.ticketTypes[0] || null);
      setTicketPrice(item.Price || 0);
      setTotalPrice(item.Price || 0);
    }
  }, [item]);

  if (!item) {
    return (
      <>
        <AppNavbar />
        <Box p={8} mt={8} bg="gray.100" minHeight="100vh">
          <MotionBox
            p={6}
            bg="blue.800"
            borderRadius="md"
            boxShadow="xl"
            textAlign="center"
            maxWidth="800px"
            mx="auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h2" size="lg" mb={4} color="blue.300">
              Event Details
            </Heading>
            <Text fontSize="xl" color="gray.200">
              No event details found.
            </Text>
          </MotionBox>
        </Box>
        <Footer />
      </>
    );
  }

  const handleBookTicket = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast({
        title: "Please log in first to book a ticket.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (!selectedTicketType) {
      toast({
        title: "Please select a ticket type",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      navigate("/checkout", { state: { title:item.title,imageUrl:item.imageUrl[0],ticketCount : ticketCount,totalPrice:totalPrice } });
    }
  };

  const handleTicketTypeChange = (event) => {
    const selectedType = event.target.value;

    if (selectedType === item.ticketTypes[0]) {
      setTicketPrice(item.Price);
    } else if (selectedType === item.ticketTypes[1]) {
      setTicketPrice(item.Price + 50);
    } else if (selectedType === item.ticketTypes[2]) {
      setTicketPrice(item.Price + 100);
    }

    setSelectedTicketType(selectedType);
    setTicketCount(1);
    setTotalPrice(ticketPrice);
  };

  const handleIncrement = () => {
    setTicketCount((prevCount) => (prevCount < 5 ? prevCount + 1 : prevCount));
  };

  const handleDecrement = () => {
    setTicketCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  useEffect(() => {
    let newTotalPrice = ticketPrice * ticketCount;
    setTotalPrice(newTotalPrice);
  }, [ticketCount, ticketPrice]);

  return (
    <>
      <AppNavbar />
      <MotionBox
        p={8}
        bg="gray.100"
        minHeight="100vh"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MotionBox
          p={6}
          bg="blue.800"
          borderRadius="md"
          boxShadow="xl"
          textAlign="center"
          maxWidth="800px"
          mx="auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Heading as="h1" size="lg" mb={4} color="#FEAEA3">
            {item.title}
          </Heading>
          <Image
            src={item.imageUrl}
            alt={item.title}
            borderRadius="md"
            mb={6}
            boxShadow="lg"
            w="100%"
          />
          <Text as="h1" fontSize="xl" mb={6} color="gray.200">
            {item.description}
          </Text>

          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Text fontSize="lg" fontWeight="bold" color="gray.200">
              Event Date: {new Date(item.eventDate).toLocaleDateString()}
            </Text>
            <Text fontSize="lg" fontWeight="bold" color="gray.200">
              Time: {item.time}
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Text fontSize="lg" fontWeight="bold" color="gray.200">
              Organizer: {item.organizer}
            </Text>
            <Text fontSize="lg" fontWeight="bold" color="gray.200">
              Category: {item.category}
            </Text>
          </Flex>
          <Box
            p={4}
            mt={8}
            borderRadius="md"
            textAlign="center"
            bgGradient="linear(to-l, blue.700, green.500)"
            color="white"
            _hover={{ bgGradient: "linear(to-l, blue.600, green.400)" }}
          >
            <Heading as="h3" size="md" mb={2}>
              Event Location
            </Heading>
            <Text fontSize="lg">{item.location}</Text>
          </Box>

          <Text fontSize="xl" fontWeight="bold" mt={8} mb={4} color="gray.200">
            Starting ticket price: ₹{ticketPrice}
          </Text>

          <Select
            placeholder="Select Ticket Type"
            mb={4}
            value={selectedTicketType}
            onChange={handleTicketTypeChange}
            bg="blue.700"
            color="gray.200"
            _hover={{ bg: "blue.600" }}
          >
            {item.ticketTypes.map((type) => (
              <option style={{ color: "black" }} key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>

          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Heading
              as="h2"
              size="lg"
              mt={2}
              mb={4}
              mr={8}
              color="gray.200"
              justifyContent="flex-start"
            >
              Total Ticket Price: ₹{totalPrice}
            </Heading>

            <HStack spacing={4} alignItems="center" mb={4} ml={2}>
              <Button
                onClick={handleDecrement}
                bg="#FEAEA3"
            color="white"
            _hover={{ bg: "#A0522D" }}
                opacity={ticketCount === 1 ? 0 : 1}
                disabled={ticketCount <= 1}
              >
                -
              </Button>

              <Text fontSize="xl" fontWeight={500} color="gray.200" mt={2.5}>
                {ticketCount}
              </Text>
              <Button
                onClick={handleIncrement}
                bg="#FEAEA3"
                color="white"
                _hover={{ bg: "#A0522D" }}
                opacity={ticketCount === 5 ? 0 : 1}
                disabled={ticketCount >= 5}
              >
                +
              </Button>
            </HStack>
          </Flex>

          <Button
            bg="#FEAEA3"
            color="white"
            _hover={{ bg: "#A0522D" }}
            onClick={handleBookTicket}
            mb={4}
            disabled={!selectedTicketType}
            _disabled={{ bg: "blue.600", cursor: "not-allowed" }}
          >
            Book Ticket
          </Button>
        </MotionBox>
      </MotionBox>
      <Footer />
    </>
  );
};

export default EventDetailsPage;
