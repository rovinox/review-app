import React, { useEffect, useState } from "react";
import data from "../../data/reviews.json";
import DisplayAllReviews from "../reviews/DisplayAllReviews";
import DisplaySingleReview from "../reviews/DisplaySingleReview";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 40,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));
export default function Home(props) {
  const classes = useStyles();
  const id = props.match.params.id;
  const [reviews, setReviews] = useState(null);
  const [isCommenting, setIsCommenting] = useState(false);
  const [comment, setComment] = useState(null);
  useEffect(() => {
    setReviews(data);
  }, []);

  const submitComment = (id) => {
    setIsCommenting(false);

    let today = new Date();
    let date =
      today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear();

    reviews.forEach((review) => {
      if (review.id === id) {
        review.comment = { comment, date };
      }
      setReviews(reviews);
    });
  };
  const handleComment = () => {
    setIsCommenting(true);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Link className={classes.link} to="/">
            <Typography variant="h6" className={classes.title}>
              ReviewTrackers
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      {id ? (
        <DisplaySingleReview
          isCommenting={isCommenting}
          reviews={reviews}
          id={id}
          handleComment={handleComment}
          setComment={setComment}
          submitComment={submitComment}
          comment={comment}
        />
      ) : (
        <DisplayAllReviews handleComment={handleComment} reviews={reviews} />
      )}
    </>
  );
}
