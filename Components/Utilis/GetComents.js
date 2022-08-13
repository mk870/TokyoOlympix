import {gql} from '@apollo/client'

export const GetComments = (data,id) =>{
  const comments = data.commentsByEvent.filter(comment=>comment.videoId === id)
  return comments.length
} 

export const GetLikes = (data,id) =>{
  const likes = data.likesByEvent.filter(like=>like.videoId === id)
  return likes.length
}

export const GetDislikes = (data,id) =>{
 const dislikes = data.unlikesByEvent.filter(dislike=>dislike.videoId === id)
 return dislikes.length
}

export const GetVidComments = (data,id) =>{
 const comments = data.commentsByVideoId.filter(comment=>comment.videoId === id)
 return comments.length
} 

export const GetVidLikes = (data,id) =>{
 const likes = data.likesByVideoId.filter(like=>like.videoId === id)
 return likes.length
}

export const GetVidDislikes = (data,id) =>{
const dislikes = data.unlikesByVideoId.filter(dislike=>dislike.videoId === id)
return dislikes.length
}