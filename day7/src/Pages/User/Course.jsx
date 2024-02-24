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
      imgURL: "data:image/jpeg;base64,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",
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
      imgURL: "data:image/jpeg;base64,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",
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
      imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9g7UVdL2UcD6Ek4lTMIxoKlCGjnFS0pEalL3sj4rnP0ac3L13ZTeOeReDHDonu0jhk4&usqp=CAU",
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
