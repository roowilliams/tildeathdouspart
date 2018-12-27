import React, { Component } from 'react'
import styled from 'styled-components'
import {
  BackgroundContent,
  Column,
  Display1,
  Paragraph,
  Title2,
  FadeInUp,
  FromLeft,
} from 'components/common'

import flowersImage from 'assets/img/flowers.jpg'

const Ampersand = styled.div`
  font-family: ${props => props.theme.titleFontFamily};
  color: ${props => props.theme.titleTextColor};
  font-size: 16.56rem;
  position: relative;
  top: -4rem;
  left: -0.6rem;
  padding: 0;
  margin: 0;
`

const Name = styled(Display1)`
  color: ${props => props.theme.titleTextColor};
  font-size: 4rem;
  padding: 0;
  margin: 0;
  position: relative;
  left: -1.2rem;
  display: block;
`
const FirstName = styled(Name)`
  left: -3.4rem;
`

const LockUp = styled.div`
  margin-top: 6rem;
  display: flex;
`
const Names = styled.div`
  display: flex;
  flex-direction: column;
`

export class WhatSection extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { scrollTop } = this.props
    return (
      <BackgroundContent
        bgImage={flowersImage}
        vcenter
        ref={ref => (this.bg = ref)}
        animate={
          this.bg && scrollTop > this.bg.offsetTop - window.innerHeight / 1.8
            ? true
            : false
        }
      >
        <Column>
          <LockUp>
            <Ampersand>&</Ampersand>
            <Names>
              <FirstName>Lydia Pang</FirstName>
              <Name>Roo Williams</Name>
            </Names>
          </LockUp>

          <Title2>24 08 2019</Title2>

          <Paragraph lineHeight={1.4}>
            The field next to...
            <br />
            Pant Y Goitre House,
            <br />
            Kilgeddin
            <br />
            Abergavenny
            <br />
            NP7 9BB
          </Paragraph>
        </Column>
      </BackgroundContent>
    )
  }
}
