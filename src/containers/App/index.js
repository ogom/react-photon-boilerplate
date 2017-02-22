import React, { Component } from 'react'
import './style.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Window from '../../components/Photon/Window'
import WindowContent from '../../components/Photon/WindowContent'
import PaneGroup from '../../components/Photon/PaneGroup'
import Pane from '../../components/Photon/Pane'
import NavGroup from '../../components/Photon/NavGroup'
import NavGroupTitle  from '../../components/Photon/NavGroupTitle'
import NavGroupItem  from '../../components/Photon/NavGroupItem'
import ListGroup from '../../components/Photon/ListGroup'
import ListGroupHeader from '../../components/Photon/ListGroupHeader'
import ListGroupItem from '../../components/Photon/ListGroupItem'
import Input from '../../components/Photon/Input'
import SplitPane from 'react-split-pane'

class App extends Component {
  render() {
    return (
      <Window>
        <Header/>
        <WindowContent>
          <PaneGroup>
            <SplitPane defaultSize={160}>
              <Pane className="pane sidebar">
                <NavGroup>
                  <NavGroupTitle title="Favorites"/>
                  <NavGroupItem item="Home" icon="home"/>
                  <NavGroupItem item="Downloads" icon="download"/>
                  <NavGroupItem item="Documents" icon="folder"/>
                </NavGroup>
              </Pane>
              <SplitPane defaultSize={200}>
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
