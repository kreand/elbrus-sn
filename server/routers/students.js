module.exports = router = require('express').Router()

const User = require('../models/user')

router.get('/',async(req,res) => {
  const users = await User.find({})
  res.json(users)
})

// router.get('/:id', async(req,res)=>{
//
// })