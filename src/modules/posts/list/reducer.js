import {
  FETCH_POSTS,
  LOADING_POSTS,
} from './actions'

const initialState = {
  data: {},
  loading: true,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, data: action.payload, loading: false }
    case LOADING_POSTS:
      return { ...state, loading: true }
    default:
      return state
  }
}
