import React from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "../../utils";
import PropTypes from "prop-types";

const Search = ({ query, onChange }) => {
  const classes = useStyles();

  return (
    <form>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          value={query}
          onChange={onChange}
          placeholder="Search"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
    </form>
  );
};

Search.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func,
};

export default Search;
