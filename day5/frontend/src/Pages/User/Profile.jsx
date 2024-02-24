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
      imgURL: "data:image/jpeg;base64,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",
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
      imgURL: "data:image/jpeg;base64,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",
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
