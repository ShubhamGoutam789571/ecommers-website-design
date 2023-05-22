import { Container, useMediaQuery, useTheme, Grid } from "@mui/material";
import React, { useState } from "react";
import { products } from "../data";
import SingleProduct from "./singleProduct";
import SingleProductDestop from "./singleProductDestop";
const product = () => {
  const [data, setData] = useState(products);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const renderProduct = products.map((items) => {
    return (
      <>
        <Grid
          item
          xs={2}
          sm={4}
          md={4}
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
        >
          {matches ? (
            <SingleProduct product={items} matches={matches} />
          ) : (
            <SingleProductDestop product={items} matches={matches} />
          )}
        </Grid>
      </>
    );
  });
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent={"center"}
        sx={{ margin: "20px 4px 10px 4px" }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProduct}
      </Grid>
    </Container>
  );
};

export default product;
