import React, { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import BannerImage from "../assets/sunset_signin.jpg";

const defaultTheme = createTheme();

// Define SignInContent as a lazy-loaded component
const SignInContent = lazy(() => import("./SignInContent"));

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (email) => {
    const adminEmail = "admin@gmail.com";
    const userEmail = "user@gmail.com";

    if (email === adminEmail) {
      return "/admin";
    } else if (email === userEmail) {
      return "/user";
    } else {
      console.log("Invalid email");
      return null;
    }
  };

  return (
    <div className="App">
      <NavBar />
      <ThemeProvider theme={defaultTheme}>
        <Grid
          container
          component="main"
          sx={{
            height: "100vh",
            backgroundImage:
              "url(https://img.freepik.com/free-photo/full-shot-woman-doing-yoga_23-2151084067.jpg?t=st=1708697968~exp=1708701568~hmac=1b68a33536917aa839e93c5fe4712f6f6a17ffcfd6ab4f604cf23f3233511284&w=360)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2rem",
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Suspense fallback={<div>Loading...</div>}>
              
                <SignInContent
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handleSubmit={() => handleSubmit(email)}
                />
              </Suspense>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Footer />
    </div>
  );
};

export default SignIn;
