import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      Navbar
      <Link to="/">Home</Link> 
      <Link to="first">My First Component</Link>
      <Link to="example"></Link>
    </div>
  )
}

export default Navbar
