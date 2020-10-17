const router = require('express').Router();
const Employer = require('../models/employer')

router.get('/get-all-employers', async (req, res) => {
  const employers = await Employer.find({});
  res.json(employers);
});

router.post('/create-employer', async (req, res) => {
  const {name, review, rating} = req.body

  let employer = await Employer.findOne({name});
  if (employer) {
    return res.status(400).json({error: true, message: 'Данный работодатель уже есть в списке'})
  }

  employer = new Employer({
    name,
    allReviews: [{
      review,
      rating,
    }]
  })
  await employer.save();

  return res.status(201).json({employer, message: 'Работодатель создан'})
})

module.exports = router;
