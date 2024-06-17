import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image, Badge, Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import "../styles/Checkout.css";
// import axios from "axios";

const data = {
    Price: 75,
    category: "Fashion",
    description: "Experience the latest trends and designs on the runway!",
    eventDate: "2024-04-15T19:00:00.000Z",
    eventPlaner: "666b05f5ecb6bf71e0fa669b",
    imageUrl: ['data:image/jpeg;base64,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', 'https://plus.unsplash.com/premium_photo-1661315459…jA3fDB8MHxzZWFyY2h8OXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1501281668745-f7…jA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1519750157634-b6…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    location: "Fashion Center, Paris",
    mode: "Offline",
    organizer: "fashionistas",
    ticketTypes: ['VIP', 'General'],
    time: "19:00 - 21:00",
    title: "Spring Fashion Show",
    _id: "666e95c6e53100b27276c33d"
}

export function Checkout() {
    const navigate = useNavigate();

    const checkoutHandle = () => {
        setTimeout(() => {
            navigate("/payment");
        }, 1000);
    };

    return (
        <>
            {/* checkout here */}

            <div id="checkout-component">
                <div id="orderSummary">
                    <h1>
                        <strong style={{ textDecoration: "underline" }}>
                           Event Booking Details :-
                        </strong>
                        <span id="totalitem"></span>
                    </h1>
                    <Box
                        display="grid"
                        gridTemplateColumns="40% 1fr"
                        w="auto"
                        borderRadius="lg"
                        overflow="hidden"
                    >
                        <Image
                            borderRadius="50%"
                            marginTop="1px"
                            p="2px"
                            h="180px"
                            w="180px"
                            src={data.imageUrl[0]}
                            alt={data.title}
                        />
                        <Box p="1px">
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
                                >
                                    {data.title} beds &bull; {data.title} baths
                                </Box>
                            </Box>
                            <Box
                                w="100%"
                                mt="1"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                noOfLines={1}
                            >
                                {data.title}
                            </Box>
                            <Box>
                                ₹
                                {data.Price}
                            </Box>
                            <Box display="flex" mt="2" alignItems="center">
                                {Array(5)
                                    .fill("")
                                    .map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            color={data.title ? "teal.500" : "gray.300"}
                                        />
                                    ))}
                                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                                    99 reviews
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <hr />

                    <div className="price-details">
                        <p className="gray">Ticket Price</p>
                        <p id="totalmrp">₹{data.Price} /person</p>
                    </div>
                    <div className="price-details">
                        <p className="gray">Total Tickets</p>
                        <p className="payday">{data.Price} day</p>
                    </div>
                    <div className="price-details">
                        <p className="gray">Parking charges</p>
                        <p className="payday">Free</p>
                    </div>
                    <div className="price-details">
                        <p className="gray">Discounts</p>
                        <p id="totaldiscount" className="green">
                            - ₹0
                        </p>
                    </div>

                    <hr />

                    <div className="price-details">
                        <strong>
                            <h1>Payable Amount</h1>
                        </strong>
                        <strong>
                            <h1 id="paytm">₹ {data.Price}</h1>
                        </strong>
                    </div>

                    <hr />
                    <button id="submit-form" onClick={checkoutHandle}>
                        confirm for Payment
                    </button>
                </div>
            </div>
        </>
    );
}