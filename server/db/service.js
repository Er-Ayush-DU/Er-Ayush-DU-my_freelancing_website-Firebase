const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  websiteType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

})

const serviceModel = mongoose.model("servicerequests", serviceSchema)
module.exports = serviceModel