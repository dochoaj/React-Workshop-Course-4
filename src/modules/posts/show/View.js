import React, { Component } from 'react'

export default class View extends Component {
  render() {
    return (
      <div className="show-post">
        <div className="col-lg-8">
          <h1>Blog post title!</h1>
          <p>
            <span className="glyphicon glyphicon-time" />
            Posted on August 24, 2013 at 9:00 PM
          </p>
          <hr />
          <img
            className="img-responsive"
            src="http://placehold.it/900x300"
            alt=""
          />
          <hr />
          <p>
            Content
          </p>
          <hr />
        </div>
      </div>
    )
  }
}
