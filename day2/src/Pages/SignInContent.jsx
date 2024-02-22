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
  return (
    <form onSubmit={handleSubmit}>
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
      <Link to="/user">
        <button className="secondary-button button-fullwidth" type="submit">
          Sign In
        </button>
      </Link>
      <div>
        <br />
        <Link className="form-links" href="#" variant="body2">
          Forgot password?
        </Link>
        <br />
        <br />
        <Link className="form-links" to="/signup" variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
      </div>
    </form>
  );
};

export default SignInContent;
