import React, { Component } from 'react'
import Table from './Table'

class View extends Component {
  componentWillMount() {
    this.props.triggerLoading()
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  renderContent() {
    if (this.props.loading) {
      return <h1>Loading ...</h1>
    }

    return <Table data={this.props.posts} />
  }

  render() {
    return (
      <div className="list-posts">
        {this.renderContent()}
      </div>
    )
  }
}

View.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.object),
  loading: React.PropTypes.bool,
  fetchPosts: React.PropTypes.func,
  triggerLoading: React.PropTypes.func,
}

export default View
