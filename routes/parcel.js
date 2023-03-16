

let router = require("express").Router();
const parcels = require('../controllers/parcel');

router.get('/', parcels.findAll);
router.get('/:id', parcels.findOne);
router.post('/', parcels.create);


module.exports = router;