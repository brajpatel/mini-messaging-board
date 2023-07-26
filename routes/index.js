const express = require('express');
const router = express.Router();

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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messaging Board', messages: messages });
});

router.post('/new', function(req, res, next) {
  console.log(req.body)
})

module.exports = router;
