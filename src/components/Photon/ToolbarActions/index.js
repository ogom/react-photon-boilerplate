import React, { Component } from 'react'
import classNames from 'classnames'

class ToolbarActions extends Component {
  render() {
    const className = classNames(this.props.className)

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

ToolbarActions.defaultProps = {
  className: 'toolbar-actions'
}

export default ToolbarActions
