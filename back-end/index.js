const express = require("express");
const cors = require("cors");
const taskRoute = require("./routes/taskRoute")

const connect = require("./helper/db")
connect();

const port = 5000;
const app = express(); 

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,  
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());

app.use("/", taskRoute)

app.get("/", (req, res) => {
    res.send("Todo list backend")
})

app.get("/test", (req, res) => {
    res.send("This is test endpoint")
})



app.listen(port, () => {
    console.log(`server running at localhost:${port}`);
})