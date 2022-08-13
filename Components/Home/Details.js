import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { AppContext } from '../../AppContext/AppContext'
import styles from '../../styles/HomeStyles/Details.module.css'
import logo from '../../public/main4.jpg'
import boxing from '../../public/boxing.webp'
import athletics from '../../public/athletics.jpg'
import gym from '../../public/gym.jpg'
import soccer from '../../public/soccer.jpg'
import swim from '../../public/swim.jpg'
import weights from '../../public/weights.webp'
import image1 from '../../public/main.jpeg'
import image2 from '../../public/slide3.jpg'
import Image from 'next/image'

const events = [
 {name:'Combat',image:boxing,value:'combat'},
 {name:'Athletics',image:athletics,value:'athletics'},
 {name:'Gymnastics',image:gym,value:'gymnastics'},
 {name:'BallGames',image:soccer,value:'ballGames'},
 {name:'Swimming',image:swim,value:'swimming'},
 {name:'Weight-lifting',image:weights,value:'weightLifting'}
]
const Details = () => {
 const{setDiscipline} = useContext(AppContext)
  const router = useRouter()
  const opening = ()=>{
   setDiscipline('opening')
   router.push('/opening')
 }
 const closing = ()=>{
   setDiscipline('closing')
   router.push('/closing')
 }
 const route = (value)=>{
   setDiscipline(value)
   router.push(`/${value}`)
 }
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image src={logo} alt="mini logo" height={380} width={550}/>
        <h3>2021 Tokyo olympics</h3>
      </div>
      <div className={styles.middle}>
        <div className={styles.ceremony} onClick={opening}>
          <Image src={image2} alt="opening" height={200} width={250}/>
          <span>Opening ceremony</span>
        </div>
        <div className={styles.ceremony} onClick={closing}>
          <Image src={image1} alt="closing" height={200} width={250}/>
          <span>Closing ceremony</span>
        </div>
        
      </div>
      <div className={styles.bottom}>
        {events.map((event)=>(
          <div className={styles.image} key={event.name} onClick={()=>route(event.value)}>
            <Image src={event.image} alt="event" height={100} width={150}/>
            <span>{event.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Details