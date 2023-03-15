const express = require('express');
const router = express.Router();
const { User, Parcel } = require('../models/models');

// Create a parcel
exports.create = async (req, res) => {
    try {
        const { sender, pickupAddress, dropoffAddress } = req.body;

        // Check if sender exists
        const user = await User.findById(sender);
        if (!user) {
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
exports.findOne = async (req, res) => {
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




// Get the status of a parcel for a given sender
// router.get('/parcels/:id/status', async (req, res) => {
//     try {
//         const parcel = await Parcel.findById(req.params.id);
//         if (!parcel) {
//             return res.status(404).send('Parcel not found');
//         }

//         const user = await User.findById(parcel.sender);
//         if (!user) {
//             return res.status(400).send('Invalid sender ID');
//         }

//         if (user._id.toString() !== req.user._id.toString()) {
//             return res.status(401).send('Unauthorized');
//         }

//         res.send({ status: parcel.status });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//     }
// });





