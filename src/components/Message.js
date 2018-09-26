import React, {Component} from 'react'
import {Message} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {clearFlash} from '../actions'

class MessageBlock extends Component {
  constructor(props) {
    super(props);
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    this.props.dispatch(clearFlash())
  }

  render() {
    let {flash} = this.props;
    if (flash) {
      return (
        <Message
          onDismiss={this.handleDismiss}
          header='Message'
          color={flash.type}
          content={flash.message}
        />
      )
    }
    return null
  }
}

const mapStateToProps = state => {
  let {flash} = state;
  return {
    flash
  }
};

export default connect(mapStateToProps)(MessageBlock)