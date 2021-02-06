import React, { useState } from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { useStyles } from "../../utils";
import BeerInfo from "./Card/BeerInfo";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const BeerList = ({ results, fetchMoreBeers, hasMore }) => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  return (
    <InfiniteScroll
      dataLength={results.length}
      next={fetchMoreBeers}
      hasMore={true}
      loader={
        <Loader
          timeout={1000}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          type="ThreeDots"
          color="#00BFFF"
          height={60}
          width={60}
        />
      }
    >
      <Grid container className={classes.root}>
        {results &&
          results.map((beers, id) => (
            <Grid item className={classes.cards} key={id}>
              <Card
                className={classes.card}
                onClick={() =>
                  setSelected(
                    results.find((b) => b.id === beers.id),
                    setOpen(true)
                  )
                }
              >
                <CardContent className={classes.cardContent}>
                  <img
                    src={beers.image_url}
                    alt={beers.name}
                    style={{
                      height: "auto",
                      maxHeight: " 160px",
                      width: "auto",
                      maxWidth: "160px",
                    }}
                  />
                  <Typography variant="h5" component="h4">
                    {beers.name}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    ABV:{" "}
                    <span
                      style={{
                        border: "1px solid grey",
                        borderRadius: "12px",
                        margin: "0 auto",
                        maxWidth: "max-content",
                        padding: "1px 3px",
                      }}
                    >
                      {beers.abv}%
                    </span>
                  </Typography>
                  <Typography variant="caption" gutterBottom>
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
    </InfiniteScroll>
  );
};

BeerList.propTypes = {
  results: PropTypes.array,
};

export default BeerList;
