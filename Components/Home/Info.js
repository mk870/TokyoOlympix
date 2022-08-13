import React from 'react'
import styles from '../../styles/HomeStyles/Info.module.css'
import image from '../../public/main.jpeg'
import Image from 'next/image'

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Image src={image} alt="main" height={380} width={550}/>
        <h1>Olympics Analytics</h1>
        <span>The best online platform for the recap of tokyo summer 2021 Olympics</span>
      </div>
      <div className={styles.wrapper}>
        
        <div className={styles.analysis}>
          <span>Comprehensive Olympics Data analysis on:</span>
          <div className={styles.lists}>
            <ul>
              <li>Athletes</li>
              <li>Coaches</li>
              <li>Medals won</li>
              <li>International Rankings</li>
            </ul>
          </div>
        </div>
        <div className={styles.hightlights}>
          <span>Watch highlights from all the incredible moments on:</span>
          <div className={styles.list}>
            <ul>
              <li>Athletics</li>
              <li>Swimming</li>
              <li>Soccer</li>
              <li>Gymnastics</li>
              <li>And much more.....</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info