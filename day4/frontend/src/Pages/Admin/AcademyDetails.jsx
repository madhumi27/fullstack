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
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import { Link, useNavigate } from "react-router-dom";
import { mainListItems } from "../../Components/Admin/ListItems";

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

export default function AcademyDetails() {
  const [academies, setAcademies] = React.useState([]);
  const navigate = useNavigate();

  // Mocked data for academies. In a real application, you would fetch this data from an API.
  React.useEffect(() => {
    const mockAcademies = [
      {
        id: 1,
        name: "Academy 1",
        imgURL: "https://example.com/image1.jpg",
        description: "Description 1",
        city: "City 1",
        state: "State 1",
        country: "Country 1",
        ratings: 4,
      },
      {
        id: 2,
        name: "Academy 2",
        imgURL: "https://example.com/image2.jpg",
        description: "Description 2",
        city: "City 2",
        state: "State 2",
        country: "Country 2",
        ratings: 3.5,
      },
      // Add more academies as needed
    ];

    setAcademies(mockAcademies);
  }, []);

  async function handleDelete(academyId) {
    // You can add delete logic here.
    const updatedAcademies = academies.filter((academy) => academy.id !== academyId);
    setAcademies(updatedAcademies);
  }

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
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
          <h1 style={{ padding: "0 20px" }}>Academies</h1>
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
            {academies &&
              academies.map((academy) => (
                <Card style={{ width: 300, margin: 10 }} key={academy.id}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={academy.imgURL}
                    alt={academy.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                      {academy.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {academy.description}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      paragraph
                    >
                      {academy.city}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      paragraph
                    >
                      {academy.state}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      paragraph
                    >
                      {academy.country}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      paragraph
                    ></Typography>
                    <Rating name="read-only" value={academy.ratings} readOnly />
                    <br />
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginTop: 10 }}
                      onClick={() => {
                        // Handle navigation to courses page
                        navigate("/admin/academy/courses", {
                          state: {
                            id: academy.id,
                            name: academy.name,
                          },
                        });
                      }}
                    >
                      View Courses
                    </Button>
                    <br />
                    <Link
                      to={"/admin/academy/edit"}
                      state={{ academy: academy }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginTop: 10 }}
                      >
                        Edit
                      </Button>
                    </Link>{" "}
                    <Button
                      onClick={() => {
                        // Handle academy deletion
                        handleDelete(academy.id);
                      }}
                      variant="contained"
                      color="error"
                      size="small"
                      style={{ marginTop: 10 }}
                    >
                      Delete
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
