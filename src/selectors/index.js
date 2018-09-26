import {createSelector} from "reselect";

const getEmployees = state => state.employees;
const getDepartments = state => state.departments;

export const getCountEmp = createSelector(
  [getEmployees, getDepartments],
  (employees, departments) => {
    let result = {};
    departments.forEach(itemD => {
      result[itemD.name] = employees.filter(itemE => {
        return itemD._id === itemE.department
      })
    });
    console.log(result);
    return result
  }
);

export const getFieldsFromDep = createSelector(
  [getDepartments],
  (departments) => {
    return departments.map((item, idx) => {
      return {
        key: idx,
        text: item.name,
        value: item._id
      }
    })
  }
);