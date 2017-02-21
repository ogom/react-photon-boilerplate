import React, { Component } from 'react'
import classNames from 'classnames'

class Input extends Component {
  render() {
    const className = classNames(this.props.className)

    return (
      <input className={className}
        type={this.props.type}
        placeholder={this.props.placeholder}
      />
    )
  }
}

Input.defaultProps = {
  className: 'form-control'
}

export default Input
