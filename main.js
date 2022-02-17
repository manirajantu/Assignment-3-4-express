const express = require('express')
const child1Router = require("./routes/child1")
const child2Router = require("./routes/child2")

const app = express();

app.use(express.json());
app.use("/child2", child2Router)
app.use("/child1", child1Router)

app.get("/", function (req, res){
    res.status(200);
    res.json({message: "Search for vehicle and Garage?"});

})

app.listen(3000);