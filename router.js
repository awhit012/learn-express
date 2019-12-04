var express = require('express')
var router = express.Router()
const lessonsController = require('./LessonsController')

router.get('/', lessonsController.all)
router.get('/:id', lessonsController.getOne)
router.post('/', lessonsController.create)
router.put('/:id', lessonsController.update)
router.delete('/:id', lessonsController.delete)

module.exports = router