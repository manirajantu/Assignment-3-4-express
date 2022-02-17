const express = require("express")
const router = express.Router()

const child1 = [{ "Type":"Taxi", "carPlateNo":"SHA1111Z"}]

router.get("/", function (req, res) {
    res.status(200);
    res.json(child1);
})

router.post('/', function (req, res) {

    if (child1.length > 0 && child1.some((f) => f.carPlateNo === req.body.carPlateNo)) {
        res.status(409);
        return res.send("Car plate number must be unique.");
}

child1.push(req.body);
    res.json(child1)
})

router.put('/:carPlateNo', function (req, res) {

    for (let f of child1) {
        if (f.carPlateNo === req.params.carPlateNo) {
            f.type = req.body.type;
            res.status(200);
            return res.send(child1);
        }
    res.status(404);
    return res.send("Please search again for the car plate no!");
    }
})
module.exports = router