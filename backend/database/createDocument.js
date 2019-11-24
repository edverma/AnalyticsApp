exports.createDocuments = function createDocuments({id, email, url}, callback) {
  const Entries = require('./models.js').Models.Entries;

  var entry = new Entries({
    id: id,
    email: email,
    url: url
  });

  entry.save( (err) => {
    if(err){
      console.log(err);
    }
  });

  callback();
}
