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
      padding: 20,
      height: "70vh",
      margin: "40px auto",
    },
    button: {
      textTransform: "none",
      backgroundColor: "#757de8",
    },
  };

  return (
    <Grid container align="center" justify="center">
      <Container component="main" maxWidth="xs">
        <Paper elevation={10} style={paperStyle.paper}>
          <Typography component="h1" variant="h5">
            Beer App
          </Typography>
          <form onSubmit={(e) => e.preventDefault()}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
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
              fullWidth
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
                    fullWidth
                    color="primary"
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
                  <p>
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
