import React from 'react'
import { connect } from 'react-redux'
import {Router, Route} from 'react-router-dom'
import {Container, Label} from 'semantic-ui-react'
import { fetchData, deleteItem, createItem } from '../actions'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

class App extends React.Component {
  constructor(props) {
    super(props)
    this.renderMain = this.renderMain.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(fetchData)
  }
  render () {
    let {flash} = this.props
    return (
      <Router history={history}>
        <Container id="wrapper">
          {flash && <Label color={flash.type}>{flash.message}</Label>}
          <Route exact path='/' component={this.renderMain}/>
          <Route path='/login' component={LoginPage}/>
        </Container>
      </Router>
    )
  }
  renderMain () {
    let { data, isFetching, dispatch } = this.props
    return (
      <HomePage
        data={data}
        loading={isFetching}
        deleteItem={id => dispatch(deleteItem(id))}
        createItem={newItem => dispatch(createItem(newItem))}
      />
    )
  }
}

const mapStateToProps = state => {
  let { data, isFetching, flash } = state
  return {
    data,
    isFetching,
    flash
  }
}

export default connect(mapStateToProps)(App)
