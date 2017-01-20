import { PostAxios } from '../../../utils'

export const FETCH_POST = 'FETCH_POST'
export const LOADING_POST = 'LOADING_POST'

export function fetchPost(id) {
  return dispatch => {
    PostAxios.get(`/posts/${id}`)
      .then(response => {
        dispatch({ type: FETCH_POST, payload: response.data })
      })
  }
}

export function triggerLoading() {
  return dispatch => {
    dispatch({ type: LOADING_POST, payload: true })
  }
}
