import React from 'react'
import styles from './places.module.scss'

type MyFirstComponentProps = {

}

const MyFirstComponent: React.FC<MyFirstComponentProps> = () => {
  return (
  <div className={styles.container}>
    <div className={styles.place1}></div>
    <div className={styles.place2}></div>
    <div className={styles.place3}></div>
    <div className={styles.place4}></div>
    <div className={styles.place5}></div>
    <div className={styles.place6}></div>
  </div>
  )
}

export default MyFirstComponent
