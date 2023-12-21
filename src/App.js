// import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup'
import Course from './component/Course'
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {  AppBar, Toolbar } from "@mui/material";


function App() {
  return (
    <>
    <AppBar position="fixed" sx={{ backgroundColor: "#000000" }}>
  <Toolbar>
    <Typography variant="h6" sx={{ color: "#ffffff" }}>Abhyas</Typography>
  </Toolbar>
 </AppBar>
    <div className="App">
     <Login/>
     {/* <Signup/> */}
     {/* <Course/> */}
    </div>
     <Box
     component="footer"
     sx={{
       backgroundColor: "#222",
       color: "white",
       textAlign: "center",
       padding: "20px",
       position: "fixed",
       bottom: 0,
       width: "100%",
       borderTop: "2px solid #444",
       zIndex: 1000, // Added zIndex to ensure the footer appears above other content
     }}
   >
     <Typography variant="body2" sx={{ fontSize: "14px" }}>
       &copy; 2023 Abhays. All rights reserved.
     </Typography>
     <Typography variant="body2" sx={{ fontSize: "12px", marginTop: "5px" }}>
       Made with ❤️ by Your Name
     </Typography>
   </Box>
   </>
  );
}

export default App;
