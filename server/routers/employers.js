const router = require('express').Router();
const Employer = require('../models/employer')

router.get('/get-all-employers', async (req, res) => {
  const employers = await Employer.find({});
  res.json(employers);
});

router.post('/create-employer', async (req, res) => {
  const {name, review, rating} = req.body
  const employer = new Employer({
    name,
    allReviews: [
      review,
      rating
    ]
  })
  await employer.save();

  res.status(201).json({message: 'Работодатель создан'})
})

module.exports = router;
