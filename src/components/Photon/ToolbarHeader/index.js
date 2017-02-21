import React, { Component } from 'react'
import classNames from 'classnames'

class ToolbarHeader extends Component {
  title() {
    if (this.props.title) {
      return (
        <p className="title">{this.props.title}</p>
      )
    }
  }

  render() {
    const className = classNames(this.props.className)

    return (
      <div className={className}>
        {this.title()}
        {this.props.children}
      </div>
    )
  }
}

ToolbarHeader.defaultProps = {
  className: 'toolbar toolbar-header'
}

export default ToolbarHeader
