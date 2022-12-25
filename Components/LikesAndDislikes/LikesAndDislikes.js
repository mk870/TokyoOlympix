import React, { useContext, useState } from "react";
import styles from "../../styles/VideoStyles/VideoStyles.module.css";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { AppContext } from "../../AppContext/AppContext";
import { useMutation } from "@apollo/client";
import {
  ADD_LIKE,
  ADD_UNLIKE,
  GET_LIKESANDDISLIKES,
} from "../Utilis/GraphqlQuery";
import Spinner from "../Spinner/Spinner";
import { useRouter } from "next/router";
import { getEmail } from "../Utilis/UserNameManipulation";

const LikesAndDislikes = ({ video }) => {
  const { value } = useContext(AppContext);
  const { clickedVideo } = useContext(AppContext);
  const { discipline } = useContext(AppContext);
  const router = useRouter();
  const [likeData, likeMutation] = useMutation(ADD_LIKE, {
    refetchQueries: [
      { query: GET_LIKESANDDISLIKES, variables: { videoId: clickedVideo.id } },
    ],
    onError: (error) => console.log(error.message),
    onCompleted: (data) => console.log(data),
  });
  const [unlikeData, unLikeMutation] = useMutation(ADD_UNLIKE, {
    refetchQueries: [
      { query: GET_LIKESANDDISLIKES, variables: { videoId: clickedVideo.id } },
    ],
    onError: (error) => console.log(error),
    onCompleted: (data) => console.log(data),
  });
  const addLike = () => {
    if (value) {
      likeData({
        variables: {
          addLikeDTO: {
            likeVideo: 1,
            videoId: clickedVideo.id,
            event: discipline,
            email: getEmail(value),
          },
        },
      });
    } else {
      router.push("/login");
    }
  };
  const addUnLike = () => {
    if (value) {
      unlikeData({
        variables: {
          addLikeDTO: {
            unlikeVideo: 1,
            videoId: clickedVideo.id,
            event: discipline,
            email: getEmail(value),
          },
        },
      });
    } else {
      router.push("/login");
    }
  };

  return (
    <div className={styles.likes}>
      {likeMutation.loading || unLikeMutation.loading ? (
        <Spinner />
      ) : likeMutation.error || unLikeMutation.error ? (
        <h4 className={styles.error}>An error occurred</h4>
      ) : (
        <div className={styles.like}>
          <div className={styles.number}>
            <AiFillLike
              color={"rgb(0,212,212)"}
              fontSize={24}
              className={styles.icon2}
              onClick={addLike}
            />
            {`${video.data.likesByVideoId.length} ${
              video.data.likesByVideoId.length === 1 ? "Like" : "Likes"
            }`}
          </div>
          <div className={styles.number}>
            <AiFillDislike
              color={"crimson"}
              fontSize={24}
              className={styles.icon2}
              onClick={addUnLike}
            />
            {`${video.data.unlikesByVideoId.length} ${
              video.data.unlikesByVideoId.length === 1 ? "Dislike" : "Dislikes"
            }`}
          </div>
        </div>
      )}
    </div>
  );
};

export default LikesAndDislikes;
