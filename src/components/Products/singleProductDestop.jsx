import React, { useState } from "react";
import {
  // ExtraActionsWrapper,
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  // ProductAddToCart,
  ProductFavButton,
  ProductImage,
  // ProductMetaWrapper,
} from "../../styles/Products/prodeuctStyle";
import ProductMeta from "./prosuctMeta";
import { Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcons from "@mui/icons-material/Share";
import FitScreenIcons from "@mui/icons-material/FitScreen";
const singleProductDestop = ({ product, matches }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />

        <ProductFavButton isfav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {showOptions && (
          <ProductAddToCart show={showOptions} variant="contained">
            Add to cart
          </ProductAddToCart>
        )}

        <ProductActionsWrapper show={showOptions}>
          <Stack direction={matches ? "row" : "column"}>
            <ProductActionButton>
              <ShareIcons color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcons color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />
    </>
  );
};

export default singleProductDestop;
