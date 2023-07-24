const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const messages = [
    {
      text: 'Hello!',
      user: 'Alina',
      added: new Date()
    },
    {
      text: 'Hey, what\'s up?',
      user: 'Elise',
      added: new Date()
    }
  ];

  res.render('index', { title: 'Mini Messaging Board', 'messages': messages });
});

module.exports = router;
