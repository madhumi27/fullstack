import React, { useState } from "react";
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
import BannerImage from "../assets/signupimg.jpeg"; // Add your image path here

const defaultTheme = createTheme();

export default function SignUp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous error messages
    setNameError("");
    setPhoneError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPassError("");

    // Simple validation checks
    if (!name) {
      setNameError("Name is required");
    }
    if (!phone) {
      setPhoneError("Phone Number is required");
    }
    if (!email) {
      setEmailError("Email Address is required");
    } else {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Invalid email address");
      }
    }
    if (!password) {
      setPasswordError("Password is required");
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    }
    if (!confirmPass) {
      setConfirmPassError("Confirm Password is required");
    } else if (password !== confirmPass) {
      setConfirmPassError("Passwords do not match");
    }

    // If any error is present, stop form submission
    if (nameError || phoneError || emailError || passwordError || confirmPassError) {
      return;
    }

    // Your form submission logic goes here
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPass);

    // Simulating a successful signup
    console.log("Signup successful!");

    // Manually navigate to "/signin"
    window.location.href = "/signin";
  };

  return (
    <div className="App">
      <NavBar></NavBar>
      <ThemeProvider theme={defaultTheme}>
        <Grid
          container
          component="main"
          sx={{
            height: "100vh",
            backgroundImage: `url(${BannerImage})`,
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
                Sign Up
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  type="text"
                  autoFocus
                  error={!!nameError}
                  helperText={nameError}
                />
                <TextField
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  type="number"
                  error={!!phoneError}
                  helperText={phoneError}
                />
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email"
                  error={!!emailError}
                  helperText={emailError}
                />
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={!!passwordError}
                  helperText={passwordError}
                />
                <TextField
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  name="confirm-password"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                  autoComplete="current-password"
                  error={!!confirmPassError}
                  helperText={confirmPassError}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                
                <button
                  style={{
                    backgroundColor: "#A7F0BA",
                    color: "black",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  className="secondary-button button-fullwidth"
                  type="submit"
                >
                  Sign Up
                </button>
                
                <br />
                <div className="form-links-container">
                  <Link className="form-links" to="/signin" variant="body2">
                    {"Already have an account? Sign In"}
                  </Link>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Footer />
    </div>
  );
}
