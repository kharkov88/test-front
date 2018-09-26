import React from 'react'
import {Button, Modal, Form, Dimmer, Loader, Select} from 'semantic-ui-react'

class FormNewEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      department: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, {name, value}) {
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    let newObj = {
      name: this.state.name,
      age: this.state.age,
      department: this.state.department
    };
    this.props.createItem(newObj)

  }

  render() {
    const {loading, options} = this.props;
    const {name, age, department} = this.state;
    return (
      <div>
        <Modal
          trigger={<Button color="orange">Create</Button>}
          header='Create new employee'
          onActionClick={this.handleSubmit}
          content={
            <CustomForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              age={age}
              name={name}
              options={options}
              department={department}
            />}
          actions={[{key: 'done', content: 'Done', positive: true}]}
        />
        <Dimmer active={loading} inverted>
          <Loader inverted content='Loading'/>
        </Dimmer>
      </div>
    )
  }
}

const CustomForm = (props) => (
  <Form onSubmit={props.handleSubmit} id="myform">
    <Form.Input
      required
      label='Name'
      placeholder='Name'
      name='name'
      value={props.name}
      onChange={props.handleChange}
    />
    <Form.Input
      required
      label='Age'
      placeholder='Age'
      name='age'
      value={props.age}
      onChange={props.handleChange}
    />
    <Form.Select
      required
      fluid
      name='department'
      label='Department'
      value={props.department}
      options={props.options}
      placeholder='Department'
      onChange={props.handleChange}
    />
  </Form>
);
export default FormNewEmployee
