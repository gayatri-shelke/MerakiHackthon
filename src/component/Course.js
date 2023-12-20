import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const coursesData = [
  {
    title: 'Course 1',
    imageUrl: 'https://example.com/course1.jpg',
    description: 'Description for Course 1.',
  },
  {
    title: 'Course 2',
    imageUrl: 'https://example.com/course2.jpg',
    description: 'Description for Course 2.',
  },
  {
    title: 'Course 3',
    imageUrl: 'https://example.com/course3.jpg',
    description: 'Description for Course 3.',
  },
  // Add more course data as needed
];

const CoursesList = () => {
  return (
    <Grid container spacing={3}>
      {coursesData.map((course, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={course.imageUrl}
              alt={course.title}
            />
            <CardContent>
              <Typography variant="h6">{course.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {course.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CoursesList;
