import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { ThemeProvider } from 'styled-components'
import { base } from 'styles/theme'
import GlobalStyles from 'styles/GlobalStyles'

import { Container } from 'components/common'

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
          <Fragment>
            <ThemeProvider theme={base}>
              <Container>{children}</Container>
            </ThemeProvider>
            <GlobalStyles />
          </Fragment>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
