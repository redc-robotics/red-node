var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true, dropDups: true },
  password: { type: String, required: true },
  member: { type: Boolean, default: false },
  role: { type: String },
  permission: { type: Number, default: 0 },
  nickname: { type: String },
  about: { type: String },
  notifications: { type: [{}], default: [] }
},{
  timestamps: true
});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

User = mongoose.model('User', UserSchema);

module.exports = User;
