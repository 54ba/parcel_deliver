const { Parcel, Sender } = require('../models');



// Create a parcel
const create = async (req, res) => {
    try {
        const { sender, pickupAddress, dropoffAddress } = req.body;

        // Check if sender exists
        const sender_record = await Sender.findById(sender._id);
        if (!sender_record) {
            return res.status(400).send('Invalid sender ID');
        }

        const parcel = new Parcel({ sender, pickupAddress, dropoffAddress });
        await parcel.save();

        res.send(parcel);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}
// GET a parcel by ID
const findOne = async (req, res) => {
    try {
        const parcel = await Parcel.findById(req.params.id);
        if (!parcel) {
            return res.status(404).send('Parcel not found');
        }
        return res.send(parcel);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

// GET All parcels 

const findAll = async (req, res) => {
    try {
        const parcel = await Parcel.find();
        if (!parcel) {
            return res.status(404).send('Parcel not found');
        }
        return res.send(parcel);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}


module.exports =
{
    create,
    findOne,
    findAll
}







