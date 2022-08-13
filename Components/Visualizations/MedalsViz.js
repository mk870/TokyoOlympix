import React from 'react'
import styles from '../../styles/DataVizStyles/PageViz.module.css'
import Tableau from "tableau-react";

const{tableau} = window

const MedalsViz = () => {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };
  
  const url1 = 'https://public.tableau.com/views/Goldmedalspercountry/Dashboard1'
  const url2 = 'https://public.tableau.com/views/Silvermedals/Dashboard1'
  const url3 = 'https://public.tableau.com/views/BronzeMedals/Dashboard1'

  return (
    <div className={styles.container}>
      <div className={styles.info}>
      <h3>Medals Analysis</h3>
      <p>
        The US dominated the podium, leading all other countries in all medals.In gold medals the US had 39 followed by China with 38 and then Japan with 27.In silver medals, the US led with 44 followed by China with 32 and ROC(Russia) with 28. The US had 35 bronze medals followed by ROC(Russia) with 23 and UK and Australia with 22 each.
      </p>
    </div>
    <h4>Gold Medals per Country</h4>
    <div className={styles.viz}>
      <Tableau
        url={url1}
        options={options}
      />
    </div>
    <h4>Silver Medals per country</h4>
    <div className={styles.viz}>
      <Tableau
        url={url2}
        options={options}
      />
    </div>
    <h4>Bronze Medals per Country</h4>
    <div className={styles.viz}>
      <Tableau
        url={url3}
        options={options}
      />
    </div>
    </div>
  )
}

export default MedalsViz