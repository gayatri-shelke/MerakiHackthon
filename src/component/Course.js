import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const coursesData=[ 
  {
        "course_title": "[Coursera] Machine Learning Specialization",
        "category": "machine-learning",
        "url": "https://imp.i384100.net/75XQG5",
        "rating": "4.6",
        "enrolledStudents": 7696609,
        "reviews": 17152,
        "Certificate": "Yes",
        "Price": "Free (with subscription)"
      },
      {
        "course_title": "[Udemy] Machine Learning A-Z: AI, Python & R + ChatGPT Bonus",
        "category": "machine-learning",
        "url": "https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fmachinelearning%2F%23reviews",
        "rating": "4.6",
        "enrolledStudents": 2823625,
        "reviews": 17886,
        "Certificate": "Yes",
        "Price": "Paid & Free"
      },
      {
        "course_title": "[Udacity] Machine Learning Nanodegree",
        "category": "machine-learning",
        "url": "https://imp.i115008.net/c/2890636/788199/11298?u=https%3A%2F%2Fwww.udacity.com%2Fcourse%2Fmachine-learning-engineer-nanodegree--nd009t-ir",
        "rating": "3.5",
        "enrolledStudents": 6362822,
        "reviews": 14320,
        "Certificate": "Yes",
        "Price": "Free (with subscription)"
      },
      {
        "course_title": "[FreeCodeCamp] Machine Learning for Everybody",
        "category": "machine-learning",
        "url": "https://www.youtube.com/watch?v=i_LwzRVP7bg&ab_channel=freeCodeCamp.org",
        "rating": "4.6",
        "enrolledStudents": 2597426,
        "reviews": 21306,
        "Certificate": "Yes",
        "Price": "Free (with subscription)"
      },
      {
        "course_title": "[Coursera] Machine Learning Specialization",
        "category": "machine-learning",
        "url": "https://imp.i384100.net/y2ZBvD",
        "rating": "4.6",
        "enrolledStudents": 3830731,
        "reviews": 38488,
        "Certificate": "Yes",
        "Price": "Free (with subscription)"
      },
      {
        "course_title": "[Udemy] Machine Learning, Data Science and Deep Learning with Python",
        "category": "machine-learning",
        "url": "https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fdata-science-and-machine-learning-with-python-hands-on%2F",
        "rating": "3.8",
        "enrolledStudents": 1451694,
        "reviews": 26747,
        "Certificate": "Yes",
        "Price": "Paid & Free"
      },
      {
        "course_title": "[Educative] A Practical Guide to Machine Learning with Python",
        "category": "machine-learning",
        "url": "https://educative.pxf.io/c/2890636/1668228/19245?u=https%3A%2F%2Fwww.educative.io%2Fcourses%2Fguide-to-machine-learning-python",
        "rating": "3.3",
        "enrolledStudents": 5602336,
        "reviews": 11318,
        "Certificate": "Yes",
        "Price": "Paid"
      }
    ]

const CoursesList = () => {
  return (
    <Box>
    <Typography variant="h4" style={{ textAlign: 'center',marginTop:"15px" }}>
        Courses of List
      </Typography>    
      <Grid variant="h4" container spacing={3} style={{ justifyContent: 'center', alignItems: 'center' }}>

      {coursesData.map((course, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ margin: '30px', padding: '30px',marginTop:"80px", border: '1px solid #e0e0e0',}}>
            <CardMedia
              component="img"
              width="10%"
              image={course.url}
              alt={course.course_title}
              style={{ objectFit: 'cover' }}
            />
            <CardContent>
              {/* <Typography variant="h6">{course.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {course.description}
              </Typography> */}
              <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ color: '#333', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
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
