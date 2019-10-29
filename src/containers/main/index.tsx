import React from 'react'

import main from '../../data/main.json'
import styles from './index.module.css'

export const Main = () => (
  <div className={styles.container}>
    <h1 className={styles.command}>{`./${main.name}`}</h1>
  </div>
)
