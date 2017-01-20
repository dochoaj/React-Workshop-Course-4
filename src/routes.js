import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { Container as PostsList } from './modules/posts/list'
import { Container as PostShow } from './modules/posts/show'

import App from './App'

export default(
  <Route path="/" component={App}>
    <IndexRoute component={PostsList} />
    <Route path="posts" component={PostsList} />
    <Route path="posts/:id" component={PostShow} />
  </Route>
)
