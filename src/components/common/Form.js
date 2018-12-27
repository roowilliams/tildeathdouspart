import styled from 'styled-components'

export const FormContainer = styled.form`
`

const Input = styled.input`
    border-radius: 3px;
    border: 1px solid ${props => props.theme.actionColor};
    display: block;
    margin: 0 0 1em;
    padding: 0.4rem;

    ::placeholder {
        color: ${props => props.theme.placeholderTextColor};
    }
`
export const TextInput = styled(Input).attrs({
    type: 'text',
    size: props => (props.small ? 5 : undefined),
})``

export const PasswordInput = styled(Input).attrs({
    // Every <PasswordInput /> should be type="password"
        type: "password"
})``

export const ActionButton = styled.button`
    border-radius: 3px;
    display: block;
    margin: 0 0 1em;
    padding: 0.4rem;
    color: ${props => props.theme.actionColor};
`