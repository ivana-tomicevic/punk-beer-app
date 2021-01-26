import React, { useState } from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { useStyles } from "../../utils";
import BeerInfo from "./Card/BeerInfo";

const BeerList = ({ beerList }) => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {beerList.map((beers, id) => (
        <Grid item className={classes.cards} key={id}>
          <Card
            className={classes.card}
            onClick={() =>
              setSelected(
                beerList.find((b) => b.id === beers.id),
                setOpen(true)
              )
            }
          >
            <CardContent>
              <img
                src={beers.image_url}
                alt={beers.name}
                style={{
                  height: "auto",
                  maxHeight: " 200px",
                  width: "auto",
                  maxWidth: "200px",
                }}
              />
              <Typography variant="h5" component="h2" gutterBottom>
                {beers.name}
              </Typography>
              <Typography variant="caption" gutterBottom>
                ABV: {beers.abv}%
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                {beers.tagline}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {selected && (
        <BeerInfo
          open={open}
          selected={selected}
          handleClose={() => setOpen(false)}
        />
      )}
    </Grid>
  );
};

export default BeerList;
