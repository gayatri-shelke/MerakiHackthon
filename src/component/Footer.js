import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        // backgroundColor: "#222",
        background: '#005AA7',  
        background: '-webkit-linear-gradient(to bottom, #FFFDE4, #005AA7)', 
        background: 'linear-gradient(to bottom, #FFFDE4, #005AA7)', 

        color: "white",
        textAlign: "center",
        padding: "20px",
        borderTop: "2px solid #444",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2" sx={{ fontSize: "14px" }}>
        &copy; 2023 @Abhyas. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ fontSize: "12px", marginTop: "5px" }}>
        Made with ❤️ by Our Team
      </Typography>
    </Box>
  );
};

export default Footer;
