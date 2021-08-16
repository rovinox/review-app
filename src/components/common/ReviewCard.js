import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ForumIcon from "@material-ui/icons/Forum";
import Typography from "@material-ui/core/Typography";
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 5,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const useStyles = makeStyles(() => ({
  card: {
    width: 300,
    margin: 15,
  },
  singlePageCard: {
    width: 800,

    margin: 15,
    display: "flex",
    justifyContent: "center",
  },

  CardActions: {
    display: "flex",
    justifyContent: "space-around",
  },
  date: {
    color: "	#A9A9A9",
  },
}));
export default function ReviewCard({
  review,
  singlePageCard = false,
  handleComment,
}) {
  const classes = useStyles();
  const time = new Date(Date.parse(review.published_at)).toLocaleDateString(
    "en-US"
  );
  const displayBadge = () => {
    if (!singlePageCard && review.comment) {
      return 1;
    } else if (singlePageCard && review.comment) {
      return 0;
    }
  };
  return (
    <div className={singlePageCard ? classes.singlePageCard : classes.card}>
      <Card>
        <CardHeader
          title={review.place}
          subheader={<Rating name="read-only" value={review.rating} readOnly />}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {!singlePageCard
              ? review.content.slice(0, 30) + "....."
              : review.content}
          </Typography>
        </CardContent>
        <CardActions className={classes.CardActions}>
          <span>{review.author}</span>
          <span className={classes.date}>{time}</span>

          <StyledBadge badgeContent={displayBadge()} color="primary">
            <Tooltip title="Add Comment">
              <IconButton onClick={handleComment}>
                <ForumIcon color="primary" />
              </IconButton>
            </Tooltip>
          </StyledBadge>
        </CardActions>
      </Card>
    </div>
  );
}
