const express = require('express');
const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars,import/no-extraneous-dependencies
const dotenv = require('dotenv').config({ path: '../.env' });

const loginRouter = require('./routers/authorization')
const employersRouter = require('./routers/employers')
const studentsRouter = require('./routers/students')
const profileRouter = require('./routers/profile')

const app = express();

const PORT = process.env.PORT_FOR_DEV || 6000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const start = () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION_FOR_DEV, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }).then(() => console.log('DB connected'));

    app.listen(PORT, () => { console.log(`Server start... on port ${PORT}`); });
  } catch (e) {
    console.log('Error on server...', e.message);
  }
};

app.use('/', loginRouter)
app.use('/employers', employersRouter)
app.use('/students',studentsRouter)
app.use('/profile', profileRouter)

start();
