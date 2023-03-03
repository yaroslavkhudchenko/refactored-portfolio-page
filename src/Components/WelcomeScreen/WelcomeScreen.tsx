import styles from './WelcomeScreen.module.scss'

const WelcomeScreen = () => {
  return (
    <section className={styles.welcomeScreen} id='welcomeScreen'>
      <div className={styles.title}>
        <div className={styles.name}>
          <div className={styles.nameone}>Yaroslav</div>
          <div className={styles.nametwo}>Khudchenko</div>
        </div>
        <div className={styles.job}> - front-end developer - </div>
      </div>
    </section>
  )
}

export default WelcomeScreen
