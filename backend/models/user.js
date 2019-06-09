const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
//Blueprint
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, required: false}
});

//add a plugin for validation
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
