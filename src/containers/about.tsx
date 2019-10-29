import React from 'react'
import { Tile } from '../components/tile'

import about from '../data/about.json'

export const About = () => (
  <div>
    <h2>Who dis? Dis me</h2>
    <img
      src={about.photoUrl}
      alt={about.name}
    />
    <Tile
      title={about.name}
      description={about.description}
    />

    <h3>Things I like</h3>
    {about.thingsILike.map((thingie) => (
      <div>{thingie}</div>
    ))}
  </div>
)
