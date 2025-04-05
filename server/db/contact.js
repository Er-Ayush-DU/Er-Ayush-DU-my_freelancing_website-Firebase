const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tel: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const contactModel = mongoose.model('contacts', contactSchema)
module.exports = contactModel