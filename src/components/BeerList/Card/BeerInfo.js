import React from "react";
import {
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  CardMedia,
} from "@material-ui/core";
import PropTypes from "prop-types";

const BeerItem = ({ selected, open, handleClose }) => {
  const beer = {
    padding: "0 2rem",
    float: "left",
    height: "auto",
    maxHeight: " 380px",
    width: "auto",
    maxWidth: "400px",
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle onClose={handleClose}>{selected.name}</DialogTitle>
      <CardContent>
        <CardMedia>
          <img src={selected.image_url} alt={selected.name} style={beer} />
        </CardMedia>

        <Typography variant="h5" gutterBottom>
          ABV: {selected.abv} %
        </Typography>
        <Typography
          gutterBottom
          variant="overline"
          color="textSecondary"
          display="block"
        >
          {selected.tagline}
        </Typography>
        <Typography variant="caption">{selected.description}</Typography>
        <Typography variant="body2">{selected.brewers_tips}</Typography>
      </CardContent>
    </Dialog>
  );
};

BeerItem.propTypes = {
  selected: PropTypes.object,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default BeerItem;
