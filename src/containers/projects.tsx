import React from 'react'
import { Tile } from '../components/tile'
import projects from '../data/projects.json'

export const Projects = () => (
  <>
    <h2>Projects</h2>
    {projects.map((project) => (
      <Tile
        title={project.title}
        description={project.description}
      />
    ))}
  </>
)
