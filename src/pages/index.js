import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout'
import Image from 'components/image'
import SEO from 'components/seo'

import Intro from 'components/Intro'

import { WhatSection, WhenSection, DayAfterSection } from 'components'
import ScrollProvider from 'components/common/ScrollProvider'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Intro words="TIL DEATH DO US PART" />
      <ScrollProvider>
        <WhatSection />
        <WhenSection />
        <DayAfterSection />
      </ScrollProvider>
    </Layout>
  )
}

export default IndexPage
