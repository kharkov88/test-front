import React from 'react';
import {connect} from 'react-redux';
import Employee from './Employee';
import FormNewEmployee from './FormNewEmployee';
import {createItem, deleteItem} from "../../actions";
import {getFieldsFromDep} from '../../selectors';

class EmployeeContainer extends React.Component {
  render() {
    let {employees, departments, dispatch} = this.props
    return (
      <div>
        {
          employees && employees.map((item, idx) => {
            return (
              <Employee
                key={idx}
                name={item.name}
                age={item.age}
                deleteItem={() => dispatch(deleteItem(item._id))}
              />)
          })
        }
        {
          <FormNewEmployee
            createItem={newItem => dispatch(createItem(newItem))}
            loading={false}
            options={departments}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {employees, isFetching, flash} = state;
  return {
    employees,
    departments: getFieldsFromDep(state),
    isFetching,
    flash
  }
};

export default connect(mapStateToProps)(EmployeeContainer)