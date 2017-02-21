import React, { Component } from 'react'
import classNames from 'classnames'

class NavGroupItem extends Component {
  icon() {
    if (this.props.icon) {
      return (
        <span className={`icon icon-${this.props.icon}`}></span>
      )
    }
  }

  render() {
    const className = classNames(this.props.className)

    return (
      <a className={className}>
        {this.icon()}
        {this.props.item}
        {this.props.children}
      </a>
    )
  }
}

NavGroupItem.defaultProps = {
  className: 'nav-group-item'
}

export default NavGroupItem
