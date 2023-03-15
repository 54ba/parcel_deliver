
let router = require("express").Router();
const senders = require('../controllers/sender');

router.post('/', senders.create);
router.get('/:id', senders.findOne);
router.post('/:id/parcels', senders.createParcel);
router.get('/:id/parcels', senders.findAllParcelsStatus);
router.get('/:id//parcels', senders.findAllParcels);
router.put('/:senderId//parcels/:parcelId/cancel', senders.cancelParcel);
router.put('/:senderId//parcels/:parcelId/status', senders.updateParcelStatus);

// app.use('/senders', router);
module.exports = router;