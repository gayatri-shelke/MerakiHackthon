import React from 'react';
import { Box, Typography, CircularProgress, Grid } from '@mui/material';

const teamsData = [
  {
    team_name: 'Team A',
    completed_portion: 75,
    current_topic: [
      { course_name: 'Course 1', module_name: 'Module A' },
      { course_name: 'Course 2', module_name: 'Module B' },
    ],
    Project_solution_submission: [
      { is_submitted: true },
      { is_submitted: false },
    ],
  },
  {
    team_name: 'Team A',
    completed_portion: 75,
    current_topic: [
      { course_name: 'Course 1', module_name: 'Module A' },
      { course_name: 'Course 2', module_name: 'Module B' },
    ],
    Project_solution_submission: [
      { is_submitted: true },
      { is_submitted: false },
    ],
  },
  // Add more teamsData as needed
];


const TeamsList = () => {
  return (
    <Box style={{ marginLeft: "7.5%", marginRight: "20%" }}>
      <Typography
        style={{
          fontFamily: 'Amazon Ember',
          fontSize: '16px',
          fontWeight: 600,
          marginTop: '30px',
        }}
      >
        Teams 
      </Typography>
      <Box
        style={{
          display: "flex",
          marginBottom: "20px",
        }}
      >
        <img
          src="/assets/girlImage.png"
          alt="StudentProfile"
          style={{
            height: "60px",
            width: "60px",
            borderRadius: "60px",
            marginTop: "10px",
            backgroundColor:"red"
          }}
        />
        </Box>      
        <Box style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          {teamsData?.map((person, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                style={{
                  width: '90%',
                  height: '170px',
                  border: '1px solid #DEDEDE',
                  borderRadius: '5px',
                  padding: '10px',
                  background: '#fff',
                  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
                  margin: '5px',
                }}
              >
                <Typography
                  style={{
                    fontSize: '15px',
                    fontFamily: 'Amazon Ember',
                    lineHeight: '40px',
                    fontWeight: '700px',
                  }}
                >
                  {person?.team_name}
                </Typography>
                <Box display="flex" gap={5}>
                  <Box style={{ marginTop: '10px' }}>
                    <CircularProgress
                      variant="determinate"
                      size={17}
                      value={person?.completed_portion}
                      style={{ color: 'green' }}
                    />
                    <span
                      style={{
                        fontSize: '16px',
                        marginLeft: '10px',
                        fontFamily: 'Amazon Ember',
                        marginBottom: '50px',
                      }}
                    >
                      {person?.completed_portion}%
                    </span>
                  </Box>
                </Box>
                <hr
                  style={{
                    color: '#DEDEDE',
                    border: 'none',
                    borderTop: '2px solid #DEDEDE',
                  }}
                />
                <Typography
                  style={{
                    fontSize: '15px',
                    fontFamily: 'Amazon Ember',
                    lineHeight: '50px',
                    fontWeight: '700px',
                  }}
                >
                  Current Lesson:{' '}
                  {person?.current_topic?.map((lessonName, index) => (
                    <span key={index}>
                      {lessonName.course_name === ''
                        ? lessonName.module_name
                        : lessonName.course_name}
                    </span>
                  ))}
                </Typography>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap={1}
                >
                  <Typography
                    style={{
                      fontSize: '15px',
                      fontFamily: 'Amazon Ember',
                      lineHeight: '35px',
                      fontWeight: '700px',
                    }}
                  >
                    Project Status:
                  </Typography>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor:
                        person?.Project_solution_submission === null
                          ? 'red'
                          : person?.Project_solution_submission?.some(
                              (projectStatus) => projectStatus.is_submitted
                            )
                          ? 'green'
                          : 'red',
                    }}
                  />
                  <Typography
                    style={{
                      fontSize: '15px',
                      fontFamily: 'Amazon Ember',
                      lineHeight: '35px',
                      fontWeight: '700px',
                    }}
                  >
                    {person?.Project_solution_submission === null
                      ? 'Yet to Submitted'
                      : person?.Project_solution_submission?.some(
                          (projectStatus) => projectStatus.is_submitted
                        )
                      ? 'Submitted'
                      : 'Yet to Submitted'}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TeamsList;



// import React from 'react';
// import { Card, CardContent, Typography, Button } from '@mui/material';

// const coursesData = [
//   // ... your existing courses data
//   {
//     url: 'https://your-new-course-url.com',
//     rating: '4.5',
//     enrolledStudents: 12345,
//     reviews: 678,
//     Certificate: 'Yes',
//     Price: 'Paid',
//   },
// ];

// const CoursesList = () => {
//   return (
//     <div>
//       {coursesData.map((course, index) => (
//         <Card key={index} style={{ marginBottom: '20px' }}>
//           <CardContent>
//             <Typography variant="h5" component="div">
//               Course {index + 1}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Rating: {course.rating}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Enrolled Students: {course.enrolledStudents}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Reviews: {course.reviews}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Certificate: {course.Certificate}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Price: {course.Price}
//             </Typography>
//             <Button variant="contained" href={course.url} target="_blank">
//               View Course
//             </Button>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default CoursesList;





// import React from 'react';
// import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

// const coursesData = [
//   // ... your existing courses data
//   {
//     url: 'https://your-new-course-url.com',
//     rating: '4.5',
//     enrolledStudents: 12345,
//     reviews: 678,
//     Certificate: 'Yes',
//     Price: 'Paid',
//   },
//   {
//     url: 'https://your-new-course-url.com',
//     rating: '4.5',
//     enrolledStudents: 12345,
//     reviews: 678,
//     Certificate: 'Yes',
//     Price: 'Paid',
//   },
//   {
//     url: 'https://your-new-course-url.com',
//     rating: '4.5',
//     enrolledStudents: 12345,
//     reviews: 678,
//     Certificate: 'Yes',
//     Price: 'Paid',
//   },
// ];

// const CoursesList = () => {
//   return (
//     <Grid container spacing={3}>
//       {coursesData.map((course, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <Card>
//             <CardContent>
//               <Typography variant="h5" component="div">
//                 Course {index + 1}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Rating: {course.rating}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Enrolled Students: {course.enrolledStudents}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Reviews: {course.reviews}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Certificate: {course.Certificate}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Price: {course.Price}
//               </Typography>
//               <Button variant="contained" href={course.url} target="_blank">
//                 View Course
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default CoursesList;
