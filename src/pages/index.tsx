import React from 'react'
import { FullPage, Slide } from 'react-full-page'

import SEO from '../components/seo'
import { Projects } from '../containers/projects'
import { About } from '../containers/about'
import { Main } from '../containers/main'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <FullPage initialSlide={1}>
      <Slide>
        <Main />
      </Slide>
      <Slide>
        <Projects />
      </Slide>
      <Slide>
        <About />
      </Slide>
    </FullPage>
  </>
)

export default IndexPage
