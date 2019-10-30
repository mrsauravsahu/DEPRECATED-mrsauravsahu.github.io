import React from 'react'
import classnames from 'classnames'

import { Tile } from '../../components/tile'
import projects from '../../data/projects.json'
import styles from './projects.module.css'
import globals from '../../styles/globals.module.css'

export const Projects = () => (
  <div className={globals.pageContainer}>
    <h2 className={classnames(
      globals.pageTitle,
      globals.pageTitleOption,
    )}
    >
        Projects
    </h2>
    <div className={styles.projectsContainer}>
      {projects.map((project) => (
        <Tile
          title={project.title}
          description={project.description}
          className={{ container: styles.tile }}
        />
      ))}
    </div>
  </div>
)
