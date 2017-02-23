import React, { Component } from 'react'
import classNames from 'classnames'

class Button extends Component {
  icon() {
    if (this.props.icon) {
      const icontext = this.props.label ? 'icon-text' : ''

      return (
        <span className={`icon icon-${this.props.icon} ${icontext}`}></span>
      )
    }
  }

  render() {
    const className = classNames(
      {
        'btn-primary': this.props.primary,
        'btn-positive': this.props.positive,
        'btn-negative': this.props.negative,
        'btn-warning': this.props.warning,
        'btn-large': this.props.large,
        'btn-mini': this.props.mini,
        'btn-dropdown': this.props.dropdown
      },
      this.props.pull ? `pull-${this.props.pull}` : '',
      this.props.className
    )

    return (
      <button className={className}>
        {this.icon()}
        {this.props.label}
      </button>
    )
  }
}

Button.defaultProps = {
  className: 'btn btn-default'
}

export default Button
