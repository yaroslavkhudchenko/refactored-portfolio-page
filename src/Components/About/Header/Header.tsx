import { useState } from 'react'
import styles from './Header.module.scss'

const Header: React.FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false)

  const toggleBurgerMenu = () => {
    setIsBurgerOpen((prevState) => !prevState)
    setShowMenu((prevState) => !prevState)
  }

  return (
    <header className={styles.header} id='header'>
      <span
        className={`${styles.burger} ${isBurgerOpen ? styles.openedBurger : ''}`}
        onClick={toggleBurgerMenu}
      />
      <nav className={`${styles.menu} ${showMenu ? styles.showMenu : styles.hideMenu}`}>
        <a href='#homePage' className={styles.menuItem}>
          Home
        </a>
        <a href='#about' className={styles.menuItem}>
          About
        </a>
        <a href='#portfolio' className={styles.menuItem}>
          Portfolio
        </a>
        <a href='#contact' className={styles.menuItem}>
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header
