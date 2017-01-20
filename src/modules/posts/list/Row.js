import React, { Component } from 'react'
import { Link } from 'react-router'

class Row extends Component {
  render() {
    return (
      <tr>
        <td>
          <Link to={`posts/${this.props.id}`}>
            {this.props.title}
          </Link>
        </td>
        <td>
          <button className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    )
  }
}

Row.propTypes = {
  id: React.PropTypes.number,
  title: React.PropTypes.string,
}

export default Row
