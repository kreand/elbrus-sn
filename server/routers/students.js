const router = require('express').Router();

const User = require('../models/user');

router.get('/allUsers', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

router.post('/change', async (req, res) => {
  let { _id, rating } = req.body;
  let users = await User.find({});
  const user = users.find((el) => el._id == _id);
  rating = +rating;
  user.rating += rating;
  await user.save();
  users = await User.find({});
  res.status(200).json({ message: 'Рейтинг изменен', users });
});

module.exports = router;
