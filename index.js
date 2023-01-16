const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

const app = express();
const PORT = 3000;

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlparser: true, useUnifiedTopology: true },
  () => console.log('Connected to MongoDB')
);

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}!`));