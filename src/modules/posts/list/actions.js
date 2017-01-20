import { PostAxios } from '../../../utils'

export const FETCH_POSTS = 'FETCH_POSTS'
export const LOADING_POSTS = 'LOADING_POSTS'

export function fetchPosts() {
  return dispatch => {
    PostAxios.get('/posts')
      .then(response => {
        dispatch({ type: FETCH_POSTS, payload: response.data })
      })
  }
}

export function triggerLoading() {
  return dispatch => {
    dispatch({ type: LOADING_POSTS, payload: true })
  }
}
