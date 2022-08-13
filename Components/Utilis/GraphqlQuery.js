import {gql} from '@apollo/client'

export const GET_VIDEODATA = gql`
query ($videoId: String!){
  commentsByVideoId(videoId: $videoId){
      id
      videoId
      comment
      user{
        email
      }
    }
      unlikesByVideoId(videoId: $videoId){
      id
      videoId
      unlikeVideo
      
    }
      likesByVideoId(videoId: $videoId){
      id
      videoId
      likeVideo
      
    }
}
`
export const GET_VIDEOSDATA = gql`
query($event: String!){
  commentsByEvent(event: $event){
      id
      videoId
      comment
      
    }
      unlikesByEvent(event: $event){
      id
      videoId
      unlikeVideo
      
    }
      likesByEvent(event: $event){
      id
      videoId
      likeVideo
      
    }
}
`
export const POST_COMMENT = gql`
  mutation($commentDTO: CommentDTOInput!){
  saveComment(commentDTO: $commentDTO){
    id
    videoId
    comment
  }
}
`
export const SIGNUP = gql`
mutation($userDTO: UserDTOInput){
  saveUser(userDTO:$userDTO)
}
`
export const LOGIN = gql`
  mutation($loginDTO: LoginDTOInput){
    userLogin(loginDTO:$loginDTO){
    jwt
    response
  }
  }
`

export const VERIFICATION = gql`
mutation($token:String!){
  verifyRegistration(token: $token){
    jwt
    response
  }
}
`
export const DELETE_COMMENT = gql`
  mutation($id: ID!){
  deleteComment(id:$id)
}
`
export const EDIT_COMMENT = gql`
  mutation($editCommentDTOInput: EditCommentDTOInput!){
  editComment(editCommentDTOInput:$editCommentDTOInput){
    id
    videoId
    comment
  }
}
`
export const ADD_LIKE = gql`
 mutation ($addLikeDTO: AddLikeDTOInput!){
  addLike(addLikeDTO:$addLikeDTO){
    id
    likeVideo
  }
}
`
export const ADD_UNLIKE = gql`
 mutation ($addLikeDTO: AddLikeDTOInput!){
  addUnLike(addLikeDTO:$addLikeDTO){
    id
    unlikeVideo
  }
}
`
export const GET_LIKESANDDISLIKES = gql`
query($videoId: String!){
  unlikesByVideoId(videoId: $videoId){
    id
    videoId
    unlikeVideo
    user{
      firstName
      lastName
      email
    }
  }
  likesByVideoId(videoId: $videoId){
    id
    videoId
    likeVideo
    user{
      firstName
      lastName
      email
    }
  }
}
`