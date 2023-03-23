const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, "Please enter a name"],
   },

   address: {
      type: String,
      required: [true, "Please enter address"],
   },

   age: {
      type: Number,
      required: [true, "Please enter age"],
   },

   department: {
      type: String,
      default: "It"
   },

   employeeStatus: {
      type: String,
      required: [true, "Please enter your status"],
   },
})

module.exports = mongoose.model("user", userSchema)