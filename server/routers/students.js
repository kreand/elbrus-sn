const router = require('express').Router();

const User = require('../models/user');

router.get('/allUsers', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

router.post('/change', async (req, res) => {
  const { _id } = req.body;
  let { rating } = req.body;
  let users = await User.find({});
  const user = users.find((el) => el.id === _id);
  rating = +rating;
  if (rating > 0) {
    user.rating += rating;
    user.coins += rating;
  } else {
    user.rating += rating;
  }
  await user.save();
  users = await User.find({});
  res.status(200).json({ message: 'Рейтинг изменен', users });
});

module.exports = router;
