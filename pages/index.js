
import Carousel from '../Components/Home/Carousel'
import Details from '../Components/Home/Details'
import Info from '../Components/Home/Info'
import styles from '../styles/HomeStyles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Info/>
        <Details/>
      </div>
      <Carousel/>
    </div>
  )
  
}
