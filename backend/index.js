const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./database/database.js');
const Entries = require('./database/models.js').Models.Entries;
const Analytics = require('./analytics/analytics.js').Analytics;
const createDocuments = require('./database/createDocument.js').createDocuments;

const app = express();
const port = 80;

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/urlData', (req, res) => {
  createDocuments(
    {
      id: req.body.id,
      email: req.body.email,
      url: req.body.url
    }, () => {
      Entries.findOne()
        .sort({ field: 'asc', _id: -1 })
        .limit(1)
        .exec( (err, entry) => {
          if(err) {
            res.send(err);
          } else {
            res.send(entry);
          }
        });
    });
});

app.get('/get-analytics', (req, res) => {
  Analytics.pythonAnalysis((analysis) => {
    res.send(analysis);
  });
});

app.get('/display-analytics', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/webpage/info.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
