import React, { useContext } from 'react'
import styles from '../../styles/NavbarStyles/Dropdown.module.css'
import {FcHome} from 'react-icons/fc'
import {VscGraph} from 'react-icons/vsc'
import {MdOutlineHighlight} from 'react-icons/md'
import {RiLoginBoxFill} from 'react-icons/ri'
import {SiGnuprivacyguard} from 'react-icons/si'
import {useRouter} from 'next/router'
import { AppContext } from '../../AppContext/AppContext'

const Dropdown = () => {
  const router = useRouter()
  const {value} = useContext(AppContext)
  const {setValue} = useContext(AppContext)
  return (
   <div className={styles.container}>
   
   <div className={styles.links}>
     <div className={styles.link} onClick={()=>router.push('/')}>
       <FcHome fontSize={22}/>
       <span>Home</span>
     </div>
     <div className={styles.link} onClick={()=>router.push('/dataviz')}>
       <VscGraph fontSize={22} color={'red'}/>
       <span>DataViz</span>
     </div>
     <div className={styles.link} onClick={()=>router.push('/athletics')}>
       <MdOutlineHighlight fontSize={22} color={'gold'}/>
       <span>Highlights</span>
     </div>
     <div className={styles.link} onClick={()=>value?setValue(null):router.push('/login')}>
       <RiLoginBoxFill fontSize={22} color={'green'}/>
       <span>{value?'Logout':'Login'}</span>
     </div>
     <div className={styles.link} onClick={()=>value?setValue(null):router.push('/signup')}>
       <SiGnuprivacyguard fontSize={22} color={'blue'}/>
       <span>{value?'Signout':'SignUp'}</span>
     </div>
     
   </div>
   </div>
  )
}

export default Dropdown