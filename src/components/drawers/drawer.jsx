import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { lighten } from "polished";
import { useUIContext } from "../ContextUi";
import { DrawerCloseButton } from "../../styles/appbar";
import { Colors } from "../../styles/themes/theme";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

const drawer = ({ open, setopen }) => {
  // const [drawerOpen, setDrawerOpen] = useUIContext();

  return (
    <>
      {open && (
        <DrawerCloseButton onClick={() => setopen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={open}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>About us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Contact</ListItemText>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  );
};

export default drawer;
