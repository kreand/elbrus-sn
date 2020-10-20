const router = require('express').Router();
const Item = require('../models/shopItem');

router.route('/create')
  .post(async (req, res) => {
    try {
      const {
        title,
        link,
        quantity,
        price,
      } = req.body;

      const item = await new Item({
        title,
        link,
        quantity,
        price,
      });

      await item.save();
      res.status(200).json(item);
    } catch (e) {
      res.status(500).json({ message: 'Что то пошло не так на сервере' });
    }
  });

module.exports = router;
