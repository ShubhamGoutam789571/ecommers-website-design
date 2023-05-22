import React from "react";
import {
  MyList,
  ActionIconContainerDesktop,
  ActionIconContainerMobile,
} from "../../styles/appbar";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../styles/themes/theme";
const actions = ({ matches }) => {
  const sxBtn = {
    justifyContent: "center",
  };
  const sxIcon = {
    display: "flex",
    justifyContent: "center",
    color: matches && Colors.secondary,
  };
  const Components = matches
    ? ActionIconContainerMobile
    : ActionIconContainerDesktop;
  return (
    <Components>
      <MyList type="row">
        <ListItemButton sx={sxBtn}>
          <ListItemIcon sx={sxIcon}>
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={sxBtn}>
          <ListItemIcon sx={sxIcon}>
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={sxBtn}>
          <ListItemIcon sx={sxIcon}>
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Components>
  );
};

export default actions;
