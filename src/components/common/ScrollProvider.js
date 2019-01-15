import React, { Component } from 'react'

import throttle from 'lodash.throttle'

class ScrollProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollTop: 0,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 100))
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth',
    // })
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    var value = window.pageYOffset || document.documentElement.scrollTop
    this.setState({ scrollTop: value })
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        scrollTop: this.state.scrollTop,
      })
    })

    return children
  }
}

export default ScrollProvider
