import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import {Container, Dimmer, Loader} from 'semantic-ui-react'
import {fetchData} from '../actions'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import MessageBlock from './Message'
import Menu from './Menu'
import Employee from './Employee'
import Department from './Department'

import config from '../config'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchData(config.employees));
    this.props.dispatch(fetchData(config.departments));
  }

  render() {
    let {isFetching} = this.props;
    return (
      <BrowserRouter>
        <Container id="wrapper">
          <MessageBlock/>
          <Menu/>
          <Route exact path='/' component={HomePage}/>
          <Route path='/employee' component={Employee}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/department' component={Department}/>
          <Dimmer active={isFetching} inverted>
            <Loader inverted content='Loading'/>
          </Dimmer>
        </Container>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  let {data, isFetching, flash} = state;
  return {
    data,
    isFetching,
    flash
  }
};

export default connect(mapStateToProps)(App)
