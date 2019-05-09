const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const queueSchema = new Schema({
  category: String,
  status: String,
  imgLink: String,
  filename: String,
  updateDate: Date,
  createdDate: Date,
  dirname: String,
  likeit: Number
}, { collection: 'queue' });

/* global db */
module.exports = db.model('Queue', queueSchema);
