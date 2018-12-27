import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import {
  Container,
  Content,
  Column,
  Title1,
  Title2,
  Title3,
  Paragraph,
  FadeInUp,
} from 'components/common'

export class WhenSection extends Component {
  render() {
    return (
      <Content>
        <Column>
          <Title2>The Day</Title2>
          <Paragraph>
            Be at the field no later than 3pm, ceremony will begin at 3.15.
          </Paragraph>
          <Title3>Dress Code</Title3>
          <Paragraph>All the colors of the rainbow, no black.</Paragraph>
          <Title3>Gifts</Title3>
          <Paragraph>
            Please don't buy us anything, we're wannabe minimalists!
          </Paragraph>
          <Title3>Babies</Title3>
          <Paragraph>
            We love em, but don't bring 'em. We wanna see you get loose. We've
            got some numbers for babysitters if you need.
          </Paragraph>
          <Title3>Now What?</Title3>
          <Paragraph>RSVP and buy something colorful to wear.</Paragraph>
        </Column>
      </Content>
    )
  }
}
