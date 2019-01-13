import React, { Component } from 'react'
import { Column, Paragraph, Title2 } from 'components/common'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import RSVPForm from './RSVPForm'

export class RSVPSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      submitting: false,
      submitted: false,
      error: false,
    }
  }

  onChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  onSubmit = event => {
    event.preventDefault()

    const { email, firstName, lastName } = this.state
    console.log(!!email, !!firstName, !!lastName)
    if (!email || !firstName || !lastName) {
      this.handleError('Please complete all fields.')
      return
    }
    this.setState({ submitting: true })
    addToMailchimp(email, { FNAME: firstName, LNAME: lastName }) // listFields are optional if you are only capturing the email address.
      .then(data => {
        this.setState({ submitting: false })
        this.checkResult(data)
        // this.onSuccess()
      })
      .catch(() => {})

    console.log('submit', this.state)
  }

  checkResult = data => {
    if (data.result === 'error') {
      this.handleError(data.msg)
      return
    }
    this.onSuccess()
  }

  handleError = error => {
    if (error.includes('already subscribed to list')) {
      error = `You've already RSVP'd under this email!`
    }
    this.setState({ error })
  }

  onSuccess = () => {
    this.setState({ submitted: true })
  }

  resetForm = () => {
    this.setState({
      email: '',
      firstName: '',
      lastName: '',
      submitted: false,
      error: false,
    })
  }

  render() {
    return (
      <Column>
        <Title2>RSVP</Title2>

        <Paragraph lineHeight={1.4}>
          Please RSVP for each, individual guest by <b>15 02 2019</b>
        </Paragraph>
        <RSVPForm
          onChange={this.onChange}
          handleSubmit={this.onSubmit}
          resetForm={this.resetForm}
          {...this.state}
        />
      </Column>
    )
  }
}
