import React, { Component } from 'react'
import classNames from 'classnames'

class Window extends Component {
  render() {
    const className = classNames(this.props.className)

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

Window.defaultProps = {
  className: 'window'
}

export default Window
