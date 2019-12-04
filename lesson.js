const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: String,
  author: String, 
  published: String
});

module.exports = mongoose.model('Lesson', lessonSchema);