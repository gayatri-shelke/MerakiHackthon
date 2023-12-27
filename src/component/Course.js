import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

const CoursesList = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const fetchData = async () => {
      try {
        let storedCoursesData = JSON.parse(localStorage.getItem("coursesData"));

        if (!storedCoursesData) {
          const response = await axios.get(`https://merd-api.merakilearn.org/developers/recommended/courses/${userId}`);
          storedCoursesData = response.data;
          localStorage.setItem("coursesData", JSON.stringify(storedCoursesData));
        }

        setCoursesData(storedCoursesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handleVisitCourse = async (course) => {
    try {
     
      await axios.post(
        "https://merd-api.merakilearn.org/developers/courses/resource",
        {
          course_name: course.course_title,
          course_url: course.url,
          course_category: course.category,
        }
      );

      window.open(course.url, "_blank");
    } catch (error) {
      console.error("Error sending data to the backend:", error);
      if (error.response) {
        console.error("Error response from the server:", error.response.data);
      }
    }
  };

  return (
    <Container maxWidth="xl" sx={{ mb: 20, position: "relative" }}>
      {loading && (
        <CircularProgress
          size={100}
          style={{
            position: "absolute",
            color: "gray",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      {!loading && (
        <>
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              marginTop: 100,
              color: "white",
              marginBottom: 50,
            }}
          >
            Suggested Courses List
          </Typography>
          <Grid
            container
            spacing={3}
            style={{ justifyContent: "center", alignItems: "stretch" }}
          >
            {coursesData.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <CardContent style={{ flex: "1" }}>
                    <div
                      style={{
                        fontFamily: "Arial, sans-serif",
                        maxWidth: "300px",
                        margin: "auto",
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="div"
                        style={{
                          color: "#333",
                          borderBottom: "3px solid #333",
                          paddingBottom: "10px",
                        }}
                      >
                        {course.course_title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        style={{ marginBottom: "8px", marginTop: "15px" }}
                      >
                        <strong>Category:</strong> {course.category}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        style={{ marginBottom: "8px" }}
                      >
                        <strong>Rating:</strong> {course.rating?.toString()}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        style={{ marginBottom: "8px" }}
                      >
                        <strong>Reviews:</strong> {course.reviews}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        style={{ marginBottom: "8px" }}
                      >
                        <strong>Enrolled Students:</strong>{" "}
                        {course.enrolledStudents}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        style={{ marginBottom: "8px" }}
                      >
                        <strong>Certificate:</strong> {course.Certificate}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        style={{ marginBottom: "8px" }}
                      >
                        <strong>Price:</strong> {course.Price}
                      </Typography>
                    </div>
                  </CardContent>
                  <CardContent style={{ alignSelf: "flex-end" }}>
                    <Link
                      to={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        onClick={() => handleVisitCourse(course)}
                        variant="contained"
                        style={{
                          backgroundColor: "#007bff",
                          color: "#fff",
                          borderRadius: "0",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        Visit Course
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default CoursesList;
