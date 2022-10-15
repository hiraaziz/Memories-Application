import React from 'react'
import styles from './styles.module.css'
import logo from '../../images/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <img className={styles.logo} src={logo} />
      <nav>
        <ul>
          <li><Link className={styles.link} to='/'>Home</Link></li>
          <li><Link className={styles.link}  to='auth'>Login</Link></li>
          <li><Link className={styles.link}  to='show'>Show profile</Link></li>
        </ul>
      </nav>
      <button>Contact Us</button>
    </header>
  )
}

export default Navbar