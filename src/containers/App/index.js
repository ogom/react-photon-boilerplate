import React, { Component } from 'react'
import './style.css'

import Window from '../../components/Photon/Window'
import WindowContent from '../../components/Photon/WindowContent'

import PaneGroup from '../../components/Photon/PaneGroup'
import Pane from '../../components/Photon/Pane'

class App extends Component {
  render() {
    return (
      <Window>
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
      </Window>
    )
  }
}

export default App
