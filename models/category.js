const mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

const Model = new mongoose.Schema({
    id: {
      type: Number
    },

    name: {
      type: String
    },
    urlRewriteName: {
      type: String
    },
    isDeleted: {
      type: Boolean
    }
});
    
// Model.plugin(require('../modules/auto-increment').getInstance().plugin, {
//   model: 'category',
//   field: 'id'
// });

Model.plugin(passportLocalMongoose);
module.exports = mongoose.model('categories', Model);
