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

  // Mock enrolled courses data
  const enrolledCourses = [
    { id: 1, name: 'Course 1', instructor: 'Instructor 1', date: '2024-03-01', time: '10:00 AM' },
    { id: 2, name: 'Course 2', instructor: 'Instructor 2', date: '2024-03-15', time: '2:00 PM' },
  ];

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

          <Container component="main" maxWidth="lg">
            {/* Profile Card */}
            <Paper
              elevation={3}
              style={{
                marginBottom: 20,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar style={{ width: 100, height: 100, marginBottom: 10 }}>
                P
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
                    Instructor : {course.instructor} <br /> {course.time} | {course.date}
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
