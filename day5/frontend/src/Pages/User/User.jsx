import React, { useState } from 'react';
import {
  styled,
  createTheme,
  ThemeProvider,
  alpha,
} from "@mui/material/styles";
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
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Popover from '@mui/material/Popover';
import { mainListItems } from '../../Components/User/ListItems';

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

const User = () => {
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const yogaCourses = [
    {
      id: 1,
      imgURL: "data:image/jpeg;base64,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",
      name: "Yoga for Beginners",
      instructor: "Jane Doe",
      time: "8:00 AM",
      date: "2024-03-01",
      academy: { name: "Yoga Academy" },
      courseFee: 1200,
      description: "Introduction to yoga practice for beginners.",
      address: "456 Yoga Street",
      city: "Yoga City",
      state: "Zen State",
      country: "Mindful Country",
      rating: 5,
    },
    // Add more yoga courses as needed
  ];

  const courses = yogaCourses;

  const withdraw = (courseId) => {
    console.log(`Withdraw from course with ID ${courseId}`);
    alert("Successfully withdrawn from the course");
  };

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
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
            <IconButton color="inherit" onClick={handleNotificationClick}>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Popover
              open={openPopover}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <div>
                <List>
                  <Typography sx={{ color: '#2196f3', marginBottom: '8px' }}>Video uploaded from Course A</Typography>
                  <Typography sx={{ color: '#4caf50', marginBottom: '8px' }}>Message received from John Doe</Typography>
                  <Typography sx={{ color: '#ff9800', marginBottom: '8px' }}>New offers available</Typography>
                </List>
              </div>
            </Popover>
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
          <h1 style={{ padding: "0 20px" }}>My Courses</h1>
          <Container
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
            maxWidth="lg"
            sx={{ mt: 4, mb: 4 }}
          >
            {courses &&
              courses.map((course) => (
                <Card key={course.id} style={{ width: 300, margin: 10 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={course.imgURL}
                    alt={course.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                      {course.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      paragraph
                    >
                      Instructor : {course.instructor} <br /> {course.time} |{" "}
                      {course.date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      Academy: {course.academy.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      Course Fee: ₹ {course.courseFee}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {course.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {course.address}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {course.city}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {course.state}, {course.country}
                    </Typography>
                    <Rating name="read-only" value={course.rating} readOnly />
                    <br />
                    <Button
                      onClick={() => {
                        withdraw(course.id);
                      }}
                      variant="contained"
                      color="error"
                      size="small"
                      style={{ marginTop: 10 }}
                    >
                      Withdraw from course
                    </Button>
                    <br />
                  </CardContent>
                </Card>
              ))}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default User;
