import React, { Component } from 'react'
import ToolbarFooter from '../Photon/ToolbarFooter'
import ToolbarActions from '../Photon/ToolbarActions'
import Button from '../Photon/Button'

class Footer extends Component {
  render() {
    return (
      <ToolbarFooter>
        <ToolbarActions>
          <Button label="Cancel"/>
          <Button label="Save" pull="right" primary/>
        </ToolbarActions>
      </ToolbarFooter>
    )
  }
}

export default Footer
