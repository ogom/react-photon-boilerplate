import React, { Component } from 'react'
import classNames from 'classnames'

class WindowContent extends Component {
  render() {
    const className = classNames(this.props.className)

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

WindowContent.defaultProps = {
  className: 'window-content'
}

export default WindowContent
