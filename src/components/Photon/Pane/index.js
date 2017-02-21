import React, { Component } from 'react'
import classNames from 'classnames'
import style from './style.css'

class Pane extends Component {
  render() {
    const className = classNames(this.props.className)

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

Pane.defaultProps = {
  className: 'pane'
}

export default Pane
