// Require library
const  mongoose = require('mongoose');

// Connect to database
//mongoose.connect('mongodb://localhost/todo_app_db', {useNewUrlParser: true});
mongoose.connect('mongodb+srv://shubham:eUhqGTsMVs3QUFmH@cluster0.6ozml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
// aquire the connection to check

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are connected!");
});