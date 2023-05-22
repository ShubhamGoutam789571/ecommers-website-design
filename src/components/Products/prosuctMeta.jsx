import React from "react";
import { ProductMetaWrapper } from "../../styles/Products/prodeuctStyle";
import { Typography } from "@mui/material";

const prosuctMeta = ({ product, matches }) => {
  return (
    <ProductMetaWrapper>
      <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
        {product.name}
      </Typography>
      <Typography variant={matches ? "caption" : "body"}>
        $ {product.price}
      </Typography>
    </ProductMetaWrapper>
  );
};

export default prosuctMeta;
