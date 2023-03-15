

let router = require("express").Router();
const bikers = require('../controllers/biker');

router.get('/:id/parcels', bikers.findAllParcels);
router.get('/:id', bikers.findOne);

router.get('/parcels', bikers.findAllParcelswithStatus);
router.put('/:bikerId/parcels/:parcelId/pickup', bikers.assignParcel);
router.put('/:bikerId/parcels/:parcelId/delivery', bikers.deliverParcel);


// app.use('/bikers', router);
module.exports = router;