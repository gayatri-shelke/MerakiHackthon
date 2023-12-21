import React from "react";
import { Box, Typography, CircularProgress, Grid } from "@mui/material";

// Assume you have an array of profile image URLs
const profileImages = [
  "url_to_image_1",
  "url_to_image_2",
  // ... add more image URLs as needed
];

const teamsData = [
  {
    team_name: "Gayatri",
    completed_portion: 75,
    current_topic: [
      { course_name: "Course 1", module_name: "Module A" },
      { course_name: "Course 2", module_name: "Module B" },
    ],
    Project_solution_submission: [
      { is_submitted: true },
      { is_submitted: false },
    ],
  },
  {
    team_name: "Apeksha",
    completed_portion: 60,
    current_topic: [
      { course_name: "Course 3", module_name: "Module C" },
      { course_name: "Course 4", module_name: "Module D" },
    ],
    Project_solution_submission: [
      { is_submitted: false },
      { is_submitted: true },
    ],
  },
  {
    team_name: "prem",
    completed_portion: 60,
    current_topic: [
      { course_name: "Course 3", module_name: "Module C" },
      { course_name: "Course 4", module_name: "Module D" },
    ],
    Project_solution_submission: [
      { is_submitted: false },
      { is_submitted: true },
    ],
  },
];

const Profile = () => {
  return (
    <Box style={{ marginLeft: "7.5%", marginRight: "20%" }}>
      <Typography variant="h5" style={{ textAlign: 'center',marginTop:"15px" }}>
        Student Progress
      </Typography> 

      <Grid container spacing={3}>
        {teamsData?.map((team, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
               style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src="data:image/jpeg;base64,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"
                // alt="StudentProfile"
                style={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "60px",
                  marginTop: "10px",
                  backgroundColor: "red",
                }}
              />
            </Box>

            {/* Team Card */}
            <Box
              style={{
                width: "90%",
                height: "170px",
                border: "1px solid #DEDEDE",
                borderRadius: "5px",
                padding: "10px",
                background: "#fff",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                margin: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Center content vertically
              }}
            >
              {/* Rest of the team information */}
              <Typography
                style={{
                  fontSize: "15px",
                  fontFamily: "Amazon Ember",
                  lineHeight: "40px",
                  fontWeight: "700px",
                }}
              >
                {team?.team_name}
              </Typography>
              {/* ... (rest of the team information) */}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Profile;
