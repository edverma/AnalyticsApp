const Entries = require('../database/models.js').Models.Entries;
const { PythonShell } = require('python-shell');

class Analytics{
  constructor(){
  }

  pythonAnalysis(callback){
    // TODO: have pyshell run with pipenv
    let pyshell = new PythonShell(__dirname.concat('/analytics.py'), { pythonOptions: ['-m', 'pipenv', 'run', 'python'] });

    //TODO: only send user info from here
    Entries.find({}, (err, allDbEntries) => {
      pyshell.send(JSON.stringify(allDbEntries), { mode: 'json' });
      pyshell.on('message', results => {
        callback(results);
      });
    });
  }
}

exports.Analytics = new Analytics;
