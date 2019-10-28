import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import projects from '../data/projects.json'
import { Tile } from '../components/tile'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Portfolio</h1>
    <p>Welcome to Saurav&apos;s portfolio.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>

    <h2>Projects</h2>
    {projects.map((project) => (
      <Tile
        title={project.title}
        description={project.description}
      />
    ))}
  </Layout>
)

export default IndexPage
