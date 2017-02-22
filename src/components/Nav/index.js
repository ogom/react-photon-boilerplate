import React, { Component } from 'react'
import NavGroup from '../Photon/NavGroup'
import NavGroupTitle  from '../Photon/NavGroupTitle'
import NavGroupItem  from '../Photon/NavGroupItem'

class Nav extends Component {
  render() {
    return (
      <NavGroup>
        <NavGroupTitle title="Favorites"/>
        <NavGroupItem item="Home" icon="home"/>
        <NavGroupItem item="Downloads" icon="download"/>
        <NavGroupItem item="Documents" icon="folder"/>
      </NavGroup>
    )
  }
}

export default Nav
