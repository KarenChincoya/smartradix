const mongoose = require('mongoose');

//Blueprint
const reportSchema = mongoose.Schema({
  humidity: {type: Number, required: true},
  sensor: { type: Number },
  environmentHumidity: {type: Number },
  environmentTemperature: {type: Number },
  date: {type: Date},
  hour: {type: String}
});

module.exports = mongoose.model('Report', reportSchema);
