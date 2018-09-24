import React from 'react'
import {Button, Modal, Form, Dimmer, Loader} from 'semantic-ui-react'

class FormNewEmployer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      age: null
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeAge = this.handleChangeAge.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleChangeAge(e) {
    this.setState({
      age: e.target.value
    })
  }

  handleSubmit(e) {
    let newObj = {
      name: this.state.name,
      age: this.state.age
    }
    this.props.createItem(newObj)

  }

  render() {
    let {loading} = this.props

    return (
      <div>
        <Modal
          trigger={<Button color="orange">Create</Button>}
          header='Create New Employer'
          onActionClick={this.handleSubmit}
          content={<FormCuz
              handleSubmit={this.handleSubmit}
              handleChangeName={this.handleChangeName}
              handleChangeAge={this.handleChangeAge}
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

const FormCuz = (props) => (
  <Form onSubmit={props.handleSubmit} id="myform">
    <Form.Field>
      <label>Name</label>
      <input type='text' placeholder='First Name' onChange={props.handleChangeName}/>
    </Form.Field>
    <Form.Field>
      <label>Age</label>
      <input placeholder='Last Name' name='age' onChange={props.handleChangeAge}/>
    </Form.Field>
  </Form>
)
export default FormNewEmployer
