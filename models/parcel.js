const mongoose = require('mongoose');

const _ = require('lodash');

// Parcel schema
const parcelSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sender',
        required: true
    },
    pickupAddress: {
        type: String,
        required: true
    },
    dropoffAddress: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['created', 'pickedup', 'delivered'],
        default: 'created'
    },
    biker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Biker'
    },
    pickupTimestamp: {
        type: Date
    },
    deliveryTimestamp: {
        type: Date
    }
});

// Define toJSON method for Parcel schema
parcelSchema.methods.toJSON = function () {
    const parcel = this;
    const parcelObject = parcel.toObject();
    return _.pick(parcelObject, ['_id', 'sender', 'pickupAddress', 'dropoffAddress', 'status', 'biker', 'pickupTimestamp', 'deliveryTimestamp']);
};

const Parcel = mongoose.model('Parcel', parcelSchema);


module.exports = {
    Parcel
}
