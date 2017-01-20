import React, { Component } from 'react'

class View extends Component {
  componentWillMount() {
    this.props.triggerLoading()
  }

  componentDidMount() {
    this.props.fetchPost(this.props.params.id)
  }

  render() {
    return (
      <div className="show-post">
        <div className="col-lg-8">
          <h1>{this.props.post.title}</h1>
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
            {this.props.post.body}
          </p>
          <hr />
        </div>
      </div>
    )
  }
}

View.propTypes = {
  post: React.PropTypes.shape({
    title: React.PropTypes.string,
    body: React.PropTypes.string,
  }),
  fetchPost: React.PropTypes.func,
  triggerLoading: React.PropTypes.func,
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
}

export default View
