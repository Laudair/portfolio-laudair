/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from '@chakra-ui/react'
import theme from '../base-components/theme'
import { Box } from '../base-components'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      backgroundColor="#14213D"
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box padding={5} margin="0 auto">
        <ThemeProvider theme={theme}>
          <main>{children}</main>
        </ThemeProvider>
      </Box>
      <Box
        paddingX={5}
        paddingY={3}
        marginTop="auto"
        as="footer"
        color="#e5e5e5"
      >
        © {new Date().getFullYear()}, Laudair
      </Box>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
