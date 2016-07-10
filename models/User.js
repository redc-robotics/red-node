var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true, dropDups: true },
  passwordDigest: { type: String, required: true },
  member: { type: Boolean, default: false },
  role: { type: String },
  permission: { type: Number, default: 0 },
  nickname: { type: String },
  about: { type: String },
  notifications: { type: [{}], default: [] }
},{
  timestamps: true
});

User = mongoose.model('User', UserSchema);

module.exports = User;
