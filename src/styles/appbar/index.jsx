import { styled } from "@mui/material/styles";
import { Box, IconButton, List, Typography } from "@mui/material";
import { Colors } from "../themes/theme";
import "@fontsource/montez";

export const AppBarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

export const AppBarHeader = styled(Typography)(() => ({
  padding: 4,
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: "'Montez','cursive'",
  color: Colors.secondary,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionIconContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  alignItems: "center",
  width: "100%",
  zIndex: 99,
  borderTop: `1px solid  ${Colors.border}`,
}));

export const ActionIconContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  color: Colors.primary,
  position: "absolute",
  top: 10,
  left: "250px",
  zIndex: 1999,
}));
