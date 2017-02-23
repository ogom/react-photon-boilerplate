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

    const ths = ['Name', 'Kind', 'File Size'].map((row) => (<th>{row}</th>))
    const tds = data.map((row) => {
      return (
        <tr>
          <td>{row.name}</td>
          <td>{row.kind}</td>
          <td>{row.size}</td>
        </tr>
      )
    })

    return (
      <div className="main">
        <Table>
          <thead><tr>{ths}</tr></thead>
          <tbody>{tds}</tbody>
        </Table>
      </div>
    )
  }
}

export default Main
