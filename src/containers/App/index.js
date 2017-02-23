import React, { Component } from 'react'
import Window from '../../components/Photon/Window'
import WindowContent from '../../components/Photon/WindowContent'
import PaneGroup from '../../components/Photon/PaneGroup'
import Pane from '../../components/Photon/Pane'
import SplitPane from 'react-split-pane'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import Aside from '../../components/Aside'
import Main from '../../components/Main'

class App extends Component {
  render() {
    return (
      <Window>
        <Header/>
        <WindowContent>
          <PaneGroup>
            <SplitPane defaultSize={140}>
              <Pane className="pane sidebar">
                <Nav/>
              </Pane>
              <SplitPane defaultSize={180}>
                <Pane>
                  <Aside/>
                </Pane>
                <Pane>
                  <Main/>
                </Pane>
              </SplitPane>
            </SplitPane>
          </PaneGroup>
        </WindowContent>
        <Footer/>
      </Window>
    )
  }
}

export default App
