import React, { Component } from 'react'
import styled from 'styled-components'
import { Display1 } from 'components/common'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Word = styled(Display1)`
  color: ${props => props.theme.titleTextColor};
  font-size: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  transition: all 0.3s;
`
const Phrase = styled(Word)`
  font-size: 7rem;
`

class Intro extends Component {
  constructor(props) {
    super(props)
    this.frameDuration = 300

    this.state = {
      currentFrame: 0,
      animationFinished: false,
    }
  }

  componentDidMount() {
    this.start()
  }

  start = () => {
    setTimeout(this.update, this.frameDuration)
  }

  update = () => {
    const { currentFrame } = this.state
    const { words } = this.props
    const frames = words.split(' ')
    if (currentFrame >= frames.length - 1) {
      this.onFinish()
    } else {
      this.setState({ currentFrame: this.state.currentFrame + 1 })
      this.loop = setTimeout(this.update, this.frameDuration)
    }
  }

  renderFrame = frame => {
    const { words } = this.props
    const frames = words.split(' ')
    return frames[frame]
  }

  onFinish = () => {
    this.setState({ animationFinished: true })
    const { onFinish } = this.props
    if (onFinish) onFinish()
  }

  render() {
    const { currentFrame, animationFinished } = this.state
    const { words } = this.props
    return (
      <Container>
        {!animationFinished ? (
          <Word>{this.renderFrame(currentFrame)}</Word>
        ) : (
          <Phrase>{words}</Phrase>
        )}
      </Container>
    )
  }
}

export default Intro
