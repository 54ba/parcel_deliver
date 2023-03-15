const mongoose = require('mongoose');

const _ = require('lodash');

// Parcel schema
const parcelSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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


// User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// Define toJSON method for User schema
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  return _.pick(userObject, ['_id', 'name']);
};



// Biker schema
const bikerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

// Define toJSON method for Biker schema
userSchema.methods.toJSON = function () {
  const biker = this;
  const bikerObject = biker.toObject();
  return _.pick(bikerObject, ['_id', 'user']);
};


const Parcel = mongoose.model('Parcel', parcelSchema);
const User = mongoose.model('User', userSchema);
const Biker = mongoose.model('Biker', bikerSchema);


module.exports = {
  Parcel,
  User,
  Biker
}
