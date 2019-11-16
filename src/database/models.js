const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let entriesSchema = new Schema({
  id: String,
  email: String,
  url: String
});

class Models {
  constructor() {
    this.Entries = mongoose.model('Entries', entriesSchema);
  }
}

exports.Models = new Models;
