import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#000000" }}>
      <Toolbar>
        <Typography variant="h4" sx={{ color: "#ffffff" }}>
            Abhays
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
