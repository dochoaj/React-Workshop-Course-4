import { combineReducers } from 'redux'

import PostListReducer from './modules/posts/list'
import PostShowReducer from './modules/posts/show'

const reducers = combineReducers({
  posts: PostListReducer,
  post: PostShowReducer,
})

export default reducers
