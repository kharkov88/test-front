import React from 'react'
import {Button, Container, Form, Dimmer, Loader, Label} from "semantic-ui-react"
import {connect} from 'react-redux'
import {fetchLogin} from '../actions'

const config = {
  msg_required: 'Required field!'
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      alert_user: '',
      alert_pass: ''
    };
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeLogin(e) {
    this.setState({
      user: e.target.value,
      alert_user: ''
    })
  }

  handleChangePass(e) {
    this.setState({
      password: e.target.value,
      alert_pass: ''
    })
  }

  handleSubmit() {
    let {user, password} = this.state;
    if (!user || !password) {
      !user && this.setState({
        alert_user: config.msg_required
      });
      !password && this.setState({
        alert_pass: config.msg_required
      });
    } else {
      let {dispatch} = this.props;
      let newObj = {
        user: this.state.user,
        password: this.state.password
      };
      dispatch(fetchLogin(newObj));
      this.setState({
        user: '',
        password: ''
      })
    }
  }

  render() {
    let {user, password, alert_user, alert_pass} = this.state;
    let {isFetching} = this.props;
    return (
      <Container id='wrapper'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field required inline>
            <input type='text' placeholder='admin' value={user} onChange={this.handleChangeLogin}/>
            {alert_user && <Label pointing="left" color="red">{alert_user}</Label>}
          </Form.Field>
          <Form.Field required inline>
            <input type='password' placeholder='12345' value={password} onChange={this.handleChangePass}/>
            {alert_pass && <Label pointing="left" color="red">{alert_pass}</Label>}
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
        <Dimmer active={isFetching} inverted>
          <Loader inverted content='Loading'/>
        </Dimmer>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  let {isFetching} = state;
  return {
    isFetching
  }
};

export default connect(mapStateToProps)(LoginPage)