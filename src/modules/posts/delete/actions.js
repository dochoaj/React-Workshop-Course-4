import { PostAxios } from '../../../utils'

export const DESTROY_POST = 'DESTROY_POST'

export function deletePost(id, callbacks = null) {
  return dispatch => {
    PostAxios.delete(`/posts/${id}`)
      .then(() => {
        dispatch({ type: DESTROY_POST, payload: id })
      })
      .then(() => {
        if (callbacks && typeof callbacks.success === 'function') {
          callbacks.success()
        }
      })
      .catch((error) => {
        if (callbacks && typeof callbacks.failure === 'function') {
          callbacks.failure(error)
        }
      })
  }
}
