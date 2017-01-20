import React, { Component } from 'react'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="content">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <a
              className="navbar-brand"
              >
              Brand
            </a>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a>Posts</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >
                      My Username <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a>My profile</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container main-container">
          <div className="row">
            <div className="col-lg-8">
              {this.props.children}
            </div>
            <div className="col-lg-4">
              <div className="well">
                <h4>Actions</h4>
                <button className="btn btn-primary">Create Post</button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element,
}

export default App
