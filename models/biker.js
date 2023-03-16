const mongoose = require('mongoose');

const _ = require('lodash');


// Biker schema
const bikerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

// Define toJSON method for Biker schema
bikerSchema.methods.toJSON = function () {
    const biker = this;
    const bikerObject = biker.toObject();
    return _.pick(bikerObject, ['_id', 'name']);
};

const Biker = mongoose.model('Biker', bikerSchema);


module.exports = {
    Biker
}

