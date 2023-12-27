import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `https://merd-api.merakilearn.org/developers/login/${formData.email}/${formData.password}`
      );

      if (response.data === "Invalid email or password. Please try again.") {
        setError("Invalid email or password. Please try again.");
        setSnackbarOpen(true);
      } else {
        const userId = response.data.id;
        localStorage.setItem("userId", userId);
        navigate("/course");
        
      }
    } catch (error) {
      setError("Error logging in. Please try again.");
      setSnackbarOpen(true);
      console.error("Error logging in", error.response.data);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", marginTop: 20 }}>
      <CardContent>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          {error && (
            <Typography
              variant="body2"
              color="error"
              align="center"
              sx={{ marginTop: 1 }}
            >
              {error}
            </Typography>
          )}
          <Button variant="contained" onClick={handleLogin} sx={{ marginTop: 2 }}>
            Login
          </Button>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
            Don't have an account? <Link to="/">Sign Up</Link>
          </Typography>
        </Box>
      </CardContent>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="error"
        >
          {error}
        </MuiAlert>
      </Snackbar>
    </Card>
  );
};

export default Login;
