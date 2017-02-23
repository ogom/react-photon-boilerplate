import React, { Component } from 'react'
import classNames from 'classnames'

class ButtonGroup extends Component {
  render() {
    const className = classNames(this.props.className)

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

ButtonGroup.defaultProps = {
  className: 'btn-group'
}

export default ButtonGroup
