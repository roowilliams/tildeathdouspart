import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { base } from 'theme'
import { media } from 'utils/styled-media'

import { Container } from 'components/common'

const GlobalStyle = createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css?family=Pragati+Narrow:700|Signika:300');
  
  @font-face {
    font-family: platmed;
    font-weight: 700;
    font-style: normal;
    src: url(${require('assets/fonts/PlatMed.woff2')}) format('woff2'),
        url(${require('assets/fonts/PlatMed.woff')}) format('woff');
  }

  @font-face {
    font-family: nhub;
    font-weight: 700;
    font-style: normal;
    src: url(${require('assets/fonts/NHUB.woff2')}) format('woff2'),
        url(${require('assets/fonts/NHUB.woff')}) format('woff');
  }

  @font-face {
      font-family: nhur;
      font-weight: 400;
      font-style: normal;
      src: url(${require('assets/fonts/NHUR.woff2')}) format('woff2'),
          url(${require('assets/fonts/NHUR.woff')}) format('woff');
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 22px;
    height: 100%;
    background-color: #1a1b1d;


  }
  
  ${media.mobile`
  body {
    font-size: 12px;
  }
`}
`

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <GlobalStyle />
            <ThemeProvider theme={base}>
              <Container>{children}</Container>
            </ThemeProvider>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
