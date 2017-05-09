
var mongodb = require('mongodb');

exports.up = function(db, next){
  var pets = db.Collection(db,'test1');
	pets.insert({name: 'tobi'}, next);
};

exports.down = function(db, next){
  var pets = db.Collection(db,'test1');
	pets.findAndModify({name: 'tobi'}, [], {}, { remove: true }, next);
};
