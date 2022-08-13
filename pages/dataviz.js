import React from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { useState } from 'react'
import styles from '../styles/DataVizStyles/DataViz.module.css'
import dynamic from "next/dynamic"

const Dataviz = () => {
  const [page,setPage] = useState(1)
  const next = () => setPage(page + 1)
  const prev = () => setPage(page - 1)
  const AthleticsViz = dynamic(() => import('../Components/Visualizations/AthleticsViz'), {
    ssr: false,
  })
  const CoachesViz = dynamic(() => import('../Components/Visualizations/CoachesViz'), {
    ssr: false,
  })
  const MedalsViz = dynamic(() => import('../Components/Visualizations/MedalsViz'), {
    ssr: false,
  })
  const WorldRankingsViz = dynamic(() => import('../Components/Visualizations/WorldRankingsViz'), {
    ssr: false,
  })
  return (
    <div className={styles.container}>
      <h1>Tokyo 2021 Data Visualization</h1>
        {page === 1 && <AthleticsViz/>}
        {page === 2 && <CoachesViz/>}
        {page === 3 && <MedalsViz/>}
        {page === 4 && <WorldRankingsViz/>}
      <div className={styles.btns}>
        {page === 1 ? null: <button onClick={prev} ><AiOutlineArrowLeft fontSize={19}/> Prev</button> }
        <div className={styles.midBtns}>
          <span onClick={()=>setPage(1)}  className={page===1?styles.onPage:null}>1</span>
          <span onClick={()=>setPage(2)} className={page===2?styles.onPage:null}>2</span>
          <span onClick={()=>setPage(3)} className={page===3?styles.onPage:null}>3</span>
          <span onClick={()=>setPage(4)} className={page===4?styles.onPage:null}>4</span>
        </div>
        {page === 4? null :<button onClick={next} ><AiOutlineArrowRight fontSize={19}/> Next</button> }
      </div>
      
    </div>
  )
}

export default Dataviz