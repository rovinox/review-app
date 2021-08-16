import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";

import { Link } from "react-router-dom";
import ReviewCard from "../common/ReviewCard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  card: {
    width: 300,

    margin: 15,
  },
  link: {
    textDecoration: "none",
  },
  root: {
    flexGrow: 1,
  },
  CardActions: {
    display: "flex",
    justifyContent: "space-around",
  },
}));
export default function DisplayReviews({ reviews, handleComment }) {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            {reviews ? (
              reviews.map((review) => (
                <Link
                  key={review.id}
                  to={`/${review.id}`}
                  className={classes.link}
                >
                  <ReviewCard handleComment={handleComment} review={review} />
                </Link>
              ))
            ) : (
              <CircularProgress />
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
