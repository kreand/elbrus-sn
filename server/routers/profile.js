const router = require('express').Router();
const User = require('../models/user');

router.post('/edit', async (req, res) => {
  const { name, userId, skills } = req.body;
  const user = await User.findById(userId);
  if (user) {
    user.skills = skills;
    user.name = name;
    await user.save();
    return res.status(201).json({ user, message: 'Данные пользователя изменены' });
  }
  return res.status(400).json({ error: true, message: 'Изменения отменены' });
});

module.exports = router;
