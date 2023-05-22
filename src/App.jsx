import { useState } from "react";
import AppBars from "./components/appBar";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/themes/theme";
import { Box, Button, Container, Typography } from "@mui/material";
import BannerPage from "./components/banner";
import Promotions from "./components/promotion";
import Products from "./components/Products/product";
import Footers from "./components/footer/footer";
import AppDrawer from "./components/drawers/drawer";
import { UIProvider } from "./components/ContextUi";
function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <AppBars />
          <BannerPage />
          <Promotions />
          <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
            <Typography variant="h4">Our Product</Typography>
          </Box>
          <Products />
          <Footers />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
