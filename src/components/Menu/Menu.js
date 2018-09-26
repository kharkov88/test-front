import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class CustomMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {activeItem: 'home'};
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}) {
    this.setState({activeItem: name});
  }

  render() {
    const {activeItem} = this.state;

    return (
      <Menu secondary>
        <Link to='/'>
          <Menu.Item
            as='span'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to='/employee'>
          <Menu.Item
            as='span'
            name='employee'
            active={activeItem === 'employee'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to='/department'>
          <Menu.Item
            as='span'
            name='department'
            active={activeItem === 'department'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              as='span'
              name='login'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu.Menu>
      </Menu>
    )
  }
}