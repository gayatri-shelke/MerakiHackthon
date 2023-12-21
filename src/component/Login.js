import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";

const Login = () => {
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");

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

      if (response.data === 'Invalid email or password. Please try again.') {
        setError('Invalid email or password. Please try again.');
      } else {
        console.log('Successfully logged in!');
      }
    } catch (error) {
      setError('Error logging in. Please try again.');
      console.error('Error logging in', error.response.data);
    }
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
            <Typography variant="body2" color="error" align="center" sx={{ marginTop: 1 }}>
              {error}
            </Typography>
          )}
          <Button variant="contained" onClick={handleLogin} sx={{ marginTop: 2 }}>
            Login
          </Button>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
            Don't have an account? <a href="/signup">Sign Up</a>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Login;

