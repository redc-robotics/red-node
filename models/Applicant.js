var mongoose = require('mongoose');

var ApplicantSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true, dropDups: true },
  netid: { type: String, required: true },
  major: { type: String }
},{
  timestamps: true
});

Applicant = mongoose.model('Applicant', ApplicantSchema);

module.exports = Applicant;
