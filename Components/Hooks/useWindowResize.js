import React, { useEffect, useState } from 'react'

const useWindowResize = (size) => {
  const [mobileMenu,setMobileMenu] = useState(false)
  const[screenSize,setScreenSize] = useState(null)
  useEffect(()=>{
   const handleResize = ()=> setScreenSize(window.innerWidth)
   window.addEventListener('resize',handleResize)
   handleResize()
   return()=>window.removeEventListener('resize',handleResize)
 },[])

  useEffect(()=>{
    if(screenSize <= size){
      setMobileMenu(true)
    }else{
      setMobileMenu(false)
    }
  },[screenSize])

  return mobileMenu
}

export default useWindowResize