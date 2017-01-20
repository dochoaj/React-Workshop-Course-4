import {
  FETCH_POSTS,
  LOADING_POSTS,
} from './actions'

import {
  DESTROY_POST,
} from '../delete'

const initialState = {
  data: [],
  loading: true,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, data: action.payload, loading: false }
    case LOADING_POSTS:
      return { ...state, loading: true }
    case DESTROY_POST: {
      const index = state.data.findIndex(x => x.id === action.payload)
      const deleteResults = [...state.data]
      deleteResults.splice(index, 1)

      return { ...state, data: deleteResults }
    }
    default:
      return state
  }
}
