import React, { Component } from 'react'
import { Link } from 'react-router'

class Row extends Component {
  constructor(props) {
    super(props)

    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  onDeleteClick(event) {
    event.preventDefault()

    if (confirm('Are you sure?')) {
      this.props.deletePost(this.props.id)
    }
  }

  render() {
    return (
      <tr>
        <td>
          <Link to={`posts/${this.props.id}`}>
            {this.props.title}
          </Link>
        </td>
        <td>
          <button
            onClick={this.onDeleteClick}
            className="btn btn-danger"
            >
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
  deletePost: React.PropTypes.func,
}

export default Row
