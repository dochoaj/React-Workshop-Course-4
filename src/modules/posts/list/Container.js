import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts, triggerLoading } from '../list'
import { deletePost } from '../delete'

import View from './View'

function mapStateToProps(state) {
  return {
    posts: state.posts.data,
    loading: state.posts.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
    triggerLoading: bindActionCreators(triggerLoading, dispatch),
    deletePost: bindActionCreators(deletePost, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
