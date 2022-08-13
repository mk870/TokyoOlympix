import React from 'react'
import styles from '../../styles/DataVizStyles/PageViz.module.css'
import Tableau from "tableau-react";

const CoachesViz = () => {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };
  const url = 'https://public.tableau.com/views/Coaches_16458748330610/Dashboard1'
  
  
  return (
    <div className={styles.container}>
      <div className={styles.info}>
      <h3>Coaches Analysis</h3>
      <p>
        In total there were 394 coaches that participated in the games from all over the globe.Japan had the most coaches(35) in total,followed by the US and Australia both with 28 each. Basketball was the discipline with the most coaches followed by artistic swimming whilst water polo had the fewest with only 22 coaches.
      </p>
    </div>
    <div  className={styles.viz}>
    <Tableau
        url='https://public.tableau.com/views/Coaches_16458748330610/Dashboard1'
        options={options}
      />
    </div>
    </div>
  )
}

export default CoachesViz