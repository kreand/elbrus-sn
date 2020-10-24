const router = require('express').Router();

const User = require('../models/user');

router.get('/allUsers', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

router.post('/change', async (req, res) => {
  const {
    _id,
    name,
    email,
    group,
    status,
  } = req.body;
  let { rating, skills } = req.body;
  let users = await User.find({});
  const user = users.find((el) => el.id === _id);

  rating = +rating;
  if (user.rating < rating) {
    user.coins += rating - user.rating;
    user.rating = rating;
  } else {
    user.rating = rating;
  }
  user.name = name;
  user.email = email;
  user.group = group;
  skills = skills.split(',');
  user.skills = skills;
  user.status = status;
  await user.save();
  users = await User.find({});
  res.status(200).json({ message: 'Рейтинг изменен', users, user });
});

module.exports = router;
