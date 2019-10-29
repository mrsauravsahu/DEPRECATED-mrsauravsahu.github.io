import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Projects } from '../containers/projects'
import { About } from '../containers/about'
import { Main } from '../containers/main'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Main />
    <Projects />
    <About />
  </Layout>
)

export default IndexPage
