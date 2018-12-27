import styled from 'styled-components'

export const Display1 = styled.h1`
  font-family: ${props => props.theme.titleFontFamily};
  font-weight: 700;
  font-size: 3em;
  text-transform: uppercase;
  // letter-spacing: 0.03em;
`

export const Title1 = styled.h1`
  font-family: ${props => props.theme.titleFontFamily};
  color: ${props => props.theme.titleTextColor};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0em;
  font-size: 2.827em;
`

export const Title2 = styled.h2`
  font-family: ${props => props.theme.titleFontFamily};
  color: ${props => props.theme.titleTextColor};
  text-transform: uppercase;
  letter-spacing: 0em;
  line-height: 0.78;
  font-size: 8em;
  margin: 0.6em 0 0.2em;
  padding-bottom: 0.1em;
  border-bottom: 0.04em solid ${props => props.theme.titleTextColor};
`

export const Title3 = styled.h3`
  font-family: ${props => props.theme.titleFontFamily};
  color: ${props => props.theme.titleTextColor};
  font-size: 1.8em;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  text-decoration: underline;
  margin: 0.2em 0 0.1em;
`
export const Paragraph = styled.p`
  font-family: ${props => props.theme.bodyFontFamily};
  color: ${props => props.theme.titleTextColor};
  font-weight: 400;
  line-height: ${props => (props.lineHeight ? props.lineHeight : 1.4)};
  font-size: 1.3em;
  margin-block-start: 0.4em;
  margin-block-end: 1em;
`
// 0.707em
// 0.5em
// 0.354em
