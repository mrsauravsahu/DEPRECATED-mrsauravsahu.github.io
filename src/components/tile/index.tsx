import React from 'react'

import styles from './tile.module.css'

export type TileProps = {
  title: string,
  description: string,
  renderSpine?: boolean,
  renderHero?: boolean
}

export const Tile: React.FC<TileProps> = ({
  title,
  description,
  renderSpine = true,
  renderHero = true,
}) => (
  <div className={styles.rootContainer}>
    {renderSpine ? <div className={styles.tileSpine} /> : null}
    <div className={styles.contentContainer}>
      {renderHero ? <div className={styles.hero}>{title[0]}</div> : null}
      <div className={styles.title}>{title}</div>
      <div>{description}</div>
    </div>
  </div>
)
