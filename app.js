const express = require("express");
const app = express()
const { connectToMongoose } = require("./config/database");
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser");


require("dotenv").config({ path: "config/config.env" })


app.use(cors())
app.use(express.json({ limit: "50mb" }));



connectToMongoose()



const user = require("./routes/user")

app.use("/api/v1", user)


module.exports = app