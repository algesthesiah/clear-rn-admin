import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './res/redux/actions/demo'
import { StyleProvider, Root } from 'native-base'
import Route from './res/config/route'
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'
class ReduxRoute extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Root>
        <StyleProvider style={getTheme(material)}>
          <Route />
        </StyleProvider>
      </Root>
    )
  }
}
// 关联 redux store
function mapStateToProps(state) {
  return {
    userInfo: state.reducers.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxRoute)
