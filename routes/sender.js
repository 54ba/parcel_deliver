
let router = require("express").Router();
const senders = require('../controllers/sender');

router.post('/', senders.create);
router.post('/:id/parcels', senders.createParcel);
router.get('/:id/parcels', senders.findAllParcelsStatus);

module.exports = router;

// ------------------------- experimental -------------------------------------

// router.get('/:id', senders.findOne);
// router.post('/:id/parcels', senders.createParcel);
// router.put('/:senderId//parcels/:parcelId/cancel', senders.cancelParcel);
// router.put('/:senderId//parcels/:parcelId/status', senders.updateParcelStatus);
// router.get('/:id//parcels', senders.findAllParcels);
