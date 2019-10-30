import React from 'react'
import classnames from 'classnames'

import { Tile } from '../../components/tile'
import styles from './about.module.css'
import globals from '../../styles/globals.module.css'
import about from '../../data/about.json'

export const About = () => (
  <div className={globals.pageContainer}>
    <h2 className={classnames(
      globals.pageTitle,
      globals.pageTitleOption,
    )}
    >
            About
    </h2>

    <div className={styles.contentContainer}>
      <img
        src={about.photoUrl}
        alt={about.name}
        className={styles.profilePicture}
      />

      <div className={styles.aboutMe}>
        <Tile
          title={about.name}
          description={about.description}
          renderSpine={false}
          renderHero={false}
        />

        <div className={styles.interestsSection}>
          <h3 className={globals.pageSubHeader}>Things I like</h3>
          <div className={styles.interestsContainer}>
            {about.thingsILike.map((thingie) => (
              <div
                key={thingie}
                className={styles.interest}
              >
                {thingie}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)
