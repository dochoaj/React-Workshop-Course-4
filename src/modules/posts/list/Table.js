import React, { Component } from 'react'
import Row from './Row'

class Table extends Component {
  buildRows() {
    return this.props.data.map((row) => {
      const rowData = {
        title: row.title,
        id: row.id,
        key: row.id,
      }

      return <Row {...rowData} />
    })
  }

  render() {
    return (
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>Title</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.buildRows()}
        </tbody>
      </table>
    )
  }
}

Table.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
}

export default Table
