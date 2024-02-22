import React from 'react';
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
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
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
  const [open, setOpen] = React.useState(true);
  
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const courses = [
    // Sample course data
    {
      id: 1,
      imgURL: "https://example.com/image.jpg",
      name: "Sample Course",
      instructor: "John Doe",
      time: "10:00 AM",
      date: "2024-02-22",
      academy: { name: "Sample Academy" },
      courseFee: 1000,
      description: "Sample course description.",
      address: "123 Sample Street",
      city: "Sample City",
      state: "Sample State",
      country: "Sample Country",
      rating: 4,
    },
    // Add more courses as needed
  ];

  const withdraw = (courseId) => {
    // Handle withdrawal logic
    console.log(`Withdraw from course with ID ${courseId}`);
    // Add any additional logic or requests here
    alert("Successfully withdrawn from the course");
  };

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
