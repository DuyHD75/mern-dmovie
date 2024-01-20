import { LoadingButton } from "@mui/lab";
import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import Container from "./Container";
import reviewApi from "../../api/modules/review.api";
import TextAvatar from "./TextAvatar";

const MediaReviewItem = ({ review, onRemoved }) => {
  const { user } = useSelector((state) => state.user);
  const [onRequest, setOnRequest] = useState(false);

  const onRemove = async () => {
    if (onRequest) return;

    setOnRequest(true);

    const { response, err } = await reviewApi.remove({ reviewId: review.id });

    if (err) toast.error(err.message);

    if (response) onRemoved(review.id);
  }

  return (
    <Box sx={{
      padding: 2,
      borderRadius: "5px",
      position: "relative",
      opacity: onRequest ? 0.6 : 1,
      "&:hover": { backgroundColor: "background.paper" }
    }}>
      <Stack direction="row" spacing={2}>
        {/* avatar */}
        {review.user && <TextAvatar text={review.user.displayName} />}
        {/* avatar */}
        <Stack spacing={2} flexGrow={1}>

          <Stack spacing={1}>
            <Typography variant="h6" fontWeight="700">
              {review.user.displayName}
            </Typography>
            <Typography variant="caption">
              {dayjs(review.createdAt).format("DD-MM-YYYY HH:mm:ss")}
            </Typography>
          </Stack>

          <Typography variant="body1" textAlign="justify">
            {review.content}
          </Typography>
          {user && user.id === review.user.id && (
            <LoadingButton
              variant="contained"
              startIcon={<DeleteIcon />}
              loadingPosition="start"
              loading={onRequest}
              onClick={onRemove}
              sx={{
                position: { xs: "relative", md: "absolute" },
                right: { xs: 0, md: "10px" },
                marginTop: { xs: 2, md: 0 },
                width: "max-content"
              }}
            >
              remove
            </LoadingButton>
          )}
        </Stack>
      </Stack>
    </Box>
  );

}


const MediaReview = ({ reviews, media, mediaType }) => {


  const { user } = useSelector((state) => state.user);
  const [reviewList, setReviewList] = useState([]);
  const [filteredReview, setFilteredReview] = useState([]);
  const [content, setContent] = useState("");
  const [reviewCount, setReviewCount] = useState(0);
  const [page, setPage] = useState(1);
  const [onRequest, setOnRequest] = useState(false);

  const skip = 4;

  useEffect(() => {
    setReviewList([...reviews]);
    setFilteredReview([...reviews].splice(0, 4));
    setReviewCount(reviews.length);
  }, [reviews])


  const addReview = async () => {
    setOnRequest(true)

    const body = {
      mediaType: mediaType,
      mediaId: media.id,
      content: content,
      mediaPoster: media.poster_path,
      mediaTitle: media.title || media.name
    }

    const { response, err } = await reviewApi.add(body);

    setOnRequest(false);
    if (err) toast.error(err.message);

    if (response) {
      toast.success("Post review successfully !");
      setFilteredReview([...filteredReview, response]);
      setReviewCount(reviewCount + 1);
      setContent("");
    }
  }

  const onLoadMoreReview = () => {
    setFilteredReview([...filteredReview, ...[...filteredReview].splice(page * skip, skip)]);
    setPage(page + 1);
  }

  const onRemoveReview = (id) => {
    if (reviewList.findIndex(e => e.id === id) !== -1) {
      const newListReview = [...reviewList].filter(e => e.id !== id);
      setReviewList(newListReview);
      setFilteredReview([...newListReview].splice(0, page * skip));
    } else {
      setFilteredReview([...filteredReview].filter(e => e.id !== id));
    }
    setReviewCount(reviewCount - 1);
    toast.success("Remove review successfully!");
  }

  return (
    <Fragment>
      <Container header={`Reviews (${reviewCount})`}>
        <Stack spacing={4} marginBottom={2}>

          {filteredReview.map((item) => (
            item.user ? <Box key={item.id}>
              <MediaReviewItem review={item} onRemoved={onRemoveReview} />
              <Divider sx={{
                display: { xs: "block", md: "none" }
              }} />
            </Box> : null
          ))}

          {filteredReview.length < reviewList.length && (
            <Button onClick={onLoadMoreReview}>load more</Button>
          )}
        </Stack>

        {user && (
          <Fragment>
            <Divider />
            <Stack direction="row" spacing={2}>
              <TextAvatar text={user.displayName} />

              <Stack spacing={2} flexGrow={1}>

                <Typography variant="h6" fontWeight="700">
                  {user.displayName}
                </Typography>

                <TextField
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  multiline
                  rows={4}
                  placeholder="Write your review"
                  variant="outlined"
                />
                <LoadingButton
                  variant="contained"
                  size="large"
                  sx={{ width: "max-content" }}
                  startIcon={<SendOutlinedIcon />}
                  loadingPosition="start"
                  loading={onRequest}
                  onClick={addReview}
                >
                  Post
                </LoadingButton>
              </Stack>
            </Stack>
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
}

export default MediaReview;
