import React from "react";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import Search from "./Search";
import { useStyles } from "../../utils";

export default function Navbar({
  handleLogOut,
  onChange,
  handleClickSearch,
  query,
}) {
  const classes = useStyles();

  return (
    <AppBar color="primary">
      <Toolbar className={classes.appbar}>
        <Typography variant="h6">React Beer App</Typography>
        <Search
          onChange={onChange}
          handleClickSearch={handleClickSearch}
          query={query}
        />
        <Button
          color="inherit"
          onClick={handleLogOut}
          style={{ textTransform: "none" }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
