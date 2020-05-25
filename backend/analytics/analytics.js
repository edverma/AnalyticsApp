const Entries = require('../database/models.js').Models.Entries;
const { PythonShell } = require('python-shell');

class Analytics{
  constructor(){
  }

  pythonAnalysis(id, callback){
    let pyshell = new PythonShell(__dirname.concat('/analytics.py'));

    //TODO: only send user info from here
    Entries.find({"id": id}, (err, allDbEntries) => {
      pyshell.send(JSON.stringify(allDbEntries), { mode: 'json' });
      pyshell.on('message', results => {
        callback(results);
      });
    });
  }
}

exports.Analytics = new Analytics;
