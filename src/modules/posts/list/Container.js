import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts, triggerLoading } from '../list'

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
