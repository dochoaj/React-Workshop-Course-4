import React, { Component } from 'react'

export default class View extends Component {
  render() {
    return (
      <div className="list-posts">
        <table className="table table-condensed">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">An awesome title!</th>
              <td>Some author</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
