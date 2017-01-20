import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPost, triggerLoading } from '../show'

import View from './View'

function mapStateToProps(state) {
  return {
    post: state.post.data,
    loading: state.post.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPost: bindActionCreators(fetchPost, dispatch),
    triggerLoading: bindActionCreators(triggerLoading, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
