const router = require('express').Router();
const Employer = require('../models/employer');

router.get('/get-all-employers', async (req, res) => {
  const employers = await Employer.find({});
  res.json(employers);
});

router.post('/create-employer', async (req, res) => {
  const {
    name, review, rating, userName, userId
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
    employerId, review, userName, userId, rating, date,
  } = req.body.payload;
  const employer = await Employer.findById(employerId);

  const currentReview = employer.allReviews.find((rev) => rev.userId === userId);
  if (currentReview) {
    return res.status(400).json({ error: true, message: 'Ты уже писал отзыв для данного работодателя' });
  }
  employer.allReviews.push({
    userName, userId, review, rating, date,
  });
  let midRating = employer.allReviews.reduce(((sum, el) => sum + el.rating), 0)
    / employer.allReviews.length;
  midRating = Math.round(midRating * 2) / 2;
  employer.rating = midRating;
  await employer.save();
  const allEmployers = await Employer.find({});
  res.status(200).json({ allEmployers, message: 'Отзыв добавлен' });
});

router.delete('/delete-review', async (req, res) => {
  const { reviewId, employerId } = req.body.payload;
  const employer = await Employer.findById(employerId);
  employer.allReviews = employer.allReviews.filter((rev) => rev.id !== reviewId);
  let midRating = employer.allReviews.reduce(((sum, el) => sum + el.rating), 0)
    / employer.allReviews.length;
  midRating = Math.round(midRating * 2) / 2;
  employer.rating = midRating;
  await employer.save();
  const allEmployers = await Employer.find({});
  res.status(200).json({ allEmployers, message: 'Отзыв удалён' });
});

module.exports = router;
