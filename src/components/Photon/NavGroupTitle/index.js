import React, { Component } from 'react'
import classNames from 'classnames'

class NavGroupTitle extends Component {
  render() {
    const className = classNames(this.props.className)

    return (
      <div className={className}>
        {this.props.title}
        {this.props.children}
      </div>
    )
  }
}

NavGroupTitle.defaultProps = {
  className: 'nav-group-title'
}

export default NavGroupTitle
