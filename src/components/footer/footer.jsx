import React from "react";
import {
  Box,
  Grid,
  List,
  Stack,
  Typography,
  ListItemText,
  Button,
} from "@mui/material";
import { Colors } from "../../styles/themes/theme";
import { FooterTitle, SubscribeIf } from "../../styles/footer/footerStyle";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
const footer = () => {
  const sxStyles = {
    backgroundColor: Colors.shaft,
    color: Colors.white,
    p: { xs: 4, md: 10 },
    pt: 12,
    pb: 12,
    fontSize: { xs: "12px ", md: "14px" },
  };

  const sxIcons = {
    mr: 1,
  };
  return (
    <Box sx={sxStyles}>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            qui unde accusamus? Ab, facere officiis voluptatibus fugit deserunt
            labore nam! Suscipit adipisci deserunt aperiam possimus laboriosam
            sequi fugit obcaecati aliquid.
          </Typography>
          <Box sx={{ mt: 4, color: Colors.dove_gray }}>
            <FacebookIcon sx={sxIcons} />
            <TwitterIcon sx={sxIcons} />
            <InstagramIcon sx={sxIcons} />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Infomartion</FooterTitle>
          <List>
            <ListItemText l>
              <Typography ineHeight={2} variant="caption2">
                About us
              </Typography>
            </ListItemText>
            <ListItemText l>
              <Typography ineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText l>
              <Typography ineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText l>
              <Typography ineHeight={2} variant="caption2">
                Terms &amp; Condations
              </Typography>
            </ListItemText>
            <ListItemText l>
              <Typography ineHeight={2} variant="caption2">
                About us
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">MY ACCOUNT</FooterTitle>
          <List>
            <ListItemText l>
              <Typography ineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText l>
              <Typography ineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText l>
              <Typography ineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText l>
              <Typography ineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
            <ListItemText l>
              <Typography ineHeight={2} variant="caption2">
                About us
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack>
            <SubscribeIf
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default footer;
