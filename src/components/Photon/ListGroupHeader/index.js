import React, { Component } from 'react'
import classNames from 'classnames'

class ListGroup extends Component {
  render() {
    const className = classNames(this.props.className)

    return (
      <ul className={className}>
        {this.props.children}
      </ul>
    )
  }
}

ListGroup.defaultProps = {
  className: 'list-group-header'
}

export default ListGroup
