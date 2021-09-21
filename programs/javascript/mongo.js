//"mongodb": "^3.6.3"

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:2717/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  //db.close();
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("user").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
//mongodb+srv://uzrnem:<password>@cluster0.yet15.mongodb.net/<dbname>?retryWrites=true&w=majority
/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://uzrnem:bhagyesh@cluster0.yet15.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/
