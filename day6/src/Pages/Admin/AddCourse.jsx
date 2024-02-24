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
import { mainListItems } from "../../Components/Admin/ListItems";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AddCourse() {
  const [academies, setAcademies] = React.useState([]);
  const [course, setCourse] = React.useState({
    name: "",
    description: "",
    courseFee: "",
    imgURL: "",
    date: "",
    time: "",
    instructor: "",
    address: "",
    city: "",
    state: "",
    country: "",
    rating: "",
    academy: {
      id: 7,
    },
  });
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(course);
    // You would typically make an API call here to submit the form data.
    // For demonstration purposes, you can log the data instead.
    console.log("Form data submitted:", course);
    alert("Course added");
  }

  React.useEffect(() => {
    // Mocked data for academies. In a real application, you would fetch this data from an API.
    const mockAcademies = [
      { id: 1, name: "Academy 1" },
      { id: 2, name: "Academy 2" },
      // Add more academies as needed
    ];
    setAcademies(mockAcademies);
  }, []);

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
              Admin Dashboard
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

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Add Course
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <label>Course Name*</label>
                  <TextField
                    value={course.name}
                    onChange={(e) => {
                      setCourse((course) => ({
                        ...course,
                        name: e.target.value,
                      }));
                    }}
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                  />
                  <label>Course Description*</label>
                  <textarea
                    value={course.description}
                    onChange={(e) => {
                      setCourse((course) => ({
                        ...course,
                        description: e.target.value,
                      }));
                    }}
                    className="textfield-contact"
                    required
                    autoFocus
                  />
                  <label>Image URL*</label>
                  <TextField
                    value={course.imgURL}
                    onChange={(e) => {
                      setCourse((course) => ({
                        ...course,
                        imgURL: e.target.value,
                      }));
                    }}
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                  />
                  <label>Academy*</label>
                  <br />
                  <select
                    value={course.academy.id}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setCourse((course) => ({
                        ...course,
                        academy: {
                          id: e.target.value,
                        },
                      }));
                    }}
                    style={{ width: "100%", padding: "10px" }}
                  >
                    {academies &&
                      academies.map((academy) => (
                        <option key={academy.id} value={academy.id}>
                          {academy.id}
                        </option>
                      ))}
                  </select>
                  <br />
                  <br />
                  <label>Time*</label>
                  <TextField
                    value={course.time}
                    onChange={(e) => {
                      setCourse((course) => ({
                        ...course,
                        time: e.target.value,
                      }));
                    }}
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                  />
                  <label>Date*</label>
                  <TextField
                    value={course.date}
                    onChange={(e) => {
                      setCourse((course) => ({
                        ...course,
                        date: e.target.value,
                      }));
                    }}
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                  />
                  <label>Course Fee*</label>
                  <TextField
                    value={course.courseFee}
                    onChange={(e) => {
                      setCourse((course) => ({
                        ...course,
                        courseFee: e.target.value,
                      }));
                    }}
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                  />
                  <label>Ratings*</label>
                  <TextField
                    value={course.rating}
                    onChange={(e) => {
                      setCourse((course) => ({
                        ...course,
                        rating: Number(e.target.value),
                      }));
                    }}
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                  />
                  <label>Instructor*</label>
                  <TextField
                    value={course.instructor}
                    onChange={(e) => {
                      setCourse((course) => ({
                        ...course,
                        instructor: e.target.value,
                      }));
                    }}
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                  />
                  <label>Address</label>
                  <textarea
                    value={course.address}
                    onChange={(e) => {
                      setCourse((course) => ({
                        ...course,
                        address: e.target.value,
                      }));
                    }}
                    className="textfield-contact"
                    required
                    autoFocus
                  />
                  <label>City*</label>
                  <TextField
                    value={course.city}
                    onChange={(e) => {
                      setCourse((course) => ({
                        ...course,
                        city: e.target.value,
                      }));
                    }}
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                  />
                  <label>State*</label>
                  <TextField
                    value={course.state}
                    onChange={(e) => {
                      setCourse((course) => ({
                        ...course,
                        state: e.target.value,
                      }));
                    }}
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                  />
                  <label>Country*</label>
                  <TextField
                    value={course.country}
                    onChange={(e) => {
                      setCourse((course) => ({
                        ...course,
                        country: e.target.value,
                      }));
                    }}
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                  />
                  <div>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Add Course
                    </Button>
                  </div>
                </Box>
              </Box>
            </Container>{" "}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
