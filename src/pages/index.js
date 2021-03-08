import React from 'react'

import Layout from '../components/layout'
import About from '../components/about'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
  </Layout>
)

export default IndexPage
