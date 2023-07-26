const express = require('express');
const router = express.Router();

const messages = [
  {
    user: 'Me',
    added: new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString(),
    text: 'Welcome to my mini messaging board!',
  },
  {
    user: 'Alina',
    added: new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString(),
    text: 'Helloooooooo!?!?',
  },
  {
    user: 'Lorem Ipsum',
    added: new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString(),
    text: 'Lorem ipsum dolor sit amet'
  },
  {
    user: 'Me',
    added: new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString(),
    text: 'SOMETHING IS UP WITH THE NEW MESSAGES'
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messaging Board', messages: messages });
});

router.post('/new', function(req, res, next) {
  const message = req.body;
  messages.push({user: message.user, added: new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString(), text: message.text});

  res.redirect('/');
})

module.exports = router;
