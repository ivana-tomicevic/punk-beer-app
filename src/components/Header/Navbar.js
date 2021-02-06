import React from "react";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import Search from "./Search";
import { useStyles } from "../../utils";
import PropTypes from "prop-types";

const Navbar = ({ handleLogOut, onChange, handleClickSearch, query }) => {
  const classes = useStyles();

  return (
    <AppBar
      height="25%"
      color="default"
      elevation={1}
      style={{ backgroundColor: "white" }}
    >
      <Toolbar className={classes.appbar}>
        <Typography variant="h6">Beers</Typography>
        <Search
          onChange={onChange}
          handleClickSearch={handleClickSearch}
          query={query}
        />
        <Button
          variant="outlined"
          onClick={handleLogOut}
          className={classes.button}
        >
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  handleLogOut: PropTypes.func,
  handleClickSearch: PropTypes.func,
  onChange: PropTypes.func,
  query: PropTypes.string,
};

export default Navbar;
