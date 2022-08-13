import React from 'react'
import styles from '../../styles/PopupsStyles/Popup.module.css'

const Popup = ({info,clear}) => {
 setTimeout(()=>{
   clear('')
   
},5000)
  return (
    <div className={styles.popup}><span>{info}</span></div>
  )
}

export default Popup