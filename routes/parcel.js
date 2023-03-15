

let router = require("express").Router();
const parcels = require('../controllers/parcel');
const bikers = require('../controllers/biker');

router.get('/', bikers.findAllParcelswithStatus);
router.put('/:id/pickup', bikers.assignParcel);
router.put('/:id/delivery', bikers.deliverParcel);

router.get('/', parcels.findAll);
router.post('/', parcels.create);
router.get('/:id', parcels.findOne);


module.exports = router;