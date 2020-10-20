const router = require('express').Router();
const Item = require('../models/shopItem');

router.route('/create')
  .post((req, res) => {
    console.log(req.body);
    res.status(200);
  });
