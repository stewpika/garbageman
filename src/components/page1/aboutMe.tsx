import React from 'react'
import ClickCount from '../clickCount/clickCount'
import styles from './aboutMe.module.scss'


type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => (
  <div>
  <div className={styles.container}>
    <div className={styles.picture}>

    </div>
    <div className={styles.introduction}>
        <h1>Hi, this is Yongyu!</h1>
        <p>I am currently studying IT and living in Helsinki. </p>
        <p>You can find my project here.</p>
    </div>
    </div>
    <ClickCount />
  </div>
  
)

export default AboutMe
