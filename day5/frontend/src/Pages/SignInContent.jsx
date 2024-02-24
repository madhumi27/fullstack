import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SignInContent = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const link = handleSubmit(email);

    // Only navigate if the link is not null
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
        autoFocus
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
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <br />
      <br />

      <button
        style={{
          backgroundColor: "#A7F0BA",
          color: "black", // Optional: Set text color
          padding: "10px", // Optional: Adjust padding
          borderRadius: "5px", // Optional: Add border radius
          // Add any other styles as needed
        }}
        className="secondary-button button-fullwidth"
        type="submit"
      >
        Sign In
      </button>
      <div>
        <br />
        <Link className="form-links" to="/signup" variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
      </div>
    </form>
  );
};

export default SignInContent;
