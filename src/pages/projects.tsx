import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import projects from '../data/projects.json'
import { Tile } from '../components/tile'

const Projects = () => (
  <Layout>
    <SEO title="Projects page" />
    <h1>Projects</h1>
    {
          projects.map((project) => (
            <Tile
              title={project.title}
              description={project.description}
            />
          ))
      }
  </Layout>
)

export default Projects
