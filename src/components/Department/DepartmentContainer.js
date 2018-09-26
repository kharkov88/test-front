import React from 'react';
import {connect} from 'react-redux';
import {getCountEmp} from '../../selectors';
import Department from "./Department";

class DepartmentContainer extends React.Component {
  render() {
    let {departments, countEmployees} = this.props;
    return (
      <div id='wrapper-department'>
        {
          departments && departments.map((item, idx) => {
            return (
              <Department
                key={idx}
                name={item.name}
                director={item.director}
                countEmployees={countEmployees[item.name]}
              />)
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  let {departments, isFetching, flash} = state;
  return {
    countEmployees: getCountEmp(state),
    departments,
    isFetching,
    flash
  }
};

export default connect(mapStateToProps)(DepartmentContainer)