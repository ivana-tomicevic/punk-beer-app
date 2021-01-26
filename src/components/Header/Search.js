import React from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "../../utils";

function Search({ handleClickSearch, query, onChange }) {
  const classes = useStyles();

  return (
    <form className={classes.search} onSubmit={handleClickSearch}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        value={query}
        onChange={onChange}
        placeholder="Search..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </form>
  );
}

export default Search;
