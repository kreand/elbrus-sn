const router = require('express').Router();
const User = require('../models/user');

router.post('/edit', async (req, res) => {
  try {
    const {
      name, userId, skills, imgUrl, contacts,
    } = req.body;
    const user = await User.findById(userId);
    if (user) {
      user.skills = skills;
      user.name = name;
      user.photo = imgUrl;
      user.contacts = contacts;
      await user.save();
      return res
        .status(201)
        .json({ user, message: 'Данные пользователя изменены' });
    }
    return res.status(400).json({ error: true, message: 'Изменения отменены' });
  } catch (e) {
    res.status(500).json({ message: 'Что то пошло не так на сервере' });
  }
});

module.exports = router;
