import React, { useContext } from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/Discipline/SelectDiscipline.module.css'
import { AppContext } from '../../AppContext/AppContext'

const SelectDiscipline = () => {
  const{discipline} = useContext(AppContext)
  const{setDiscipline} = useContext(AppContext)
  const handleSelect = (target)=>{
    setDiscipline(target)
    router.push(target)
  }
  const router = useRouter()
  return (
    <div className={styles.container}>
      <label htmlFor="discipline">Choose Highlights:</label>
      <select name="discipline" value={discipline} onChange={(e)=>handleSelect(e.target.value)}>
        <option value="opening">Opening-ceremony</option>
        <option value="athletics">Athletics</option>
        <option value="swimming">Swimming</option>
        <option value="combat">Combat</option>
        <option value="ballGames">BallGames</option>
        <option value="gymnastics">Gymnastics</option>
        <option value="weightLifting">Weight-lifting</option>
        <option value="closing">Closing-ceremony</option>
      </select>
    </div>
  )
}

export default SelectDiscipline