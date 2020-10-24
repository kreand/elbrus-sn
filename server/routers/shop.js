const router = require('express').Router();
const Item = require('../models/shopItem');
const User = require('../models/user');
const Order = require('../models/order');

router.route('/create').post(async (req, res) => {
  try {
    const {
      title,
      link,
      quantity,
      price,
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

router.delete('/delete', async (req, res) => {
  const { itemId } = req.body;
  await Item.findByIdAndDelete(itemId);
  const items = await Item.find({});
  res.status(200).json({ items, message: 'Товар удалён' });
});

router.put('/buy', async (req, res) => {
  const { itemId, userId } = req.body;
  const item = await Item.findById(itemId);
  const user = await User.findById(userId);

  if (item.quantity <= 0) {
    return res
      .status(500)
      .json({ error: true, message: 'Извини, товара нет в наличии' });
  }
  if (item.price > user.coins) {
    return res
      .status(500)
      .json({
        error: true,
        message: 'У тебя недостаточно элькоинов для покупки данного товара',
      });
  }
  const order = new Order({
    product: item,
    buyer: user,
  });

  user.coins -= item.price;
  item.quantity -= 1;
  await order.save();
  await user.save();
  await item.save();

  const orders = await Order.find({});
  const items = await Item.find({});
  return res.status(200).json({
    items,
    user,
    orders,
    message: 'Операция покупки товара прошла успешно',
  });
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

router.get('/orders', async (req, res) => {
  const orders = await Order.find({});
  res.status(201).json({ orders, message: 'список заказов' });
});

router.delete('/delete-order', async (req, res) => {
  await Order.findByIdAndDelete(req.body.orderId);
  const orders = await Order.find({});
  res.status(200).json({ orders, message: 'Товар удалён' });
});

module.exports = router;
