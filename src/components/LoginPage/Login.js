import React from "react";
import {
  Link,
  Grid,
  Container,
  Typography,
  Button,
  Paper,
  TextField,
} from "@material-ui/core";
import "../../index.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  const paperStyle = {
    paper: {
      padding: "20px",
      height: "80vh",
      margin: "20px auto",
      fontFamily: "Open Sans, 'sans-serif'",
    },
    button: {
      textTransform: "none",
      backgroundColor: "#757de8",
    },
  };

  return (
    <Grid container align="center" justify="center">
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={paperStyle.paper}>
          <Typography component="h1" variant="h5">
            Beer App
          </Typography>
          <form onSubmit={(e) => e.preventDefault()} style={paperStyle.paper}>
            <TextField
              margin="normal"
              id="email"
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>{emailError}</p>
            <TextField
              margin="normal"
              fullWidth="2"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>{passwordError}</p>
            <div>
              {hasAccount ? (
                <>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleLogin}
                    style={paperStyle.button}
                  >
                    Sign In
                  </Button>
                  <p>
                    <span>Don't have an account?</span>
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      <Link href="#" variant="body2">
                        Sign Up
                      </Link>
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <Button
                    style={paperStyle.button}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSignUp}
                  >
                    Sign Up
                  </Button>
                  <p className="p">
                    Have an account?
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      <Link href="#" variant="body2">
                        Sign In
                      </Link>
                    </span>
                  </p>
                </>
              )}
            </div>
          </form>
        </Paper>
      </Container>
    </Grid>
  );
};

Login.propTypes = {};

export default Login;
