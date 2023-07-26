const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const messages = [
    {
      text: 'Hello!',
      user: 'Alina',
      added: new Date().toLocaleTimeString() + ' - ' + new Date().toLocaleDateString()
    },
    {
      text: 'Hey, what\'s up?',
      user: 'Elise',
      added: new Date().toLocaleTimeString() + ' - ' + new Date().toLocaleDateString()
    },
    {
      text: 'Buh',
      user: 'Buh',
      added: new Date().toLocaleTimeString() + ' - ' + new Date().toLocaleDateString()
    }
  ];

  res.render('index', { title: 'Mini Messaging Board', messages: messages });
});

module.exports = router;
