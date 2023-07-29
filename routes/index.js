require("dotenv").config();
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'mini_messaging_board'
})
.then(() => {
  console.log('Connected to the Database');
})
.catch((err) => console.error(err));

// create message schema
const messageSchema= new mongoose.Schema({
  user: {type: String, required: true},
  text: {type: String, required: true},
  added: String
})

// create model from schema
const Message = mongoose.model('Message', messageSchema);

// get messages from collection
async function getMessages() {
  const messages = await Message.find({});

  return messages;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  getMessages().then((foundMessages) => {
    res.render('index', { messages: foundMessages });
  })
});

/* INSERT a message in to the database */
router.post('/new', function(req, res, next) {
  const data = req.body;

  const message = new Message({
    user: data.user,
    text: data.text,
    added: new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString()
  })
  message.save().then(() => console.log("Added new entry"), (err) => console.log(err));

  res.redirect('/');
})

module.exports = router;
