//New modul to connect and migrate from sql server to mongo db

//Need to revise errors

var Request = require('tedious').Request;
function insertIntoMongoDb(){
  console.log('inserting data into MongDB');
  mongoose.connect('mongodb://localhost:27017/someMongoDB');
  var articleSchema = new mongoose.Schema({
    title: { type: String },
    intro: { type: String },
    body: { type: String },
    key: {type: String,default:'unittesting'},
    viewCount:{type:Number,default:0} },{ versionKey: false });

    var articleModel = mongoose.model('Articles', articleSchema);

    for(var i = 0; i < rows.length; i++){
      var article = new articleModel(rows[i]);
      article.save(function(error){
        if(error)
        {
          console.log('error saving');
        }
        else
        {
          console.log('saved successfully')
        }
      });
    }
  }
