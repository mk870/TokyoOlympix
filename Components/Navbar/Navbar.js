import React, { useContext, useEffect, useState } from 'react'
import styles from '../../styles/NavbarStyles/Navbar.module.css'
import {FcSportsMode,FcHome} from 'react-icons/fc'
import {VscGraph} from 'react-icons/vsc'
import {MdOutlineHighlight} from 'react-icons/md'
import {RiLoginBoxFill} from 'react-icons/ri'
import {SiGnuprivacyguard} from 'react-icons/si'
import {useRouter} from 'next/router'
import {HiMenu} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import Dropdown from './Dropdown'
import useWindowResize from '../Hooks/useWindowResize'
import { AppContext } from '../../AppContext/AppContext'

const Navbar = () => {
  const [dropMenu,setDropMenu] = useState(false)
  const router = useRouter()
  const mobileMenu = useWindowResize(720)
  const {value} = useContext(AppContext)
  const {setValue} = useContext(AppContext)
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.image}>
          <img src={'/logo2.jpg'} alt='logo' />
        </div>
        <div className={styles.name}>
          <FcSportsMode fontSize={29}/>
          <span>Olympix</span>
        </div>
      </div>
      {!mobileMenu?<div className={styles.links}>
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
        
      </div> : <div className={styles.mobile}>
          <div className="menu" >
            {dropMenu?<AiOutlineClose size={31} color={'white'} onClick={()=>setDropMenu(!dropMenu)}/>:
             <HiMenu size={34} color={'white'} onClick={()=>setDropMenu(!dropMenu)}/>}
          </div>
          <div className="dropdown">{dropMenu && <Dropdown/>}</div>
          </div>
      }
    </div>
  )
}

export default Navbar