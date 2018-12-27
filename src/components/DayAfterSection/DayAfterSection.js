import React, { Component } from 'react'
import {
  Content,
  Column,
  Title1,
  Title2,
  Title3,
  Paragraph,
} from 'components/common'

export class DayAfterSection extends Component {
  render() {
    return (
      <Content>
        <Column>
          <Title2>The Day After</Title2>
          <Paragraph>
            Hangover Sunday food around Lydia's house. Note in your RSVP if
            you’re joining us on Sunday.
          </Paragraph>
        </Column>
      </Content>
    )
  }
}
