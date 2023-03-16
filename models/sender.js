
const mongoose = require('mongoose');
const _ = require('lodash');


// Sender schema
const senderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

// Define toJSON method for Sender schema
senderSchema.methods.toJSON = function () {
    const sender = this;
    const senderObject = sender.toObject();
    return _.pick(senderObject, ['_id', 'name']);
};

const Sender = mongoose.model('Sender', senderSchema);


module.exports = {
    Sender
}
