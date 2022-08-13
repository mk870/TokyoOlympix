import React, { useEffect, useState } from 'react'
import styles from '../../styles/HomeStyles/Carousel.module.css'
import AliceCarousel from 'react-alice-carousel'
import image1  from '../../public/image1.jpg'
import image2 from '../../public/image2.jpg'
import image3  from '../../public/image3.jpg'
import image4  from '../../public/image4.jpg'
import image5  from '../../public/image5.jpg'
import image6  from '../../public/image6t.jpg'
import image7  from '../../public/image7.jpg'
import image8  from '../../public/image8.jpg'
import image9  from '../../public/image9.jpg'
import image10  from '../../public/image10.jpg'
import image11 from '../../public/image11.jpg'
import image12 from '../../public/image12.jpeg'
import image13 from '../../public/image13.jpg'
import Image from 'next/image'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const imagelist = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13]
const Carousel = () => {
 const [currentSlide,setCurrentSlide] = useState(0)
 let slideInterval
 let imageTotal = imagelist.length - 1

 useEffect(()=>{
   setCurrentSlide(0)
 },[])

 const nextSlide = ()=>{
   if (currentSlide === imageTotal) {
     setCurrentSlide(0)
   }else{
     setCurrentSlide(currentSlide + 1)
   }
 }

 const prevSlide = ()=>{
   if(currentSlide === 0){
     setCurrentSlide(imageTotal)
   }else{
     setCurrentSlide(currentSlide - 1)
   }
 }

 const auto = ()=>{
   slideInterval = setInterval(nextSlide, 4000);
 }

 useEffect(()=>{
   auto()
   return ()=> clearInterval(slideInterval)
 },[currentSlide])
return (
  <div className={styles.container}>
    <div className={styles.preview}><h4>Inspiring Moments</h4></div>
      <div className={styles.slidercontent}>
        <AiOutlineArrowLeft className={styles.arrow || styles.prev} onClick={prevSlide}/>
        
        {imagelist.map((image,index)=>(
          <div className={currentSlide === index ? styles.current : styles.slide}>
            {currentSlide === index && 
              <Image src={image} alt="image" height={400} width={600}/>
            }
          </div>
        ))}
        <AiOutlineArrowRight className={styles.arrow || styles.next} onClick={nextSlide}/>
      </div>
</div>
)
}

export default Carousel