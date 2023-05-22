import React, { useState } from "react";
import { AppBarContainer, AppBarHeader } from "../../../styles/appbar";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcons from "@mui/icons-material/Search";
import Actions from "../actions";
import Drawer from "../../drawers/drawer";
const appbarMobile = ({ matches }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Drawer open={open} setopen={setOpen} />
      <AppBarContainer>
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <AppBarHeader textAlign={"center"} variant="h4">
          My Bags
        </AppBarHeader>
        <IconButton>
          <SearchIcons />
        </IconButton>
        <Actions matches={matches} />
      </AppBarContainer>
    </>
  );
};

export default appbarMobile;
