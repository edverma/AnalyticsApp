const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/analytics-database";
const server = '127.0.0.1:27017';
const database = 'analytics-database';

class Database {
  constructor() {
    this._create();
    this._connect();
  }

  _create() {
    MongoClient.connect(url, (err, db) => {
      if (err) {
        console.error('Database creation error: ', err)
      };
      console.log('Database created');

      db.close();
    });
  }

  _connect() {
    mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true })
      .then(() => {
        console.log('Database connection successful');
      })
      .catch(err => {
        console.error('Database connection error');
      });
  }
}

module.exports = new Database;
