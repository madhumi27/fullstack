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
import BannerImage from "../assets/sunset_signin.jpg"; // Add your image path here

const defaultTheme = createTheme();

export default function SignUp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPass);
    // Redirect or perform other actions based on form submission
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
            backgroundImage: `url(${BannerImage})`, // Use the image here
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
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <button
                  className="secondary-button button-fullwidth"
                  type="submit"
                >
                  Sign Up
                </button>
                <div className="form-links-container">
                  <Link className="form-links" to="#" variant="body2">
                    Forgot password?
                  </Link>
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
