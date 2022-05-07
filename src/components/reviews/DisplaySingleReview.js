import React, { useEffect, useState } from "react";
import ReviewCard from "../common/ReviewCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  singlePageCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  commentBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  span: {
    margin: "0 10px",
  },

  comment: {
    marginBottom: 20,
    padding: 10,
  },
  icon: {
    marginBottom: 50,
  },
  date: {
    color: "	#A9A9A9",
    marginLeft: 20,
  },

  inputPaper: {
    padding: "2px 4px",
    display: "flex",
    margin: 10,
    width: 800,
    textAlign: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  showComment: {
    width: 800,
    height: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default function DisplaySingleReview({
  reviews,
  id,
  submitComment,
  isCommenting,
  handleInput,
  handleComment,
  comment,
}) {
  const classes = useStyles();
  const [review, setReview] = useState(null);

  useEffect(() => {
    findOne();
  });

  const findOne = () => {
    const data = reviews.filter((review) => review.id === id);
    setReview(data[0]);
  };

  return (
    <div>
      {review ? (
        <div className={classes.singlePageCard}>
          <ReviewCard
            handleComment={handleComment}
            review={review}
            singlePageCard={true}
          />{" "}
          {review.comment && (
            <Paper className={classes.showComment}>
              <div className={classes.commentBox}>
                <span className={classes.comment}>
                  {review.comment.comment}
                </span>
                <span className={classes.span}>
                  {review.author}
                  <span className={classes.date}>{review.comment.date}</span>
                </span>
              </div>
              <IconButton className={classes.icon} onClick={handleComment}>
                <EditIcon color="primary" />
              </IconButton>
            </Paper>
          )}
          {isCommenting && (
            <Paper component="form" className={classes.inputPaper}>
              <InputBase
                className={classes.input}
                placeholder={
                  review.comment ? "Edit You're Comment" : "Write A Comment"
                }
                onChange={handleInput}
              />

              <Button
                disabled={!comment ? true : false}
                onClick={(e) => {
                  submitComment(review.id);
                }}
                variant="contained"
                color="primary"
                type="submit"
              >
                submit
              </Button>
            </Paper>
          )}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
