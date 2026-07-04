const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const MongoUrl ="mongodb+srv://dhruv066:dhruv9125@cluster0.dpctrh5.mongodb.net/?appName=Cluster0";

let _db;

const monoConnect =(callback)=>{
  MongoClient.connect(MongoUrl)
    .then((client) => {
      
      callback();
      _db = client.db('airbnb');
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB", err);
    });
}
const getDb = () => {
  if (!_db) {
    throw new Error("mongodb is not connected");
  } else {
    return _db;
  }}
exports.mongoConnect = monoConnect;
exports.getDb = getDb;