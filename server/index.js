const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const contactModel = require('./db/contact')
const serviceModel = require('./db/service');

const app = express()

app.use(cors())
app.use(express.json())



mongoose.connect('mongodb://127.0.0.1:27017/web_solution')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

app.post('/contact', (req, res) => {
  contactModel.create(req.body)
    .then(contact => res.json(contact))
    .catch(err => res.json(err))
})


app.post('/service', (req, res) => {
  serviceModel.create(req.body)
    .then(Service => res.json(Service))
    .catch(err => res.json(err))
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));