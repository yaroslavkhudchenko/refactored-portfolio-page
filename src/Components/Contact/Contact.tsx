import { FunctionComponent } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import styles from './Contact.module.scss'

const Contact: FunctionComponent = () => (
  <section className={styles.contactSection} id='contactSection'>
    <div className={styles.formTitle}>{/* Contact */}</div>
    <div className={styles.contactContainer}>
      <div className={styles.socialMediaContainer}>
        <div className={styles.socialBody}>
          <div className={styles.socialHello}>Hey, wanna contact me?</div>
          <div className={styles.socialMailNotification}></div>
          <div className={styles.socialMail}>
            Feel free to send me an <a href='mailto:yaroslav.khudchenko@gmail.com'>email</a>
          </div>
          <div className={styles.socialAppsPart}>
            <div className={styles.socialAppsHello}>
              <div className={styles.socialAppsText}>Or contact me via</div>
              <div className={styles.socialAppsApps}>
                <a
                  href='https://www.linkedin.com/in/yaroslavkhudchenko/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LinkedInIcon />
                </a>
                <a
                  href='https://github.com/yaroslavkhudchenko'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>

            <p className={styles.cvGrab}>
              And don&#39;t forget to get a copy of my&nbsp;
              <a
                className={styles.downlCVButton}
                href='YaroslavKhudchenko.pdf'
                download={'YaroslavKhudchenko.pdf'}
                id='downlCVButton'
              >
                CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
