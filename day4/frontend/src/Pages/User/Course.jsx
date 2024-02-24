import React, { useState } from "react";
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
import { mainListItems } from "../../Components/User/ListItems";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";

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

export default function Course() {
  const [open, setOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const toggleDrawer = () => {
    setOpen(!open);
  };

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
    },
    {
      id: 3,
      name: "Yoga for Beginners",
      instructor: "Yogi Liam",
      time: "10:30 AM - 12:30 PM",
      date: "Mon, Wed",
      imgURL: "https://via.placeholder.com/300",
      academy: { name: "Zen Yoga Hub" },
      courseFee: 800,
      description: "A gentle introduction to the fundamentals of yoga for beginners.",
      address: "789 Peaceful Lane",
      city: "Serenitytown",
      state: "TX",
      country: "USA",
      rating: 4.7,
    },
    // Add more yoga courses as needed
  ];

  const apply = (courseId) => {
    console.log(`Applied for course with ID: ${courseId}`);
    alert("Successfully applied for course");
  };

  const filteredCourses = yogaCourses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <List component="nav">{mainListItems}</List>
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
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            maxWidth="lg"
            sx={{ mt: 4, mb: 4 }}
          >
            <Typography variant="h4" component="div" gutterBottom>
              Browse Courses
            </Typography>
            <TextField
              label="Search Courses"
              variant="outlined"
              margin="normal"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
              {filteredCourses.map((course) => (
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
                      Instructor: {course.instructor} <br /> {course.time} |{" "}
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
                        apply(course.id);
                      }}
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginTop: 10 }}
                    >
                      Apply for course
                    </Button>
                    <br />
                  </CardContent>
                </Card>
              ))}
            </Container>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
