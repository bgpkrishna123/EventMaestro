import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Payment.css';
import chip from "../assets/chip.png";
import visa from "../assets/visa.png";
import { useToast } from '@chakra-ui/react';

function Payment() {
  const toast = useToast();

  const [cardNumber, setCardNumber] = useState("################");
  const [cardHolder, setCardHolder] = useState("full name");
  const [expMonth, setExpMonth] = useState("mm");
  const [expYear, setExpYear] = useState("yy");
  const [cvv, setCvv] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardHolderChange = (event) => {
    setCardHolder(event.target.value);
  };

  const handleMonthChange = (event) => {
    setExpMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setExpYear(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleCvvHover = () => {
    setIsFlipped(true);
  };

  const handleCvvLeave = () => {
    setIsFlipped(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      cardNumber.trim() === '' ||
      cardHolder.trim() === '' ||
      expMonth === 'mm' ||
      expYear === 'yy' ||
      cvv.trim() === ''
    ) {
      toast({
        title: 'Oops!! ☹',
        description: "Please fill the details first.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    } else {
      setTimeout(() => {
        const examplePromise = new Promise((resolve) => {
          setTimeout(() => resolve(200), 2000);
        });

        toast.promise(examplePromise, {
          success: {
            title: 'Payment successful 🤗',
            description: 'Thank you so much, Have a nice weekend!',
          },
          error: {
            title: 'Promise rejected',
            description: 'Something went wrong',
          },
          loading: {
            title: 'Payment is in progress',
            description: 'Please wait.',
          },
        });
      }, 500);

      setTimeout(() => {
        navigate("/");
      }, 4000);
    }
  };

  return (
    <div className="payemnt-container">
      <div className="container">
        <div id="cardMainContainer">
          <div className={`card-container ${isFlipped ? "flipped" : ""}`}>
            <div className="front">
              <div className="image">
                <img style={{ color: "white" }} src={chip} alt="chip" />
                <img style={{ color: "white" }} src={visa} alt="visa" />
              </div>
              <div className="card-number-box" style={{ color: "white" }}>
                {cardNumber}
              </div>
              <div className="flexbox">
                <div className="box">
                  <span style={{ color: "white" }}>card holder :</span>
                  <div className="card-holder-name" style={{ color: "white" }}>
                    {cardHolder}
                  </div>
                </div>
                <div className="box">
                  <span style={{ color: "white" }}>expires :</span>
                  <div className="expiration">
                    <span className="exp-month" style={{ color: "white" }}>
                      {expMonth} \ {expYear}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="back">
              <div className="stripe"></div>
              <div className="box">
                <span>cvv</span>
                <div className="cvv-box">{cvv}</div>
                <img style={{ color: "white" }} src={visa} alt="visa" />
              </div>
            </div>
          </div>
        </div>

        <form id="formContainer" onSubmit={handleSubmit}>
          <div className="inputBox">
            <span>card number</span>
            <input
              type="text"
              maxLength={16}
              className="card-number-input"
              onChange={handleCardNumberChange}
            />
          </div>
          <div className="inputBox">
            <span>card holder</span>
            <input
              type="text"
              className="card-holder-input"
              onChange={handleCardHolderChange}
            />
          </div>
          <div className="flexbox">
            <div className="inputBox">
              <span>expiration mm</span>
              <select className="month-input" onChange={handleMonthChange}>
                <option value="month" selected disabled>
                  month
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="inputBox">
              <span>expiration yy</span>
              <select className="year-input" onChange={handleYearChange}>
                <option value="year" selected disabled>
                  year
                </option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div className="inputBox">
              <span>cvv</span>
              <input
                type="text"
                maxLength={4}
                className="cvv-input"
                onChange={handleCvvChange}
                onMouseEnter={handleCvvHover}
                onMouseLeave={handleCvvLeave}
              />
            </div>
          </div>
          <input type="submit" value="submit" className="submit-btn" />
        </form>
      </div>
    </div>
  );
}

export default Payment;
