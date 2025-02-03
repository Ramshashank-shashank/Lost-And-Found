// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Box, Typography, Avatar, CircularProgress } from '@mui/material';
// import Header from './Header'; // Import your header component
// import Footer from './footer'; // Import your footer component

// const ViewProfile = () => {
//     const { userId } = useParams();
//     const [userDetails, setUserDetails] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchUserDetails = async () => {
//             try {
//                 const response = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/user/${userId}`);
//                 const data = await response.json();
//                 setUserDetails(data);
//             } catch (error) {
//                 console.error('Error fetching user details:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUserDetails();
//     }, [userId]);

//     if (loading) return <CircularProgress />;

//     if (!userDetails) return <Typography>No user found.</Typography>;

//     return (
//         <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//             <Header /> {/* Add Header here */}
//             <Box sx={{ padding: '20px', flexGrow: 1 }}>
//                 <Box display="flex" flexDirection="column" alignItems="center">
//                     <Avatar
//                         alt={userDetails.name}
//                         src={userDetails.profilePhotoUrl}
//                         sx={{ width: 100, height: 100, marginBottom: '20px' }}
//                     />
//                     <Typography variant="h5">{userDetails.name}</Typography>
//                     <Typography variant="body1">Email: {userDetails.email}</Typography>
//                     <Typography variant="body1">WhatsApp: {userDetails.whatsappNumber}</Typography>
//                     <Typography variant="body1">Lives in Hostel: {userDetails.hostelName}</Typography>
                  
//                 </Box>
//             </Box>
//             <Footer /> 
//         </Box>
//     );
// };

// export default ViewProfile;
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Box, Typography, Avatar, CircularProgress } from '@mui/material';
// import Header from './Header'; // Import your header component
// import Footer from './footer'; // Import your footer component

// const ViewProfile = () => {
//     const { userId } = useParams();
//     const [userDetails, setUserDetails] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchUserDetails = async () => {
//             try {
//                 const response = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/user/${userId}`);
//                 const data = await response.json();
//                 setUserDetails(data);
//             } catch (error) {
//                 console.error('Error fetching user details:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUserDetails();
//     }, [userId]);

//     if (loading) return <CircularProgress />;

//     if (!userDetails) return <Typography>No user found.</Typography>;

//     return (
//         <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//             <Header /> {/* Add Header here */}
//             <Box sx={{ padding: '20px', flexGrow: 1 }}>
//                 <Box display="flex" flexDirection="column" alignItems="center">
//                     <Avatar
//                         alt={userDetails.name}
//                         src={userDetails.profilePhotoUrl}
//                         sx={{ width: 100, height: 100, marginBottom: '20px' }}
//                     />
//                     <Typography variant="h5">{userDetails.name}</Typography>
//                     <Typography variant="body1">Email: {userDetails.email}</Typography>
//                     <Typography variant="body1">WhatsApp: {userDetails.whatsappNumber}</Typography>
//                     <Typography variant="body1">Lives in Hostel: {userDetails.hostelName}</Typography>

//                 </Box>
//             </Box>
//             <Footer />
//         </Box>
//     );
// };

// export default ViewProfile;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Avatar,
  CircularProgress,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import Header from "./Header"; // Import your header component
import Footer from "./footer"; // Import your footer component

const ViewProfile = () => {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/auth/user/${userId}`
        );
        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!userDetails) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          No user found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box
        sx={{
          padding: "40px",
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: 500,
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                alt={userDetails.name}
                src={userDetails.profilePhotoUrl}
                sx={{
                  width: 120,
                  height: 120,
                  marginBottom: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                {userDetails.name}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ marginBottom: "20px", textAlign: "center" }}
              >
                {/* {userDetails.bio ||
                  "A passionate individual who loves to learn and grow."} */}
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Email:</strong> {userDetails.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>WhatsApp:</strong> {userDetails.whatsappNumber}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Lives in Hostel:</strong> {userDetails.hostelName}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </Box>
  );
};

export default ViewProfile;

