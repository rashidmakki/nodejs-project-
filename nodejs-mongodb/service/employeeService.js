const EmployeeModel = require("../model/employee");

exports.getAllEmployees= async () => {
  return await EmployeeModel.find();
};

exports.createEmployee = async (employee) => {
  return await EmployeeModel.create(employee);
};
exports.getEmployeeById = async (id) => {
  return await EmployeeModel.findById(id);
};

exports.updateEmployee = async (id, employee) => {
  return await EmployeeModel.findByIdAndUpdate(id, employee);
};

exports.deleteEmployee = async (id) => {
  return await EmployeeModel.findByIdAndDelete(id);
};
