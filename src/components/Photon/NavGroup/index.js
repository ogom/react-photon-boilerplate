import React, { Component } from 'react'
import classNames from 'classnames'

class NavGroup extends Component {
  render() {
    const className = classNames(this.props.className)

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

NavGroup.defaultProps = {
  className: 'nav-group'
}

export default NavGroup
