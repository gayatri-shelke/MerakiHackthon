




import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';

const CoursesList = () => {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://merd-api.merakilearn.org/developers/recommended/courses/2');
        setCoursesData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleVisitCourse = async (course) => {
    try {
      // Log the data to the console
      console.log('Course Data:', {
        course_name: course.course_title,
        course_url: course.url,
        course_category: course.category,
      });
  
      // Send a POST request to the backend API with the course data
      await axios.post('https://merd-api.merakilearn.org/developers/courses/resource', {
        course_name: course.course_title,
        course_url: course.url,
        course_category: course.category,
      });
  
      // Optionally, you can open the course URL in a new tab/window
      window.open(course.url, '_blank');
    } catch (error) {
      // Log the complete error object
      console.error('Error sending data to the backend:', error);
  
      // If there is a response in the error object, log it as well
      if (error.response) {
        console.error('Error response from the server:', error.response.data);
      }
    }
  };
  

  return (
    <Box>
      <Typography variant="h4" style={{ textAlign: 'center', marginTop: '15px' }}>
        Courses of List
      </Typography>
      <Grid variant="h4" container spacing={3} style={{ justifyContent: 'center', alignItems: 'center' }}>
        {coursesData.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ margin: '30px', padding: '30px', marginTop: '80px', border: '1px solid #e0e0e0' }}>
              
              <CardContent>
                <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto' }}>
                  <h2 style={{ color: '#333', borderBottom: '3px solid #333', paddingBottom: '10px' }}>
                    {course.course_title}
                  </h2>
                  <p><strong>Category:</strong> {course.category}</p>
                  <p><strong>Rating:</strong> {course.rating}</p>
                  <p><strong>Enrolled Students:</strong> {course.enrolledStudents}</p>
                  <p><strong>Reviews:</strong> {course.reviews}</p>
                  <p><strong>Certificate:</strong> {course.Certificate}</p>
                  <p><strong>Price:</strong> {course.Price}</p>
                  <p style={{ marginTop: '15px' }}>
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleVisitCourse(course)}
                      style={{
                        display: 'inline-block',
                        padding: '10px 15px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      Visit Course
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoursesList;

