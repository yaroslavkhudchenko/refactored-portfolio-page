import { FunctionComponent } from 'react'
import { PROJECTS_DATA } from './portfolioData'
import styles from './Portfolio.module.scss'

const Portfolio: FunctionComponent = () => (
  <section id='portfolio' className={styles.portfolioSection}>
    {PROJECTS_DATA.map((singleProject, index) => (
      <div key={index} className={styles.singleProject}>
        <div className={styles.mobileTitle}>{singleProject.title}</div>
        <div className={styles.bodyLeft}>
          <div className={styles.bodyLeftVideo}>
            <video controls>
              <source src={singleProject.videoUrl} type='video/mp4' />
            </video>
          </div>
        </div>
        <div className={styles.bodyRight}>
          <div className={styles.bodyRightDescr}>
            <div className={styles.bodyRightDescrDescr}>
              <div className={styles.title}>{singleProject.title}</div>
              <div className={styles.bodyRightDescrDescrText}>{singleProject.descr}</div>
              <div className={styles.bodyRightDescrCheck}>
                <a href={singleProject.linkCode} target='_blank' rel='noopener noreferrer'>
                  Code
                </a>
                <a href={singleProject.linkUrl} target='_blank' rel='noopener noreferrer'>
                  Live
                </a>
              </div>
            </div>
            <div className={styles.bodyRightDescrStack}>
              <div className={styles.stackList}>
                {singleProject.techStack.map((e) => (
                  <span key={e}>{e}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </section>
)

export default Portfolio
