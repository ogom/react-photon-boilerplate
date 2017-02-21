import React, { Component } from 'react'
import './style.css'

import Window from '../../components/Photon/Window'
import WindowContent from '../../components/Photon/WindowContent'
import ToolbarHeader from '../../components/Photon/ToolbarHeader'
import ToolbarFooter from '../../components/Photon/ToolbarFooter'
import PaneGroup from '../../components/Photon/PaneGroup'
import Pane from '../../components/Photon/Pane'
import NavGroup from '../../components/Photon/NavGroup'
import NavGroupTitle  from '../../components/Photon/NavGroupTitle'
import NavGroupItem  from '../../components/Photon/NavGroupItem'
import ListGroup from '../../components/Photon/ListGroup'
import ListGroupHeader from '../../components/Photon/ListGroupHeader'
import ListGroupItem from '../../components/Photon/ListGroupItem'
import Input from '../../components/Photon/Input'

class App extends Component {
  render() {
    return (
      <Window>
        <ToolbarHeader title="Header"/>

        <WindowContent>
          <PaneGroup>
            <Pane className="pane-sm sidebar">
              <NavGroup>
                <NavGroupTitle title="Favorites"/>
                <NavGroupItem item="Home" icon="home"/>
                <NavGroupItem item="Downloads" icon="download"/>
                <NavGroupItem item="Documents" icon="folder"/>
              </NavGroup>
            </Pane>
            <Pane>
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
            </Pane>
            <Pane>
              Pane01
            </Pane>
          </PaneGroup>
        </WindowContent>

        <ToolbarFooter title="Footer"/>
      </Window>
    )
  }
}

export default App
