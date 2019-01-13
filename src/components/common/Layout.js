import styled from 'styled-components'
import { media } from 'styles/styled-media'

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.bodyColor};
  color: ${props => props.theme.bodyTextColor};
`

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  width: 100%;
  transition: all 4s ease;

  background-color: #1a1b1d;
  ${props => (props.vcenter ? `align-items: center` : null)}
`

export const BackgroundContent = styled(Content)`
  ${props =>
    props.bgImage
      ? `
        background-image: url(${props.bgImage});
        // background-size: cover;
        background-repeat: no-repeat;    
    `
      : null}
    background-position: ${props => (props.animate ? '60% 0%' : '50% 4%')};
    background-size: ${props => (props.animate ? '50%' : '40%')};

  ${media.smallmobile`
    max-width: 400px;
  `}
`
export const Column = styled.div`
  width: 58%;
  ${media.mobile`
    width: 90%;
  `}
`

export const Card = styled.div`
  display: flex;
  padding: ${props => (props.padding ? '1rem' : '0')};
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`
