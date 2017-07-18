var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/myproject';
MongoClient.connect(url).then(function(db) {
	console.log("Connected successfully to server");
	db.createCollection('test', { "capped": true, "size": 100000, "max": 5000}, function (err) {
		if(err) {
			console.log(err);
//			return;
		}
		console.log("create table successfully");
	})
	db.collection('ff').find().toArray(function (err, docs) {
		console.log(docs);
	})
})