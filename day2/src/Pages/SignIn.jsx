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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your sign-in logic here (without axios)
    console.log("Email:", email, "Password:", password);
    // Navigate or perform other actions as needed
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
            backgroundImage: "url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
                  handleSubmit={handleSubmit}
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
