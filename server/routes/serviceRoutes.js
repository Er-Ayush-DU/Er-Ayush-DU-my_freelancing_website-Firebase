// const express = require('express')
// const router = express.Router();
// const ServiceRequest = require('../models/ServiceRequest');


// router.post('/server', async (req, res) => {
//   try {
//     const newRequest = new ServiceRequest(req.body);
//     await newRequest.save();
//     res.status(201).json({
//       success: true,
//       message: 'Service request submitted successfully'
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message
//     });
//   }
// });

// module.exports = router;