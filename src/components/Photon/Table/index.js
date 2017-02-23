import React, { Component } from 'react'
import classNames from 'classnames'

class Table extends Component {
  render() {
    const className = classNames(this.props.className)

    return (
      <table className={className}>
        {this.props.children}
      </table>
    )
  }
}

Table.defaultProps = {
  className: 'table-striped'
}

export default Table
