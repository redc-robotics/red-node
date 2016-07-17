var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
},{
  timestamps: true
});

Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
