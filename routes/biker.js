

let router = require("express").Router();
const bikers = require('../controllers/biker');

router.get('/parcels', bikers.findAvailableParcels);
router.put('/:bikerId/parcels/:parcelId/pickup', bikers.pickUpParcel);
router.put('/:bikerId/parcels/:parcelId/delivery', bikers.deliverParcel);


module.exports = router;

// ------------------------- experimental -------------------------------------

// router.get('/:id/parcels', bikers.findAllParcels);
// router.get('/:id', bikers.findOne);
