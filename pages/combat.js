import React, { useContext, useEffect } from 'react'
import SelectDiscipline from '../Components/Disciplines/SelectDiscipline'
import styles from '../styles/Highlights/Highlights.module.css'
import  { youtubeKey } from '../Components/Utilis/Youtube'
import { AppContext } from '../AppContext/AppContext'
import {useRouter} from 'next/router'
import axios from 'axios'
import {useQuery} from '@apollo/client'
import { GetComments, GetDislikes, GetLikes } from '../Components/Utilis/GetComents'
import {FaComment} from 'react-icons/fa'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import useWindowResize from '../Components/Hooks/useWindowResize'
import Spinner from '../Components/Spinner/Spinner'
import { GET_VIDEOSDATA } from '../Components/Utilis/GraphqlQuery'

const Combat = (props) => {
  const {loading, error, data} = useQuery(GET_VIDEOSDATA,{
    variables: {event: "combat"}})
  const mobileSize = useWindowResize(560)
  const{setClickedVideo} = useContext(AppContext)  
  const{setVideos} = useContext(AppContext)
  const{videos} = useContext(AppContext)
  const{setVideoList}=useContext(AppContext)
  const router = useRouter()
  const handleClick = (video)=>{
    setClickedVideo(video)
    setVideoList(videos.filter(value => value.id !== video.id))
    console.log(video)
    router.push('/video')
  }
  useEffect(()=>{
    setVideos(props.data)
  },[])
  return (
    <div className={styles.container}>
      <h1>Combat Games</h1>
      <SelectDiscipline/>
      <div className={styles.grid}>
       {props.data.map((video,index)=>(
          <div className={styles.video} key={index} onClick={()=>handleClick(video)}>
            <img className={styles.image} alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            <div className={styles.info}>
              <span>{mobileSize?`${(video.snippet.title).substring(0,30)}...`:video.snippet.title}</span>
            </div>
            <div className={styles.comments}>
              {loading && <div className={styles.loader}><Spinner/></div>}
              {error && <h4 className={styles.error}>Sorry an error occured</h4>}
              {data && <div className={styles.data}>
                <div className={styles.number}>
                  {mobileSize?<FaComment color='aliceblue'fontSize={19} className={styles.icon}/>:''}
                  {`${GetComments(data,video.id)} ${mobileSize?'':GetComments(data,video.id)===1?'comment':'comments'}`}
                </div>
                <div className={styles.number}>
                  <AiFillLike color='aliceblue'fontSize={19} className={styles.icon}/>
                  {`${GetLikes(data,video.id)}`}
                </div>
                <div className={styles.number}>
                  <AiFillDislike color='aliceblue'fontSize={19} className={styles.icon}/>
                  {`${GetDislikes(data,video.id)}`}
                </div>
              </div>}
            </div>
          </div>
          ))}
      </div>
    </div>
  )
}
export const getStaticProps = async () => {
  const IdList = ['ms80nCeFYds','K6_cDzPBX7U','jQsSnuTu0zI','p4N1jaCAB3U','rAe8BlbjXj0','2mVEwYBDV3k','cNasgva7k3A','9aKxSjrKaqg','swUmA1w9ND4','6b-Z1dg52ng','IRHxI5EJ0u4','Dn8-M2zW9PU','j8BWUpctZX4','aeIJVuaQ33E']
  try{

    const result = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${IdList[0]},${IdList[1]},${IdList[2]},${IdList[3]},${IdList[4]},${IdList[5]},${IdList[6]},${IdList[7]},${IdList[8]},${IdList[9]},${IdList[10]},${IdList[11]},${IdList[12]},${IdList[13]}}&key=${youtubeKey}`);
    const data = result.data;
    return {
        props: {
            data: data.items
        }
    }
  }catch (e) {
    
    return { notFound: true };
  }
  }
export default Combat