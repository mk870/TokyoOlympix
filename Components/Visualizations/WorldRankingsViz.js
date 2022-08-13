import React from 'react'
import styles from '../../styles/DataVizStyles/PageViz.module.css'
import Tableau from "tableau-react";


const WorldRankingsViz = () => {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };

  const url = 'https://public.tableau.com/views/Worldrankings/Dashboard1'
  
  return (
    <div className={styles.container}>
      <div className={styles.info}>
      <h3>World Olympic Rankings</h3>
      <p>
        In world rankings, USA is number one followed by China, then Japan.
      </p>
    </div>
    <div  className={styles.viz}>
    <Tableau
        url='https://public.tableau.com/views/Worldrankings/Dashboard1'
        options={options}
      />
    </div>
    </div>
  )
}

export default WorldRankingsViz