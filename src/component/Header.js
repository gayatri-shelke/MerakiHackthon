import React,{useState} from "react";
import Typography from "@mui/material/Typography";
import { AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    navigate("/profile")

    setAnchorEl(null);
  };
  const handleCloseLogout = () => {
    localStorage.clear()

    navigate("/login")

    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{
      //  backgroundColor: "#172035" 
      // background: '#005AA7',
      // background: '-webkit-linear-gradient(to bottom, #FFFDE4, #005AA7)',
      // background: 'linear-gradient(to bottom, #FFFDE4, #005AA7)',
      background:"black",

    }}>
        <Toolbar>
          <Typography variant="h6" style={{ color: "#ffffff",textAlign: 'center'}}> Welcome To Abhyas</Typography>
          <div style={{ marginLeft: 'auto' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleCloseLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
