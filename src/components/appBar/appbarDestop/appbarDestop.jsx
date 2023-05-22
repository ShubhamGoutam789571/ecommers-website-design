import React from "react";
import {
  ActionIconContainerDesktop,
  AppBarContainer,
  AppBarHeader,
  MyList,
} from "../../../styles/appbar";
import { ListItemText, ListItemButton, ListItemIcon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Action from "../actions";
const appbarDestop = ({ matches }) => {
  return (
    <AppBarContainer>
      <AppBarHeader>My Bags</AppBarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Product" />
        <ListItemText primary="Contact" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Action matches={matches} />
    </AppBarContainer>
  );
};

export default appbarDestop;
