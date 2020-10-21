const router = require('express').Router();
const Item = require('../models/shopItem');

router.route('/create').post(async (req, res) => {
  try {
    const {
      title, link, quantity, price,
    } = req.body;
    if (typeof quantity !== 'number') {
      return res
        .status(200)
        .json({ error: true, message: 'Количество товара должно быть числом' });
    }
    if (typeof price !== 'number') {
      return res
        .status(200)
        .json({ error: true, message: 'Цена должна быть ччиислом' });
    }
    const item = await new Item({
      title,
      link: `${link}`,
      quantity,
      price,
    });
    await item.save();
    res.status(201).json({ item });
  } catch (e) {
    res
      .status(500)
      .json({ error: true, message: 'Что то пошло не так на сервере' });
  }
});

router.route('/items').get(async (req, res) => {
  try {
    const items = await Item.find({});
    if (items.length <= 0) {
      return res
        .status(400)
        .json({ error: true, message: 'Товары отсутствуют' });
    }
    res.status(200).json({ message: 'Товары найдены', items });
  } catch (e) {
    res
      .status(500)
      .json({ error: true, message: 'Что то пошло не так на сервере' });
  }
});

module.exports = router;
