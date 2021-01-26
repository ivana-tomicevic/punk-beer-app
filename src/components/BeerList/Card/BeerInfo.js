import React from "react";
import { CardContent, Typography, Dialog, Button } from "@material-ui/core";

const BeerItem = ({ selected, open, handleClose }) => {
  return (
    <Dialog open={open}>
      <CardContent>
        <img
          src={selected.image_url}
          alt={selected.name}
          style={{
            padding: "0 2rem",
            float: "left",
            height: "auto",
            maxHeight: " 380px",
            width: "auto",
            maxWidth: "400px",
          }}
        />
        <Typography variant="h3" component="h1" gutterBottom>
          {selected.name}
        </Typography>
        <Typography variant="h5" gutterBottom>
          ABV: {selected.abv}%
        </Typography>
        <Typography variant="overline" gutterBottom>
          {selected.tagline}
        </Typography>
        <Typography variant="caption" gutterBottom>
          {selected.description}
        </Typography>
      </CardContent>
      <Button onClick={handleClose}>Close</Button>
    </Dialog>
  );
};

export default BeerItem;
