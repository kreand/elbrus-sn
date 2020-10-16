const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('employers serv')
});

module.exports = router;
