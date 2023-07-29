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

const messageSchema= new mongoose.Schema({
  user: {type: String, required: true},
  text: {type: String, required: true},
  added: String
})

const Message = mongoose.model('Message', messageSchema);

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

// router.post('/new', function(req, res, next) {
//   const message = req.body;
//   messages.push({user: message.user, added: new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString(), text: message.text});

//   res.redirect('/');
// })

module.exports = router;
