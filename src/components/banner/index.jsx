import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerDescriptions,
  BannerImage,
  BannerShopButton,
  BannerTittle,
} from "../../styles/banner/banner";
import Banner from "../../assets/images/banner/banner.png";
import { Typography } from "@mui/material";

const index = () => {
  return (
    <>
      <BannerContainer>
        <BannerImage src={Banner} />
        <BannerContent>
          <Typography variant="h6">Huge Collection</Typography>
          <BannerTittle variant="h2">New Bags</BannerTittle>
          <BannerDescriptions variant="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro velit
            soluta alias suscipit vero atque ipsum sequi adipisci vel nam
            accusantium
          </BannerDescriptions>
          <BannerShopButton color="primary">Shop Now</BannerShopButton>
        </BannerContent>
      </BannerContainer>
    </>
  );
};

export default index;
