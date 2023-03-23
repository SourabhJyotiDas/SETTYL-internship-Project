
const User = require("../models/user")


exports.creatUser = async (req, res) => {
   try {
      const { name, age, address, employeeStatus, department } = req.body;
      let user = await User.create({
         name, age, address, employeeStatus, department
      });

      res.status(201).json({
         success: true,
         user,
      });

   } catch (error) {
      res.status(500).json({
         success: false,
         message: error.message
      })
   }
}



exports.updateProfile = async (req, res) => {
   try {

      const user = await User.findById(req.params.id);

      const { name, address, age, department, employeeStatus } = req.body;

      if (name) {
         user.name = name;
      }
      if (address) {
         user.address = address;
      }
      if (age) {
         user.age = age;
      }
      if (department) {
         user.department = department;
      }
      if (employeeStatus) {
         user.employeeStatus = employeeStatus;
      }

      await user.save();

      res.status(200).json({
         success: true,
         message: "Profile Updated",
      });

   } catch (error) {
      res.status(500).json({
         success: false,
         message: error.message
      })
   }
}


exports.getUserdetails = async (req, res) => {
   try {
      const user = await User.findById(req.params.id)

      if (!user) {
         return res.status(404).json({
            success: false,
            message: "User not found",
         });
      }

      res.status(200).json({
         success: true,
         user,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: error.message,
      });
   }
}


exports.getAllUser = async (req, res) => {
   try {
      let users = await User.find()
      res.status(201).json({
         success: true,
         users,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: error.message
      })
   }
}