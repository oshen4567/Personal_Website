import React, {useState}from 'react';

import styles from "./Navbar.module.css"
import {getImage} from "../../utils"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">OshenTheDev</a>
        <div className= {styles.menu}>
            <ul className={styles.menuItems}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
