import React, { Component } from 'react'
import styled from 'styled-components'
import { Spinner } from 'components/common'

const FormContainer = styled.form`
  margin-bottom: 6rem;
`

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid ${props => props.theme.titleTextColor};
  background-color: ${props => props.theme.titleTextColor};
  display: block;
  margin: 0 0.8rem 0.1em 0;
  padding: 0.6rem;
  font-size: 1rem;
  ::placeholder {
    color: ${props => props.theme.placeholderTextColor};
  }
`
const TextInput = styled(Input).attrs({
  type: 'text',
  size: props => (props.small ? 5 : undefined),
})``

const Row = styled.div`
  display: flex;
`

const SubmitConfirmation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ActionButton = styled.button`
  border-radius: 3px;
  display: block;
  margin: 0 0 1em;
  padding: 0.6rem;
  font-size: 1rem;
  background-color: ${props => props.theme.actionColor};
  border: 0;
  color: white;
  min-width: 8rem;
  font-size: 1.5rem;
  font-weight: bold;
`
const ResetFormButton = styled(ActionButton)``

const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`

const ErrorText = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  color: ${props => props.theme.actionColor};
`

const RSVPForm = ({
  onChange,
  handleSubmit,
  name,
  email,
  submitting,
  submitted,
  resetForm,
  error,
}) => {
  return !submitted ? (
    !submitting ? (
      <FormContainer onSubmit={handleSubmit}>
        <Row>
          <TextInput
            name="firstName"
            placeholder="First Name"
            onChange={onChange}
            value={name}
            disabled={submitting}
          />
          <TextInput
            name="lastName"
            placeholder="Last Name"
            onChange={onChange}
            value={name}
            disabled={submitting}
          />
          <TextInput
            name="email"
            placeholder="you@email.com"
            value={email}
            onChange={onChange}
            disabled={submitting}
          />
        </Row>
        <Row>
          <ErrorText>{!!error ? error : ''}</ErrorText>
        </Row>

        <ActionButton type="submit">RSVP</ActionButton>
      </FormContainer>
    ) : (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  ) : (
    <SubmitConfirmation>
      Thank you!
      <ResetFormButton onClick={resetForm}>RSVP another guest</ResetFormButton>
    </SubmitConfirmation>
  )
}

export default RSVPForm
