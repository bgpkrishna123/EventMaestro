import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image, Badge, Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import "../Styles/Checkout.css";

export function Checkout() {
  const [dataa, setData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { title, imageUrl, ticketCount, totalPrice } = location.state || {};

    if (title && imageUrl && ticketCount && totalPrice) {
      setData({
        title: title,
        imageUrl: imageUrl,
        ticketCount: ticketCount,
        totalPrice: totalPrice,
      });
    }
  }, [location.state]);

  const checkoutHandle = () => {
    setTimeout(() => {
      navigate("/payment");
    }, 1000);
  };

  if (!dataa) {
    return <p>Loading...</p>;
  }

  return (
    <>
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
              src={dataa.imageUrl}
              alt={dataa.title}
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
                  {dataa.title} @ Event &bull; {dataa.title} ****
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
                {dataa.title}
              </Box>
              <Box>₹ {dataa.totalPrice}</Box>
              <Box display="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={dataa.title ? "teal.500" : "gray.300"}
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
            <p id="totalmrp">₹ {dataa.totalPrice} /person</p>
          </div>
          <div className="price-details">
            <p className="gray">Total Tickets</p>
            <p className="payday">{dataa.ticketCount} day</p>
          </div>
          <div className="price-details">
            <p className="gray">Parking charges</p>
            <p className="payday">Free</p>
          </div>
          <div className="price-details">
            <p className="gray">Discounts</p>
            <p id="totaldiscount" className="green">
              - ₹ 0
            </p>
          </div>

          <hr />

          <div className="price-details">
            <strong>
              <h1>Payable Amount</h1>
            </strong>
            <strong>
              <h1 id="paytm">₹ {dataa.totalPrice}</h1>
            </strong>
          </div>

          <hr />
          <button id="submit-form" onClick={checkoutHandle}>
            Confirm for Payment
          </button>
        </div>
      </div>
    </>
  );
}
