import React, { Component } from 'react'

export default class View extends Component {
  render() {
    return (
      <div className="show-post">
        <div className="col-lg-8">
          <h1>Blog post title!</h1>
          <p className="lead">by Someone Unknown</p>
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
          <div className="well">
            <h4>Leave a Comment:</h4>
            <form role="form">
              <div className="form-group">
                <textarea className="form-control" rows="3" />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                >
                Submit
              </button>
            </form>
          </div>
          <div className="media">
            <a
              className="pull-left"
              >
              <img
                className="media-object"
                src="http://placehold.it/64x64"
                alt=""
              />
            </a>
            <div className="media-body">
              <h4 className="media-heading">
                Start Bootstrap&nbsp;
                <small>August 25, 2014 at 9:30 PM</small>
              </h4>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio,
              vestibulum in vulputate at, tempus viverra turpis. Fusce
              condimentum nunc ac nisi vulputate fringilla. Donec lacinia
              congue felis in faucibus.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
