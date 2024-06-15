import React, { useState } from "react";
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
} from "@chakra-ui/react";
import AppNavbar from "../Components/AppNavbar";
import Footer from "../Components/Footer";

const EventDetailsPage = () => {
 const navigate = useNavigate(); 
  const location = useLocation();
  const item = location.state?.item;
  const toast = useToast();
  const [selectedTicketType, setSelectedTicketType] = useState(null);

  if (!item) {
    return (
      <>
        <AppNavbar />
        <Box p={8} bg="gray.100" minHeight="100vh">
          <Box
            p={6}
            bg="blue.800"
            borderRadius="md"
            boxShadow="xl"
            textAlign="center"
            maxWidth="800px"
            mx="auto"
          >
            <Heading as="h2" size="lg" mb={4} color="blue.300">
              Event Details
            </Heading>
            <Text fontSize="xl" color="gray.200">
              No event details found.
            </Text>
          </Box>
        </Box>
        <Footer />
      </>
    );
  }

  const handleBookTicket = () => {
    if (!selectedTicketType) {
      toast({
        title: "Please select a ticket type",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
     
    } else {
      toast({
        title: "Ticket Booked Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    }
  };

  const handleTicketTypeChange = (event) => {
    setSelectedTicketType(event.target.value);
  };

  return (
    <>
      <AppNavbar />
      <Box p={8} bg="gray.100" minHeight="100vh">
        <Box
          p={6}
          bg="blue.800"
          borderRadius="md"
          boxShadow="xl"
          textAlign="center"
          maxWidth="800px"
          mx="auto"
        >
          <Heading as="h2" size="lg" mb={4} color="blue.300">
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
          <Text fontSize="xl" mb={6} color="gray.200">
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
            Starting ticket price: ₹{item.Price}
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
            {item.ticketTypes.map((ticketType, index) => (
              <option key={index} value={ticketType} style={{ color: "black" }}>
                {ticketType}
              </option>
            ))}
          </Select>

          <Button
            bg="blue.400"
            color="white"
            _hover={{ bg: "blue.500" }}
            onClick={handleBookTicket}
            mb={4}
            disabled={!selectedTicketType}
            _disabled={{ bg: "blue.600", cursor: "not-allowed" }}
          >
            Book Ticket
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default EventDetailsPage;
