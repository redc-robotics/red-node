var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: {type: String },
  message: { type: String, required: true }
},{
  timestamps: true
});

Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
