import { FunctionComponent } from 'react'
import { technologiesData } from './../../Data/data'
import profilePhoto from './../../assets/photo.jpg'
import styles from './About.module.scss'

const About: FunctionComponent = () => (
  <section className={styles.aboutSection} id='about'>
    <div className={styles.aboutBlock}>
      <div className={styles.aboutBlockTop}>
        <div className={styles.photo}>
          <img src={profilePhoto} alt='profile_photo' />
        </div>
        <div className={styles.text}>
          <p>Hello, my name is Yaroslav. I&lsquo;m a front-end developer from Wroclaw, Poland.</p>
          <p>
            I have more than four years of commercial experience in building web applications as
            well as mobile and desktop ones.
          </p>
        </div>
      </div>
      <div className={styles.stackBlock}>
        <div className={styles.iKnow}>
          <div className={styles.iKnowTitle}>Technologies I use:</div>
          <div className={styles.iKnowContent}>
            {technologiesData.known.map((tech: string) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
        <div className={styles.familierWith}>
          <div className={styles.familierWithContent}>
            {technologiesData.familiar.map((tech: string) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
