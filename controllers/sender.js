const { Parcel, Sender } = require('../models');

// Create a new sender
const create = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if a sender with the same email already exists
        const existingSender = await Sender.findOne({ email });
        if (existingSender) {
            return res.status(409).send('A sender with the same email already exists');
        }

        // Create the new sender
        const sender = new Sender({
            name,
            email,
            password
        });
        await sender.save();

        res.status(201).json(sender);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


// Create a parcel by a sender
const createParcel = async (req, res) => {
    try {
        const sender = await Sender.findById(req.params.id);
        if (!sender) {
            return res.status(404).send('Sender not found');
        }
        const { pickUpAddress, dropOffAddress } = req.body;
        const parcel = new Parcel({ pickUpAddress, dropOffAddress, sender: sender._id });
        await parcel.save();

        res.send('Parcel created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

// Get the status of all parcels for a sender
const findParcelsByStatus = async (req, res) => {
    try {
        const sender = await Sender.findById(req.params.id);
        if (!sender) {
            return res.status(404).send('Sender not found');
        }
        const parcels = await Parcel.find({ sender: sender._id, status: req.params.status });
        res.send(parcels);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports =
{
    create,
    createParcel,
    findParcelsByStatus

}



// ------------------------- experimental -------------------------------------

// Get a sender by ID
// exports.findOne = async (req, res) => {
//     try {
//         const sender = await Sender.findById(req.params.id).populate('parcels');
//         if (!sender) {
//             return res.status(404).send('Sender not found');
//         }

//         res.json(sender);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// }





// GET all parcels for the sender
// exports.findAllParcels = async (req, res) => {
//     try {
//         const senderId = req.sender._id; // assuming sender is authenticated
//         const parcels = await Parcel.find({ sender: senderId });
//         return res.send(parcels);
//     } catch (err) {
//         return res.status(500).send(err.message);
//     }
// }




// Get the status of a parcel for a given sender
// router.get('/parcels/:id/status',

// exports.findParcelsStatusBySender = async (req, res) => {
//     try {
//         const parcel = await Parcel.findById(req.params.id);
//         if (!parcel) {
//             return res.status(404).send('Parcel not found');
//         }

//         const sender = await Sender.findById(parcel.sender);
//         if (!sender) {
//             return res.status(400).send('Invalid sender ID');
//         }

//         if (sender._id.toString() !== req.sender._id.toString()) {
//             return res.status(401).send('Unauthorized');
//         }

//         res.send({ status: parcel.status });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//     }
// });


// PUT to cancel a parcel that hasn't been picked up or delivered yet
// exports.cancelParcel = async (req, res) => {
//     try {
//         const parcel = await Parcel.findById(req.params.id);
//         if (!parcel) {
//             return res.status(404).send('Parcel not found');
//         }
//         if (parcel.status !== 'created') {
//             return res.status(400).send('Parcel cannot be cancelled as it has already been picked up or delivered');
//         }
//         parcel.status = 'cancelled';
//         await parcel.save();
//         return res.send(parcel);
//     } catch (err) {
//         return res.status(500).send(err.message);
//     }
// }

// PUT to update the status of a parcel
// exports.updateParcelStatus = async (req, res) => {
//     try {
//         const parcel = await Parcel.findById(req.params.id);
//         if (!parcel) {
//             return res.status(404).send('Parcel not found');
//         }
//         parcel.status = req.body.status;
//         await parcel.save();
//         return res.send(parcel);
//     } catch (err) {
//         return res.status(500).send(err.message);
//     }
// }

