import React from 'react'
import styles from './places.module.scss'

type GallaryComponentProps = {

}

const GallaryComponent: React.FC<GallaryComponentProps> = () => {
  return (
  <div className={styles.container}>
    <div className={styles.place1}>
      picture 1
    </div>
    <div className={styles.place2}>
      picture 2
    </div>
    <div className={styles.place3}></div>
    <div className={styles.place4}></div>
    <div className={styles.place5}></div>
    <div className={styles.place6}></div>
  </div>
  )
}

export default GallaryComponent
