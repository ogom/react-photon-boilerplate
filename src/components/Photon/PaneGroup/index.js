import React, { Component } from 'react'
import classNames from 'classnames'

class PaneGroup extends Component {
  render() {
    const className = classNames(this.props.className)

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

PaneGroup.defaultProps = {
  className: 'pane-group'
}

export default PaneGroup
