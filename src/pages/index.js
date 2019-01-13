import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Intro from 'components/Intro'

import { InfoSection, RSVPSection } from 'components'

import ScrollProvider from 'components/common/ScrollProvider'

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="TIL DEATH DO US PART"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Intro words="TIL DEATH DO US PART" />
      <ScrollProvider>
        <InfoSection />
        <RSVPSection />
      </ScrollProvider>
    </Layout>
  )
}

export default IndexPage
