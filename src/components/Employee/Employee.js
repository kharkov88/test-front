import React from 'react'
import {Segment, Label, Button} from 'semantic-ui-react'

const Employee = (props) => (
  <Segment className='employer'>
    <Label>
      {props.name}, {props.age}
    </Label>
    <div id='cpanel'>
      <i className="fas fa-edit"></i>
      <i className="fas fa-trash" onClick={() => props.deleteItem(props.id)}/>
    </div>
  </Segment>
)

export default Employee
