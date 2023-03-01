import { useRef, useState } from 'react'
import styles from './Header.module.scss'

const Header: React.FunctionComponent = () => {
  const burgerRef = useRef<HTMLDivElement>(null)
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const toggleBurgerMenu = () => {
    burgerRef?.current?.classList.toggle('change')
    setShowMenu((prevState) => !prevState)
  }

  return (
    <header className={styles.header} id='header'>
      <div className={styles.burger} ref={burgerRef} onClick={toggleBurgerMenu}>
        <span className={styles.bar1} />
        <span className={styles.bar2} />
        <span className={styles.bar3} />
      </div>

      {/* {showMenu && ( */}
      <nav className={`${styles.menu} ${showMenu ? styles.showMenu : styles.hideMenu}`}>
        <a href='#homePage'>
          <span className={styles.menuItem}>Home</span>
        </a>
        <a href='#about'>
          <span className={styles.menuItem}>About</span>
        </a>
        <a href='#portfolio'>
          <span className={styles.menuItem}>Portfolio</span>
        </a>
        <a href='#contact'>
          <span className={styles.menuItem}>Contact</span>
        </a>
      </nav>
      {/* )} */}
    </header>
  )
}

export default Header
