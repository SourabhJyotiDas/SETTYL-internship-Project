const mongoose =require("mongoose");

exports.connectToMongoose = ()=>{
   mongoose.connect(process.env.MONGO_URI)
   .then((con)=>{
      console.log("Connected to mongoose successfully");
   })
   .catch((err)=>{
      console.log(err);
   })
} 