import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
      YONGYU 
      </div>
      <div className={styles.links}>
      <Link to="/">HOME</Link> 
      <Link to="first">PROJECT</Link>
      <Link to="example">TEST</Link>
      <Link to="test">CONTACT</Link>
      </div>
    </div>
  )
}


export default Navbar
