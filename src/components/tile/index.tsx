import React from 'react'

import styles from './tile.module.css'

export type TileProps = {
    title: string,
    description: string
}

export const Tile: React.FC<TileProps> = ({ title, description }) => (
  <div className={styles.rootContainer}>
    <div className={styles.tileSpine} />
    <div className={styles.contentContainer}>
      <div className={styles.hero}>{title[0]}</div>
      <div className={styles.title}>{title}</div>
      <div>{description}</div>
    </div>
  </div>
)
