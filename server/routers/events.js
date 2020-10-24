const router = require('express').Router();
const Event = require('../models/event');

router.route('/').get(async (req, res) => {
  try {
    console.log('GET /EVENTS');
    const events = await Event.find({});
    if (events.length <= 0) {
      return res.status(200).json({ message: 'Мероприятий нет' }).end();
    }
    res.status(200).json({ message: 'Мероприятий найдены', events }).end();
  } catch (e) {
    res
      .status(500)
      .json({ error: true, message: 'Что то пошло не так на сервере' })
      .end();
  }
});

router.route('/create').post(async (req, res) => {
  try {
    const {
      title,
      type,
      group,
      format,
      city,
      year,
      month,
      day,
      time,
      body,
    } = req.body;

    const event = await new Event({
      title,
      type,
      group,
      format,
      city,
      year,
      month,
      day,
      time,
      body,
    });
    await event.save();
    res.status(200).end();
  } catch (e) {
    res
      .status(500)
      .json({ error: true, message: 'Что то пошло не так на сервере' })
      .end();
  }
});

module.exports = router;
