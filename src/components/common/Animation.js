import styled from 'styled-components'

export const FadeInUp = styled.div`
  opacity: ${props => (props.show ? 1 : 0)};
  transform: translateY(${props => (props.show ? '-10px' : 0)});
  transition: all 0.2s;
`

export const FromLeft = styled.div`
  opacity: ${props => (props.show ? 1 : 0)};
  transform: translateX(${props => (props.show ? 0 : '-10px')});
  transition: all 0.2s ease-in-out;
`
