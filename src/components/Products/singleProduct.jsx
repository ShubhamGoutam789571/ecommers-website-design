import React from "react";
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
const singleProduct = ({ product, matches }) => {
  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction="row">
            <ProductFavButton isfav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcons color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcons color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      <ProductAddToCart variant="contained">Add to Cart</ProductAddToCart>
      </Product>
    </>
  );
};

export default singleProduct;

{
  /* <ProductActionsWrapper>
          <FavoriteIcon />
          <Stack direction="column">
            <ProductFavButton isfav={1}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductFavButton isfav={1}>
              <ShareIcons />
            </ProductFavButton>
          </Stack>
        </ProductActionsWrapper>
  */
}
