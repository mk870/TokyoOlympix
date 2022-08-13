import React, { useContext, useState} from 'react'
import { AppContext } from '../AppContext/AppContext' 
import styles from '../styles/VideoStyles/VideoStyles.module.css'
import buttonStyles from '../styles/Button/Button.module.css'
import {useQuery, useMutation} from '@apollo/client'
import {useRouter} from 'next/router'
import {FaComment, FaEdit} from 'react-icons/fa'
import {BsPersonCircle} from 'react-icons/bs'
import {GiCancel} from 'react-icons/gi'
import Spinner from '../Components/Spinner/Spinner'
import { DELETE_COMMENT, EDIT_COMMENT, GET_VIDEODATA, POST_COMMENT } from '../Components/Utilis/GraphqlQuery'
import Popup from '../Components/Popups/Popup'
import LikesAndDislikes from '../Components/LikesAndDislikes/LikesAndDislikes'
import { reverseList } from '../Components/Utilis/ReverseList'
import { getEmail, getFirstTwoLetters, getUserName } from '../Components/Utilis/UserNameManipulation'


const Video = () => {
  const{clickedVideo} = useContext(AppContext)
  let video = useQuery(GET_VIDEODATA,{
    variables: {videoId: clickedVideo.id}})
  const{videos} = useContext(AppContext)
  const{value} = useContext(AppContext)
  const{discipline} = useContext(AppContext)
  const{videoList}=useContext(AppContext)
  const{setVideoList}=useContext(AppContext)
  const{setClickedVideo} = useContext(AppContext)
  const [comment,setComment] = useState('')
  const [editComment, setEditComment] = useState('')
  const [popup,setPopup] = useState('')
  
  const router = useRouter()
  const cleanSnippet = (snippet) =>{
    return snippet.replace(/(https?|ftp):\/\/[\.[a-zA-Z0-9\/\-]+/,' ')
  }
  
  const [commentData,mutation] = useMutation(POST_COMMENT,{
    refetchQueries:[
      {query: GET_VIDEODATA,variables: {videoId: clickedVideo.id}}
      
    ],onError:error=>console.log(error)
  })
  const [deleteData,deleteMutation] = useMutation(DELETE_COMMENT,{
    refetchQueries:[
      {query: GET_VIDEODATA,variables: {videoId: clickedVideo.id}}
      
    ],onError:error=>console.log(error),onCompleted:()=>setPopup('Delete successful')
  })
  const [editData,editMutation] = useMutation(EDIT_COMMENT,{
    refetchQueries:[
      {query: GET_VIDEODATA,variables: {videoId: clickedVideo.id}}
      
    ],onError:error=>console.log(error),onCompleted:()=>setPopup('Edit successful')
    
  })
  
  const postComment = () => {
    if(value){
      commentData({variables: {commentDTO:{
        comment : comment,
        event: discipline,
        videoId: clickedVideo.id,
        email: getEmail(value)
      }}})
    setComment('')
    }else {
      router.push('/login')
    }
  }
  const deleteComment =(id)=>{
    deleteData({variables:{id: id}})
  }
  const editCommentPost = () =>{
    
      editData({variables:{
        editCommentDTOInput:{
          id: editComment.id,
          comment: editComment.comment
        }
      }})
      setEditComment('')
    
  }

  const getComment = comment =>{
    setEditComment(comment)
  }
  
    return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <div className={styles.video}>
      <div className={styles.embed}>
            <iframe className={styles.iframe} title="videoplayer" src={ `https://www.youtube.com/embed/${clickedVideo.id}`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
          </div>
          <div className={styles.segment}>
            <h4 className={styles.header}>{cleanSnippet(clickedVideo.snippet.title)}</h4>
            
          </div>
          {video.loading && <div className={styles.loader}><Spinner/></div>}
          {video.error && <h4 className={styles.error}>Sorry an error occured</h4>}
          {video.data && <div className={styles.graphql}>
            <LikesAndDislikes video={video}/>
            <div className={styles.comments}>
              
              <div className={styles.commentsNum}>
              {`${video.data.commentsByVideoId.length} ${video.data.commentsByVideoId.length===1?'Comment':'Comments'}`}
              </div>
              <div className={styles.input}>
                <div className={styles.name}>
                  {value?getFirstTwoLetters(getEmail(value)):
                  <BsPersonCircle color={'aliceblue'}  fontSize={20}/>}
                </div>
                <div className={styles.addcomment}>
                <input type="text" placeholder='add a comment' value={comment} onChange={(e)=>setComment(e.target.value)}/>
                {comment?<div className={styles.btn}>
                  <button className={buttonStyles.commentBtn} onClick={postComment}>
                    <FaComment color='aliceblue' className={styles.icon}/>
                    Comment
                  </button>
                  <button className={buttonStyles.commentBtn} onClick={()=>setComment('')}>
                  <GiCancel color='aliceblue' className={styles.icon}/>
                    Cancel
                  </button>
                </div>:''}
                
                </div>
              </div>
              {mutation.loading || editMutation.loading || deleteMutation.loading?<Spinner/>:editMutation.error || deleteMutation.error ||mutation.error?<h4 className={styles.error}>An error occured</h4>:
              <div className={styles.list}>
                {video.data.commentsByVideoId.length? reverseList(video.data.commentsByVideoId).map((comment,index)=>(
                  <div className={styles.itemComment}key={index}>
                    <div className={styles.comment}>
                      <div className={styles.user}>
                        <span>{getUserName(comment.user.email)}</span>
                      </div>
                      <div className={styles.wrap}>
                        <div className={styles.text}>
                          {editComment && editComment.id === comment.id?
                          <div className={styles.editing}>
                            <input type="text" 
                            value={editComment.comment} 
                            className={styles.editInput}
                            onChange={(e)=>setEditComment(
                              (prevState) => {
                                return({
                                  ...prevState,
                                  comment: e.target.value
                                });
                              }
                            )}
                            />
                            <div className={styles.btn}>
                              <button className={buttonStyles.commentBtn} onClick={editCommentPost}>
                                <FaComment color='aliceblue' className={styles.icon}/>
                                Edit
                              </button>
                              <button className={buttonStyles.commentBtn} onClick={()=>setEditComment('')}>
                                <GiCancel color='aliceblue' className={styles.icon}/>
                                Cancel
                              </button>
                            </div>
                          </div>:<span>{comment.comment}</span>
                          }
                        </div>
                        {getEmail(value) === comment.user.email?<div className={styles.edits}>
                          <button className={buttonStyles.editbtn} onClick = {()=>getComment(comment)}>
                            <FaEdit color='aliceblue' className={styles.icon}/>
                            Edit
                          </button>
                          <button className={buttonStyles.editbtn} onClick={()=>deleteComment(comment.id)}>
                            <GiCancel color='aliceblue' className={styles.icon}/>
                            Delete
                          </button>
                        </div>: ''}
                      </div>
                    </div>
                  </div>
                )): <div className={styles.none}><h2>No Comments</h2></div>}
              </div>}
            </div>
          </div>}
          {popup !=='' && <Popup info={popup} clear={setPopup}/>} 
        </div>
        <div className={styles.videoList}>
          { videoList.map((video,index)=>(
            <div className={styles.item} key={index} 
            onClick={()=>
              {
                setClickedVideo(video)
                setVideoList(videos.filter(value => value.id !== video.id))
              }
            }>
              <img className={styles.image} alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
              <div className={styles.content}>
                <div className={styles.header}>
                  {cleanSnippet(video.snippet.title)}
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
    </div>
  )
}

export default Video