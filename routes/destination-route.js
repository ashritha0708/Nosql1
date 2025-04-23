const express = require('express');
const router = express.Router();
const Destination = require('../models/destination');

router.post('/', async (req, res) => {
  try {
    const destination = new Destination(req.body);
    await destination.save();
    res.status(201).send(destination);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find().populate('createdBy', 'email');
    res.send(destinations);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;