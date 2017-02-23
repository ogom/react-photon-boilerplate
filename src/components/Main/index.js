import React, { Component } from 'react'
import Table from '../Photon/Table'
import './style.css'

class Main extends Component {
  render() {
    const data = [
      {name: 'photon.css', kind: 'CSS', size: '28K'},
      {name: 'photon.css', kind: 'CSS', size: '28K'},
      {name: 'photon.css', kind: 'CSS', size: '28K'},
      {name: 'photon.css', kind: 'CSS', size: '28K'}
    ]

    return (
      <div className="main">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Kind</th>
              <th>File Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>photon.css</td>
              <td>CSS</td>
              <td>28K</td>
            </tr>
            <tr>
              <td>photon.css</td>
              <td>CSS</td>
              <td>28K</td>
            </tr>
            <tr>
              <td>photon.css</td>
              <td>CSS</td>
              <td>28K</td>
            </tr>
            <tr>
              <td>photon.css</td>
              <td>CSS</td>
              <td>28K</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Main
