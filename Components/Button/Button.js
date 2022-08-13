import React from 'react'
import styles from '../../styles/Button/Button.module.css'

const Button = ({description,icon}) => {
  return (
    <button className={styles.container}>{icon}{description}</button>
  )
}

export default Button