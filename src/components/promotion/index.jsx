import React, { useEffect, useState } from "react";
import { PromotionsContainer, PromotionsText } from "../../styles/Promotions";
import { Slide, Box } from "@mui/material";

const message = [
  "20% off on your first Order",
  "Sammers Sale Starts  now, visit any store ",
  "Modern and Responsive Website from SCRATCH ",
];
const index = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % message.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <>
      <PromotionsContainer>
        <Slide
          direction={show ? "left" : "right"}
          in={show}
          timeot={{
            enter: 500,
            end: 100,
          }}
        >
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <PromotionsText>{message[messageIndex]}</PromotionsText>
          </Box>
        </Slide>
      </PromotionsContainer>
    </>
  );
};

export default index;
