const express = require('express');
const connectDB = require('./config/db');

//routers
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

const app = express();

//conect database;
connectDB();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('API Running');
});

//define routes
app.use('/users', users);
app.use('/auth', auth);
app.use('/posts', posts);
app.use('/profile', profile);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
