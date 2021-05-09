const mongoose = require('mongoose');

const Model = new mongoose.Schema(
  {
    id: Number,
    name: String,
    email: String,
    phone: String,
    msg: String,
    details: Object,
    total: Number,
    status: Number,
    payment: String,
    ship: String
  },
  {
    collection: 'order'
  }
);
    
// Model.plugin(require('../modules/auto-increment').getInstance().plugin, {
//   model: 'order',
//   field: 'id'
// });

module.exports = mongoose.model('orders', Model);
