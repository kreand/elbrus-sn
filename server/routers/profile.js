const router = require('express').Router()
const User = require('../models/user')

router.post('/edit', async (req, res) => {
  const { _id, name, photo, email, password, status, 
    coins, raiting, skills, history } = req.body

  let user = await User.findOne({_id})
  if (user) {
    user = {
      _id: _id,
      name: name,
      photo: photo,
      email: email,
      password: password,
      status: status,
      coins: coins,
      raiting: raiting,
      skills: skills,
      history: history
    }
  await user.save()
  return res.status(201).json({user, message: 'Данные пользователя изменены'})
  }
  return res.status(400).json({error: Error.name, message: 'Изменения отменены'})
})

module.exports = router
