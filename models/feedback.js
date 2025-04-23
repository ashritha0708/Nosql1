const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: { type: String, required: true },
  rating: { type: Number, min: 1, max: 10 },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Feedback', feedbackSchema);