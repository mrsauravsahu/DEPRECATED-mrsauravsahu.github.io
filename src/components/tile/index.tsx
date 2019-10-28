import React from 'react'

export type TileProps = {
    title: string,
    description: string
}

export const Tile: React.FC<TileProps> = ({ title, description }) => (
  <div>
    <div>{title}</div>
    <div>{description}</div>
  </div>
)
