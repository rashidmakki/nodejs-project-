const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: String,
  salary: Number
});

module.exports = mongoose.model("Employee", employeeSchema);
