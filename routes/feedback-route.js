const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).send(feedback);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate('userId', 'email');
    res.send(feedbacks);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
