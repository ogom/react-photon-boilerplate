import React, { Component } from 'react'
import ListGroup from '../Photon/ListGroup'
import ListGroupHeader from '../Photon/ListGroupHeader'
import ListGroupItem from '../Photon/ListGroupItem'
import Input from '../Photon/Input'

class Aside extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupHeader>
          <Input type="text" placeholder="Search for someone" />
        </ListGroupHeader>
        <ListGroupItem>
          Item01
        </ListGroupItem>
        <ListGroupItem>
          Item02
        </ListGroupItem>
        <ListGroupItem>
          Item03
        </ListGroupItem>
      </ListGroup>
    )
  }
}

export default Aside
