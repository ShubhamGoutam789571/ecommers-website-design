import styled from "@emotion/styled";
import { Colors } from "../themes/theme";
import { Typography, Box } from "@mui/material";
export const PromotionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    padding: " 40px 0px 40px 0px",
  },
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px 20px 0",
  overflow: "hidden",
  background: Colors.secondary,
}));

export const PromotionsText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montez', cursive",
  [theme.breakpoints.up("md")]: {
    fontSize: "3em",
  },
  color: Colors.white,
  fontSize: "1.5em",
}));
