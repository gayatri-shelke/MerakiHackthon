import React, { useState, useEffect } from "react";
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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";

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
      {value: "Other (Please specify)",skill: "Other (Please specify)"}
  ];

  const educationData = [
    { value: "high-school", label: "High School" },
    { value: "undergraduate", label: "Undergraduate" },
    { value: "graduate", label: "Graduate" },
    { value: "postgraduate", label: "Postgraduate" },
  ];

  const experienceData = [
    { value: "0-1", label: "0-1 years" },
    { value: "1-3", label: "1-3 years" },
    { value: "3-5", label: "3-5 years" },
    { value: "5+", label: "5+ years" },
  ];

  const programmingLanguagesData = [
    { value: "java", label: "Java" },
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
  ];

  const knownFrameworksData = [
    { value: "react", label: "React" },
    { value: "angular", label: "Angular" },
    { value: "express", label: "Express.js" },
  ];
  const Signup = () => {
    const initialFormData = {
      name: "",
      email: "",
      password: "",
      role: "",
      education: "",
      intrests:[],
      skills: [], 
      experience: "",
      programming_languages: [],
      known_framworks: [],
      resonal_language: "",
      learning_plan: "", 
    };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleEducationChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      education: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, education: "" }));
  };

  const handleKnownFrameworksChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      known_framworks: [value],
    }));
    setErrors((prevErrors) => ({ ...prevErrors, known_framworks: "" }));
  };

  const handleExperienceChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      experience: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, experience: "" }));
  };

  const handleProgrammingLanguagesChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      programming_languages: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, programming_languages: "" }));
  };

  const handleResonalLanguageChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, resonal_language: "" }));
  };

  const handleSkillsChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      skills: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, skills: "" }));
  };

  const handleInterest = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      intrests: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, intrests: "" }));
  };

  const handleSubmit = async () => {
    try {
      if (!validateForm()) {
        return;
      }
      const response = await axios.post(
        "https://merd-api.merakilearn.org/developers/create",
        formData
      );
      console.log("Signup successful!", response.data);
    } catch (error) {
      console.error("Error signing up", error.response.data);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ||
      formData.email !== formData.email.toLowerCase()
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.skills.length === 0) {
      newErrors.skills = "Skills are required";
    }

    if (formData.intrests.length === 0) {
      newErrors.intrests = "Interest is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", marginTop: 20, mb:20 }}>
      <CardContent>
        <Box component="form" sx={{ display: "flex", flexDirection: "column", alignItems: "center",}}>
          <Typography variant="h4">Signup</Typography>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} sm={8} md={12} lg={12}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={8} md={12} lg={12}>
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={8} md={12} lg={12}>
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={8} md={12} lg={12}>
              <TextField
                name="role"
                select
                label="Select role"
                variant="outlined" 
                value={formData.role}
                onChange={handleChange}
                error={!!errors.role}
                helperText={errors.role}
                fullWidth
               
              >
                {roleData.map((selectrole) => (
                  <MenuItem key={selectrole.value} value={selectrole.value}>
                    {selectrole.role}
                  </MenuItem>
                ))}
              </TextField>
              {errors.role && (
                <Typography variant="caption" color="red">
                  {errors.role}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={8} md={12} lg={12}>
              <TextField
                name="education"
                select
                label="Select Education"
                variant="outlined" 
                value={formData.education}
                onChange={handleEducationChange}
                error={!!errors.education}
                helperText={errors.education}
                fullWidth
               
              >
                {educationData.map((education) => (
                  <MenuItem key={education.value} value={education.value}>
                    {education.label}
                  </MenuItem>
                ))}
              </TextField>
              {errors.education && (
                <Typography variant="caption" color="red">
                  {errors.education}
                </Typography>
              )}
            </Grid>
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
                  error={!!errors.skills}
                  helperText={errors.skills}
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
                  value={formData.intrests}
                  onChange={handleInterest}
                  label="Select Interest"
                  sx={{ "&:focus": { outline: "none" } }}
                  error={!!errors.intrests}
                  helperText={errors.intrests}
                >
                  {skillsData.map((intrests) => (
                    <MenuItem key={intrests.value} value={intrests.value}>
                      {intrests.skill}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={8} md={12} lg={12}>
              <TextField
                name="experience"
                select
                label="Select Experience"
                variant="outlined" 
                value={formData.experience}
                onChange={handleExperienceChange}
                error={!!errors.experience}
                helperText={errors.experience}
                fullWidth
               
              >
                {experienceData.map((experience) => (
                  <MenuItem key={experience.value} value={experience.value}>
                    {experience.label}
                  </MenuItem>
                ))}
              </TextField>
              {errors.experience && (
                <Typography variant="caption" color="red">
                  {errors.experience}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={8} md={12} lg={12}>
              <FormControl fullWidth>
                <InputLabel id="programming-languages-label">Programming Languages</InputLabel>
                <Select
                  labelId="programming-languages-label"
                  id="programming-languages"
                  name="programming_languages"
                  multiple
                  value={formData.programming_languages}
                  onChange={handleProgrammingLanguagesChange}
                  label="Select Programming Languages"
                  sx={{ "&:focus": { outline: "none" } }}
                  error={!!errors.programming_languages}
                  helperText={errors.programming_languages}
                >
                  {programmingLanguagesData.map((language) => (
                    <MenuItem key={language.value} value={language.value}>
                      {language.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {errors.programming_languages && (
                <Typography variant="caption" color="red">
                  {errors.programming_languages}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={8} md={12} lg={12}>
              <FormControl fullWidth>
                <InputLabel id="known-frameworks-label">Known Frameworks</InputLabel>
                <Select
                  labelId="known-frameworks-label"
                  id="known-frameworks"
                  name="known_framworks"
                  value={formData.known_framworks[0] || ""}
                  onChange={handleKnownFrameworksChange}
                  label="Select Known Frameworks"
                  sx={{ "&:focus": { outline: "none" } }}
                  error={!!errors.known_framworks}
                  helperText={errors.known_framworks}
                >
                  {knownFrameworksData.map((framework) => (
                    <MenuItem key={framework.value} value={framework.value}>
                      {framework.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {errors.known_framworks && (
                <Typography variant="caption" color="red">
                  {errors.known_framworks}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={8} md={12} lg={12}>
              <TextField
                name="resonal_language"
                label="Resonal Language"
                variant="outlined"
                placeholder="Enter your resonal language"
                fullWidth
                value={formData.resonal_language}
                onChange={handleResonalLanguageChange}
                error={!!errors.resonal_language}
                helperText={errors.resonal_language}
                
              />
              {errors.resonal_language && (
                <Typography variant="caption" color="red">
                  {errors.resonal_language}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <label>Your learning_plan summary</label>
              <TextareaAutosize
                name="learning_plan"
                placeholder="Type anything…"
                style={{ width: "100%", minHeight: "130px", marginTop: "8px" }}
                value={formData.learning_plan}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleSubmit} fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};
export default Signup;

