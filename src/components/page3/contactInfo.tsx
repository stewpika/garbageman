import React from 'react'
import styles from './contactInfo.module.scss'


type ContactInfoProps = {

}

const ContactInfo: React.FC<ContactInfoProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Yongyu Huang</h1>
      <h2>+358 449811698</h2>
      <h2>hyy9478@gmail.com</h2>
    </div>

  )
}

export default ContactInfo
