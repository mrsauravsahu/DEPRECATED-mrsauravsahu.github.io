import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Projects } from '../containers/projects'
import { About } from '../containers/about'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Welcome to Saurav&apos;s portfolio.</h2>

    <Projects />
    <About />
  </Layout>
)

export default IndexPage
