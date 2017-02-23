import React, { Component } from 'react'
import ToolbarHeader from '../Photon/ToolbarHeader'
import ToolbarActions from '../Photon/ToolbarActions'
import ButtonGroup from '../Photon/ButtonGroup'
import Button from '../Photon/Button'

class Header extends Component {
  render() {
    return (
      <ToolbarHeader title="React Photon Boilerplate">
        <ToolbarActions>
          <ButtonGroup>
            <Button icon="home"/>
            <Button icon="folder"/>
            <Button icon="cloud"/>
            <Button icon="popup"/>
            <Button icon="shuffle"/>
          </ButtonGroup>
          <Button icon="home" label="Filters"/>
          <Button icon="megaphone" dropdown pull="right"/>
        </ToolbarActions>
      </ToolbarHeader>
    )
  }
}

export default Header
