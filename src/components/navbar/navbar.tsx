import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
      <Link to="/">ʕº̫͡ºʔ</Link> 
      </div>
      <div className={styles.links}>
      <Link to="/">HOME</Link> 
      <Link to="/gallary">GALLARY</Link>
      <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  )
}


export default Navbar
