import { makeStyles, fade } from "@material-ui/core";

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      justifyContent: "center",
      paddingTop: "4rem",
    },
    appbar: {
      justifyContent: "space-between",
      flexGrow: 1,
    },
    card: {
      width: "300px",
      height: "300px",
      cursor: "pointer",
    },
    cards: {
      padding: "2rem",
    },
    cardContent: {
      textAlign: "center",
      wordWrap: "break-word",
      fontFamily: "Open Sans, 'sans-serif'",
    },
    button: {
      textTransform: "none",
      fontSize: "10px",
      borderRadius: "15px",
    },
    search: {
      position: "relative",
      borderRadius: "8px",
      backgroundColor: " #f8f8ff",
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "grey",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 4, 1, 0),
      fontSize: "12px",
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }),
  { index: 1 }
);
