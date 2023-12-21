import React, { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Typography } from "@mui/material";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {  AppBar, Toolbar } from "@mui/material";


const genderData = [
  { value: "male", gender: "Male" },
  { value: "female", gender: "Female" },
];

const roleData = [
  { value: "Front-End", role: "Front-End Development" },
  { value: "Back-End", role: "Back-End Development" },
  { value: "Full-Stack", role: "Full-Stack Development" },
  { value: "DevOps", role: "DevOps" },
  { value: "cybersecurity", role: "cybersecurity" },
  { value: "machine-learning", role: "machine-learning" },
  { value: "artificial-intelligence", role: "artificial-intelligence" },

  { value: "Data Science", role: "Data Science & Analytics" },
  { value: "Other (Please specify)", role: "Other (Please specify)" },
];
const skillsData = [
  { value: "python", skill: "Python" },
  { value: "javascript", skill: "JavaScript" },
  { value: "java", skill: "Java" },
  {value:"c",skill:"c"},
  {value:"c++",skill:"c++"} ,
  {value:"ruby",skill:"ruby"},
  {value:"React",skill:"React"},
  {value:"Nodejs",skill:"Nodejs"},
  {value:"Angular",skill:"Angular"},
  {value:"English",skill:"English"},
  {value:"Kotlin",skill:"Kotlin"},
  {value:"Typescript",skill:"Typescript"},
  {value:"PHP",skill:"PHP"},
  {value:"GO",skill:"GO"}



]


const Form = () => {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
    mobilenumber: "",
    gender: "",
    role: "",
    bio: "",
    skills: [], // Array to store selected skills
    Education: "",
    Interest: [],
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    // Load data from local storage on component mount
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  useEffect(() => {
    // Save data to local storage whenever formData changes
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("formData", formData);
    // You can perform additional actions if needed
  };

  // ... (rest of the code)
  const handleSkillsChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      skills: value,
    }));
  };
  const handleInterest = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      Interest: value,
    }));
  };

  return (
    <>
    <AppBar position="fixed" sx={{ backgroundColor: "#000000" }}>
  <Toolbar>
    <Typography variant="h6" sx={{ color: "#ffffff" }}>Abhays</Typography>
  </Toolbar>
 </AppBar>
    <Box
    component="form"
    sx={{
      flexGrow: 1,
      textAlign: "center",
      width: "500px",
      height: "auto",
      border: "2px solid blue",
      padding: "20px",
      margin: "auto",
      borderRadius:"30px",
      marginTop:"80px",marginBottom:"75px"

    }}
    noValidate
    autoComplete="off"
  >
    
    <Typography variant="h4">Signup</Typography>
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} sm={8} md={12} lg={12}>
        <TextField
          name="name"
          label="Name"
          variant="standard"
          placeholder="Enter your name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          helperText={
            !formData.name ? "Name is required" : "Enter your lastname"
          }
        />
      </Grid>
      <Grid item xs={12} sm={8} md={12} lg={12}>
        <TextField
          name="email"
          label="Email"
          variant="standard"
          placeholder="Enter your email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          helperText={
            !formData.email
              ? "Email is required"
              : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
              ? "Enter a valid email"
              : formData.email !== formData.email.toLowerCase()
              ? "Email should be in lowercase"
              : ""
          }
        />
      </Grid>
      <Grid item xs={12} sm={8} md={12} lg={12}>
        <TextField
          name="password"
          label="Password"
          variant="standard"
          placeholder="Enter your password"
          fullWidth
          value={formData.password}
          onChange={handleChange}
          helperText={
            !formData.password
              ? "Password is required"
              : formData.password.length < 8
              ? "Password should be at least 8 characters long"
              : !/\d/.test(formData.password)
              ? "Password should contain at least one digit"
              : !/[A-Z]/.test(formData.password)
              ? "Password should contain at least one uppercase letter"
              : !/[a-z]/.test(formData.password)
              ? "Password should contain at least one lowercase letter"
              : !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
              ? "Password should contain at least one special character"
              : "Password is strong"
          }
        />
      </Grid> 
      <Grid item xs={12} sm={8} md={12} lg={12}>
        <TextField
          name="mobilenumber"
          label="Mobile Number"
          variant="standard"
          placeholder="Enter your mobile number"
          fullWidth
          value={formData.mobilenumber}
          onChange={(e) => {
            if (e.target.value.length <= 10) {
              handleChange(e);
            }
          }}
          helperText={
            !formData.mobilenumber
              ? "Mobile number is required"
              : /\D/.test(formData.mobilenumber)
              ? "Mobile number should contain only numbers"
              : formData.mobilenumber.length < 10
              ? "Mobile number should be at least 10 digits"
              : "Enter your mobile number"
          }
        />
      </Grid>
      <Grid item xs={12} sm={8} md={12} lg={12}>
        <TextField
          name="Education"
          label="Education"
          variant="standard"
          placeholder="Enter your college name"
          fullWidth
          value={formData.Education}
          onChange={handleChange}
          helperText={
            !formData.name ? "Name is required" : "Enter your lastname"
          }
        />
      </Grid>
      <Grid item xs={12} sm={8} md={12} lg={12}>
        <TextField
          name="gender"
          select
          label="Select Gender"
          variant="standard"
          value={formData.gender}
          onChange={handleChange}
          helperText={
            !formData.gender ? "Gender is required" : "Enter your gender"
          }
          fullWidth
        >
          {genderData.map((selectgender) => (
            <MenuItem key={selectgender.value} value={selectgender.value}>
              {selectgender.gender}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      {/* ... (rest of the form components) */}
      <Grid item xs={12} sm={8} md={12} lg={12}>
        <FormControl fullWidth>
          <InputLabel id="skills-label">Skills</InputLabel>
          <Select
            labelId="skills-label"
            id="skills"
            name="skills"
            multiple
            value={formData.skills}
            onChange={handleSkillsChange}
            label="Select Skills"
            sx={{ "&:focus": { outline: "none" } }}
          >
            {skillsData.map((skill) => (
              <MenuItem key={skill.value} value={skill.value}>
                {skill.skill}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={8} md={12} lg={12}>
        <FormControl fullWidth>
          <InputLabel id="interest-label">Interest</InputLabel>
          <Select
            labelId="interest-label"
            id="interest"
            name="Interest"
            multiple
            value={formData.Interest}
            onChange={handleInterest}
            label="Select Interest"
            sx={{ "&:focus": { outline: "none" } }}
          >
            {skillsData.map((interest) => (
              <MenuItem key={interest.value} value={interest.value}>
                {interest.skill}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </Grid>

        <Grid item xs={12} sm={8} md={12} lg={12}>
          <TextField
            name="role"
            select
            label="Select role"
            variant="standard"
            value={formData.role}
            onChange={handleChange}
            helperText={!formData.role ? "Role is required" : "Enter your role"}
            fullWidth
          >
            {roleData.map((selectrole) => (
              <MenuItem key={selectrole.value} value={selectrole.value}>
                {selectrole.role}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <label>Your Bio</label>
          <TextareaAutosize
            name="bio"
            placeholder="Type anything…"
            style={{ width: "100%", minHeight: "130px", marginTop: "8px" }}
            value={formData.bio}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSubmit} fullWidth>
            Submit
          </Button>
        </Grid>
        </Grid>
      {/* ... (rest of the form components) */}
    </Box>
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
};

export default Form;


