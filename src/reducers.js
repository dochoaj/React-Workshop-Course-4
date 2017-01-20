import { combineReducers } from 'redux'

import PostListReducer from './modules/posts/list'

const reducers = combineReducers({
  posts: PostListReducer,
})

export default reducers
