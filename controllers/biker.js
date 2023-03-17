const { Parcel, Biker } = require('../models');


// Get all parcels available for pickup by the biker
const findAvailableParcels = async (req, res) => {
    try {
        const biker = await Biker.findById(req.params.id);
        if (!biker) {
            return res.status(400).send('Invalid biker ID');
        }

        const parcels = await Parcel.find({ status: 'created' }).populate('sender', 'name');

        res.send(parcels);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}




const findPickedUpParcels = async (req, res) => {
    try {
        const biker = await Biker.findById(req.params.id);
        if (!biker) {
            return res.status(400).send('Invalid biker ID');
        }

        const parcels = await Parcel.find({ status: 'pickedup', biker: req.params.id }).populate('sender', 'name');

        res.send(parcels);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}


const findDeliveredParcels = async (req, res) => {
    try {
        const biker = await Biker.findById(req.params.id);
        if (!biker) {
            return res.status(400).send('Invalid biker ID');
        }

        const parcels = await Parcel.find({ status: 'delivered', biker: req.params.id }).populate('sender', 'name');;

        res.send(parcels);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}





// Update a parcel status to "picked up" by a biker
// router.put('/parcels/:id/pickup',
const pickUpParcel = async (req, res) => {
    try {
        const parcel = await Parcel.findById(req.params.parcelId);
        if (!parcel) {
            return res.status(404).send('Parcel not found');
        }
        if (parcel.status !== 'created') {
            return res.status(400).send('Parcel already picked up or delivered');
        }

        const biker = await Biker.findById(req.params.bikerId);
        if (!biker) {
            return res.status(404).send('Biker not found');
        }

        // update parcel status to picked up
        parcel.status = 'picked up';
        parcel.pickedUpBy = biker._id;
        parcel.pickedUpAt = new Date();
        await parcel.save();

        // update the status of the order for the sender
        const sender = await Sender.findById(parcel.sender._id);
        if (sender) {
            const senderParcel = sender.parcels.find(p => p._id.toString() === parcel._id.toString());
            if (senderParcel) {
                senderParcel.status = 'picked up';
                senderParcel.pickedUpAt = parcel.pickedUpAt;
                await sender.save();
            }
        }

        res.send('Parcel successfully picked up');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


// Update the delivery timestamp and status of a parcel to "Delivered"
const deliverParcel = async (req, res) => {
    try {
        const parcel = await Parcel.findById(req.params.parcelId);
        if (!parcel) {
            return res.status(404).send('Parcel not found');
        }
        if (parcel.status !== 'out for delivery') {
            return res.status(400).send('Parcel has not been picked up yet');
        }
        if (parcel.bikerId !== req.body.bikerId) {
            return res.status(400).send('Parcel not assigned to biker');
        }
        const biker = await Biker.findById(req.params.bikerId);
        if (!biker) {
            return res.status(404).send('Biker not found');
        }

        parcel.status = 'delivered';
        parcel.deliveredBy = biker._id;
        parcel.deliveryTime = req.body.deliveryTime;
        await parcel.save();
        // update the status of the order for the sender
        const sender = await Sender.findById(parcel.sender._id);
        if (sender) {
            const senderParcel = sender.parcels.find(p => p._id.toString() === parcel._id.toString());
            if (senderParcel) {
                senderParcel.status = 'delivered';
                senderParcel.deliveredAt = parcel.deliveredAt;
                await sender.save();
            }
        }

        res.send('Parcel successfully delivered');

    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

module.exports =
{
    findAvailableParcels,
    findPickedUpParcels,
    findDeliveredParcels,
    pickUpParcel,
    deliverParcel
}


// ------------------------- experimental -------------------------------------



// Get a biker by ID
// exports.findOne = async (req, res) => {
//     try {
//         const biker = await Biker.findById(req.params.id);
//         if (!biker) {
//             return res.status(404).send('Biker not found');
//         }
//         res.send(biker);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//     }
// }


// // Get the list of all parcels for a biker
// exports.findAllParcels = async (req, res) => {
//     try {
//         const biker = await Biker.findById(req.params.id);
//         if (!biker) {
//             return res.status(404).send('Biker not found');
//         }
//         const parcels = await Parcel.find({ status: 'created' });
//         res.send(parcels);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }

// };

// Pick up a parcel and assign it to the biker
// exports.assignParcel = async (req, res) => {
//     try {
//         const parcel = await Parcel.findById(req.params.id);
//         if (!parcel) {
//             return res.status(404).send('Parcel not found');
//         }
//         if (parcel.status !== 'created') {
//             return res.status(400).send('Parcel already picked up or delivered');
//         }
//         const biker = await Biker.findById(req.body.bikerId);
//         if (!biker) {
//             return res.status(404).send('Biker not found');
//         }
//         parcel.status = 'out for delivery';
//         parcel.bikerId = biker.id;
//         await parcel.save();
//         res.send(parcel);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//     }
// }




