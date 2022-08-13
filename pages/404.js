import React from 'react'
import Link from 'next/link'
import styles from '../styles/PageNotFound/PageNotFound.module.css'

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1>Page Not Found</h1>
      <h3>Please check if you are in the right page</h3>
      <div className={styles.link}>
        <Link href={'/'} >Click here to go back home</Link>
      </div>
    </div>
  )
}

export default PageNotFound