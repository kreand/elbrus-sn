const router = require('express').Router();
const Employer = require('../models/employer');

router.get('/get-all-employers', async (req, res) => {
  const employers = await Employer.find({});
  res.json(employers);
});

router.post('/create-employer', async (req, res) => {
  const {
    name,
    review,
    rating,
    userName,
    userId,
  } = req.body.payload;

  if (!name) {
    return res.status(400).json({
      error: true,
      message: 'Введи название организации',
    });
  }

  if (!rating) {
    return res.status(400).json({
      error: true,
      message: 'Тебе надо оценить работодателя (минимум пол звезды)',
    });
  }

  if (!review) {
    return res.status(400).json({
      error: true,
      message: 'Тебе надо написать отзыв',
    });
  }

  let employer = await Employer.findOne({ name });
  if (employer) {
    return res
      .status(400)
      .json({ error: true, message: 'Данный работодатель уже есть в списке' });
  }

  employer = new Employer({
    name,
    rating,
    allReviews: [
      {
        userName,
        userId,
        review,
        rating,
      },
    ],
  });
  await employer.save();

  return res.status(201).json({ employer, message: 'Работодатель создан' });
});

router.post('/add-review', async (req, res) => {
  const {
    employerId,
    review,
    userName,
    userId,
    rating,
    date,
  } = req.body.payload;
  const employer = await Employer.findById(employerId);

  if (!review) {
    return res.status(400).json({
      error: true,
      message: 'Тебе надо написать отзыв',
    });
  }

  if (!rating) {
    return res.status(400).json({
      error: true,
      message: 'Тебе надо оценить работодателя (минимум пол звезды)',
    });
  }

  const currentReview = employer.allReviews.find(
    (rev) => rev.userId === userId,
  );
  if (currentReview) {
    return res.status(400).json({
      error: true,
      message: 'Ты уже писал отзыв для данного работодателя',
    });
  }
  employer.allReviews = [{
    userName,
    userId,
    review,
    rating,
    date,
  }, ...employer.allReviews];
  let midRating = employer.allReviews.reduce((sum, el) => sum + el.rating, 0)
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
  if (employer.allReviews.length === 1 && employer.allReviews[0].id === reviewId) {
    employer.allReviews = [];
    employer.rating = 0;
  } else {
    employer.allReviews = employer.allReviews.filter(
      (rev) => rev.id !== reviewId,
    );
    let midRating = employer.allReviews.reduce((sum, el) => sum + el.rating, 0)
      / employer.allReviews.length;
    midRating = Math.round(midRating * 2) / 2;
    employer.rating = midRating;
  }
  await employer.save();
  const allEmployers = await Employer.find({});
  res.status(200).json({ allEmployers, message: 'Отзыв удалён' });
});

router.delete('/delete-employer', async (req, res) => {
  await Employer.findByIdAndDelete(req.body.payload);
  const allEmployers = await Employer.find({});
  res.status(200).json({ allEmployers, message: 'Работодатель удален' });
});

module.exports = router;
