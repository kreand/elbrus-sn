const router = require('express').Router();

const User = require('../models/user');

router.get('/allUsers', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// router.get('/allUsers/:id', async (req,res)=>{
//   const student = await User.findOne({ _id: req.params.id });
//   res.json(student);
// });

module.exports = router;
