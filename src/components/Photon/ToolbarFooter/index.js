import React, { Component } from 'react'
import classNames from 'classnames'

class ToolbarFooter extends Component {
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

ToolbarFooter.defaultProps = {
  className: 'toolbar toolbar-footer'
}

export default ToolbarFooter
