import React, { Component } from 'react'
import './style.css'

import Window from '../../components/Photon/Window'
import WindowContent from '../../components/Photon/WindowContent'
import ToolbarHeader from '../../components/Photon/ToolbarHeader'
import ToolbarFooter from '../../components/Photon/ToolbarFooter'
import PaneGroup from '../../components/Photon/PaneGroup'
import Pane from '../../components/Photon/Pane'

class App extends Component {
  render() {
    return (
      <Window>
        <ToolbarHeader title="Header"/>

        <WindowContent>
          <PaneGroup>
            <Pane>
              pane1
            </Pane>
            <Pane>
              pane2
            </Pane>
            <Pane>
              pane3
            </Pane>
          </PaneGroup>
        </WindowContent>

        <ToolbarFooter title="Footer"/>
      </Window>
    )
  }
}

export default App
