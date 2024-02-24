import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems } from '../../Components/User/ListItems';

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import LinearProgress from "@mui/material/LinearProgress";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const defaultTheme = createTheme();

const Profile = ({ user }) => {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Mock yoga courses data
  const yogaCourses = [
    {
      id: 1,
      name: "Mindful Yoga Practice",
      instructor: "Yogi Aria",
      time: "8:00 AM - 10:00 AM",
      date: "Mon, Wed, Fri",
      imgURL: "https://via.placeholder.com/300",
      academy: { name: "Yoga Bliss Academy" },
      courseFee: 1200,
      description: "Explore mindfulness through yoga poses and meditation.",
      address: "123 Zen Garden Ave",
      city: "Calmville",
      state: "CA",
      country: "USA",
      rating: 4.8,
      progress: 30,
    },
    {
      id: 2,
      name: "Vinyasa Flow Yoga",
      instructor: "Yogini Maya",
      time: "6:00 PM - 8:00 PM",
      date: "Tue, Thu",
      imgURL: "https://via.placeholder.com/300",
      academy: { name: "Yoga Harmony Institute" },
      courseFee: 1000,
      description: "Experience the flow of movement and breath in this dynamic yoga class.",
      address: "456 Serenity Street",
      city: "Tranquilville",
      state: "NY",
      country: "USA",
      rating: 4.5,
      progress: 50,
    },
  ];

  // Use the first two courses from yogaCourses
  const enrolledCourses = yogaCourses.slice(0, 2);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              User Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <br />
          <br />
          <br />
          <br />
          <Container
            component="main"
            maxWidth="lg"
            sx={{
              display: "flex",
              flexWrap: "wrap", // Allow courses to wrap to the next line
              justifyContent: "center", // Center the courses horizontally
            }}
          >
            {/* Profile Card */}
            <Paper
              elevation={3}
              style={{
                marginBottom: 20,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%", // Make the profile card take full width
              }}
            >
              <Avatar style={{ width: 100, height: 100, marginBottom: 10 }}>
                {user.name[0]}
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                style={{ marginBottom: 10 }}
              >
                User Profile
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                align="center"
                style={{ marginBottom: 20 }}
              >
                Edit your profile information
              </Typography>
              <Typography component={"h1"} variant="h6">
                <strong>Name: </strong>
                {user.name}
              </Typography>
              <br />
              <Typography component={"h1"} variant="h6">
                <strong>Email: </strong>
                {user.email}
              </Typography>
              <br />
              <Typography component={"h1"} variant="h6">
                <strong>Phone: </strong>
                {user.phone}
              </Typography>
              <br />
            </Paper>

            {/* Enrolled Courses Cards */}
            <Typography variant="h4" sx={{ mt: 4, mb: 2, width: "100%" }}>
              Enrolled Courses
            </Typography>
            {enrolledCourses.map((course) => (
              <Card key={course.id} style={{ width: 300, margin: 10 }}>
                <CardMedia
                  component="img"
                  height="140"
                  // Replace 'course.imgURL' with your actual image URL property
                  image={course.imgURL}
                  alt={course.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {course.name}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" paragraph>
                    Instructor: {course.instructor} <br /> Time: {course.time} | Date: {course.date}
                  </Typography>
                  <LinearProgress variant="determinate" value={course.progress} />
                  <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>
                    Progress: {course.progress}%
                  </Typography>
                  {/* Add more details as needed */}
                </CardContent>
              </Card>
            ))}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Profile;
