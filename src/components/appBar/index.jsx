import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppBarDestop from "./appbarDestop/appbarDestop";
import AppBarMobile from "./appbarMobile/appbarMobile";
const index = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      {matches ? (
        <AppBarMobile matches={matches} />
      ) : (
        <AppBarDestop matches={matches} />
      )}
    </div>
  );
};

export default index;
