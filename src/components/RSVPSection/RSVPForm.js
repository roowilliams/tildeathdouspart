import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Spinner, Paragraph } from 'components/common'
import { media } from 'styles/styled-media'

const FormContainer = styled.form`
  min-height: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 4rem;

  ${media.mobile`
  margin-top: 3rem;
`}
`

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid ${props => props.theme.titleTextColor};
  background-color: ${props => props.theme.titleTextColor};
  display: block;
  margin: 0 0.5rem 0.1em 0.5rem;
  padding: 0.6rem;
  font-size: 1rem;
  width: 33%;
  ::placeholder {
    color: ${props => props.theme.placeholderTextColor};
  }
  max-width: 20rem;

  ${media.smallmobile`
    width: 80%;
    margin: 0 3rem 0.5em 3rem;
  `}
`
const TextInput = styled(Input).attrs({
  type: 'text',
})``

const Row = styled.div`
  display: flex;
  margin: 1rem 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${media.smallmobile`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
  `}
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
  min-width: 30%;
  font-size: 1.5rem;
  font-weight: bold;
  max-width: 20rem;

  ${media.smallmobile`
    width: 50%;
  `}
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
  height: 2rem;
  color: ${props => props.theme.actionColor};
  text-align: center;
  margin: 1rem 0;
`

const RSVPForm = ({
  onChange,
  handleSubmit,
  firstName,
  lastName,
  email,
  submitting,
  submitted,
  resetForm,
  error,
}) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
      {!submitted ? (
        !submitting ? (
          <Fragment>
            <Row>
              <TextInput
                name="firstName"
                placeholder="First Name"
                onChange={onChange}
                value={firstName}
              />
              <TextInput
                name="lastName"
                placeholder="Last Name"
                onChange={onChange}
                value={lastName}
              />
              <TextInput
                name="email"
                placeholder="you@email.com"
                onChange={onChange}
                value={email}
              />
            </Row>
            <Row>
              <ErrorText>{!!error ? error : ''}</ErrorText>
            </Row>

            <ActionButton type="submit" disabled={submitting}>
              RSVP
            </ActionButton>
          </Fragment>
        ) : (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )
      ) : (
        <SubmitConfirmation>
          <Paragraph>Thank you!</Paragraph>
          <ResetFormButton onClick={resetForm}>
            RSVP another guest
          </ResetFormButton>
        </SubmitConfirmation>
      )}
    </FormContainer>
  )
}

export default RSVPForm
