import {
  FETCH_POST,
  LOADING_POST,
} from './actions'

const initialState = {
  data: {},
  loading: true,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, data: action.payload, loading: false }
    case LOADING_POST:
      return { ...state, loading: true }
    default:
      return state
  }
}
