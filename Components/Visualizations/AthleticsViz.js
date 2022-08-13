
import React from 'react'
import styles from '../../styles/DataVizStyles/PageViz.module.css'
import Tableau from 'tableau-react'


const AthleticsViz = () => {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };

  const url = 'https://public.tableau.com/views/Athletes_16458732983950/Dashboard1'
  const url2 = 'https://public.tableau.com/views/Gender_16458789632450/Dashboard1'

  return (
    <div className={styles.container}>

      <div className={styles.info}>
        <h3>Athletes Analysis</h3>
        <p>
          In total 11 316 athletes competed in the olympic games, with 5884 men and 5432 women.
          This accounts for 52% men and 48% women, an improvement in diversity compared to the past.
          USA had the most athletes (615 in total) followed by Japan with 586. 
          Athletics had the most athletes with 969 women and 1072 men giving a total of 2041 athletes.This was not a surprise given the popularity of the discipline.Swimming was second with a total of 779 athletes comprising of 418 males and 361 females. Cycling Bmx Freestyle had the least athletes of a total of 19 comprising of 10 men and 9 women.
        </p>
      </div>
      <div  className={styles.viz}>
      <Tableau
        url={url}
        options={options}
      />
      </div>
      <br />
      <h4>Athletes Gender Analysis</h4>
      <div  className={styles.viz}>
      <Tableau
        url={url2}
        options={options}
      />
      </div>
    </div>
  )
}

export default AthleticsViz