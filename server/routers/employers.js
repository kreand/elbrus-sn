const router = require('express').Router();
const Employer = require('../models/employer');

router.get('/get-all-employers', async (req, res) => {
  const employers = await Employer.find({});
  res.json(employers);
});

router.post('/create-employer', async (req, res) => {
  const {
    name, review, rating, userName, userId,
  } = req.body.payload;

  let employer = await Employer.findOne({ name });
  if (employer) {
    return res.status(400).json({ error: true, message: 'Данный работодатель уже есть в списке' });
  }

  employer = new Employer({
    name,
    rating,
    allReviews: [{
      userName,
      userId,
      review,
      rating,
    }],
  });
  await employer.save();

  return res.status(201).json({ employer, message: 'Работодатель создан' });
});

router.post('/add-review', async (req, res) => {
  const {
    employerId, review, userName, userId, rating,
  } = req.body.payload;
  const employer = await Employer.findById(employerId);
  employer.allReviews.push({
    userName, userId, review, rating,
  });
  let midRating = employer.allReviews.reduce(((sum, el) => sum + el.rating), 0)
    / employer.allReviews.length;
  midRating = Math.round(midRating * 2) / 2;
  employer.rating = midRating;
  await employer.save();
  const allEmployers = await Employer.find({});
  res.status(200).json({ allEmployers, message: 'Отзыв добавлен' });
});

module.exports = router;
