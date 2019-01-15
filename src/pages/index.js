import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Intro from 'components/Intro'

import { InfoSection, RSVPSection } from 'components'

import ScrollProvider from 'components/common/ScrollProvider'

const IndexPage = () => {
  const scrollDown = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 600,
        behavior: 'smooth',
      })
    }, 500)
  }
  return (
    <Layout>
      <SEO
        title="TIL DEATH DO US PART"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Intro words="TIL DEATH DO US PART" onFinish={scrollDown} />
      <ScrollProvider>
        <InfoSection />
        <RSVPSection />
      </ScrollProvider>
    </Layout>
  )
}

export default IndexPage
