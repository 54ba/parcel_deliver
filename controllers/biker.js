const { Biker, Parcel } = require('../models/models');

// Get the list of all parcels for a biker
exports.findAllParcels = async (req, res) => {
    try {
        const biker = await Biker.findById(req.params.id);
        if (!biker) {
            return res.status(404).send('Biker not found');
        }
        const parcels = await Parcel.find({ status: 'created' });
        res.send(parcels);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

};


// Get a biker by ID
exports.findOne = async (req, res) => {
    try {
        const biker = await Biker.findById(req.params.id);
        if (!biker) {
            return res.status(404).send('Biker not found');
        }
        res.send(biker);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

// Get all parcels available for pickup by the biker
exports.findAllParcelswithStatus = async (req, res) => {
    try {
        const parcels = await Parcel.find({ status: 'created' });
        res.send(parcels);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}


// Get a list of parcels for a given biker
// router.get('/parcels', async (req, res) => {
//     try {
//         const biker = await Biker.findOne({ user: req.user._id });
//         if (!biker) {
//             return res.status(400).send('Invalid biker ID');
//         }

//         const parcels = await Parcel.find({ status: 'created' }).populate('sender', 'name');
//         res.send(parcels);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//     }
// });

// Pick up a parcel and assign it to the biker
exports.assignParcel = async (req, res) => {
    try {
        const parcel = await Parcel.findById(req.params.id);
        if (!parcel) {
            return res.status(404).send('Parcel not found');
        }
        if (parcel.status !== 'created') {
            return res.status(400).send('Parcel already picked up or delivered');
        }
        const biker = await Biker.findById(req.body.bikerId);
        if (!biker) {
            return res.status(404).send('Biker not found');
        }
        parcel.status = 'out for delivery';
        parcel.bikerId = biker.id;
        await parcel.save();
        res.send(parcel);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}


// Update a parcel status to "picked up" by a biker
// router.put('/parcels/:id/pickup', async (req, res) => {
//     try {
//         const parcel = await Parcel.findById(req.params.id);
//         if (!parcel) {
//             return res.status(404).send('Parcel not found');
//         }
//         if (parcel.status !== 'created') {
//             return res.status(400).send('Parcel already picked up or delivered');
//         }

//         const biker = await Biker.findById(req.user.id);
//         if (!biker) {
//             return res.status(404).send('Biker not found');
//         }

//         // update parcel status to picked up
//         parcel.status = 'picked up';
//         parcel.pickedUpBy = biker._id;
//         parcel.pickedUpAt = new Date();
//         await parcel.save();

//         // update the status of the order for the sender
//         const sender = await Sender.findById(parcel.sender);
//         if (sender) {
//             const senderParcel = sender.parcels.find(p => p._id.toString() === parcel._id.toString());
//             if (senderParcel) {
//                 senderParcel.status = 'picked up';
//                 senderParcel.pickedUpAt = parcel.pickedUpAt;
//                 await sender.save();
//             }
//         }

//         res.send('Parcel successfully picked up');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });
// Update the delivery timestamp and status of a parcel to "Delivered"
exports.deliverParcel = async (req, res) => {
    try {
        const parcel = await Parcel.findById(req.params.id);
        if (!parcel) {
            return res.status(404).send('Parcel not found');
        }
        if (parcel.status !== 'out for delivery') {
            return res.status(400).send('Parcel has not been picked up yet');
        }
        if (parcel.bikerId !== req.body.bikerId) {
            return res.status(400).send('Parcel not assigned to biker');
        }
        parcel.status = 'delivered';
        parcel.deliveryTime = req.body.deliveryTime;
        await parcel.save();
        res.send(parcel);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

// Update a parcel status to "delivered" by a biker
// router.put('/parcels/:id/delivery', async (req, res) => {
//     try {
//         const parcel = await Parcel.findById(req.params.id);
//         if (!parcel) {
//             return res.status(404).send('Parcel not found');
//         }
//         if (parcel.status !== 'picked up') {
//             return res.status(404).send('Parcel not found');
//         }
//         if (parcel.status !== 'picked up') {
//             return res.status(400).send('Parcel not picked up yet');
//         }

//         const biker = await Biker.findById(req.user.id);
//         if (!biker) {
//             return res.status(404).send('Biker not found');
//         }

//         // update parcel status to delivered
//         parcel.status = 'delivered';
//         parcel.deliveredBy = biker._id;
//         parcel.deliveredAt = new Date();
//         await parcel.save();

//         // update the status of the order for the sender
//         const sender = await Sender.findById(parcel.sender);
//         if (sender) {
//             const senderParcel = sender.parcels.find(p => p._id.toString() === parcel._id.toString());
//             if (senderParcel) {
//                 senderParcel.status = 'delivered';
//                 senderParcel.deliveredAt = parcel.deliveredAt;
//                 await sender.save();
//             }
//         }

//         res.send('Parcel successfully delivered');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });
