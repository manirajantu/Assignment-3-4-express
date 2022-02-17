const express = require("express")
const router = express.Router()

const child2 = [{garageNo:1, address:"Address 1" }]

router.get("/", function (req, res) {
    res.status(200);
    res.json(child2);

})

router.post("/", function (req, res){
    res.status(200);
    res.json(child2)
})

router.get('/:garageNo', function (req, res) {
    for (let f of child2) {
        if (f.garageNo === parseInt(req.params.garageNo)) {
            res.status(200);
            return res.json(f)
        }
        res.status(404);
        return res.send("Garage is not been found, try again.");
    }
})

module.exports = router