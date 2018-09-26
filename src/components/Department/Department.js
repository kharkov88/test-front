import React from 'react'
import {Card, Icon} from 'semantic-ui-react'

const CustomCard = ({img, name, director, countEmployees}) => (
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span>{director}</span>
      </Card.Meta>
      <Card.Description>bla bla</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user'/>
        {countEmployees.length} Employees
      </a>
    </Card.Content>
  </Card>
);

export default CustomCard