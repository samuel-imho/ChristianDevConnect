//mongo db connection
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//connect to mongo db
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected... ');
  } catch (err) {
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

//notes
/*
    - line 4 - taken from the json object in the default.json
    - most cases async/await will be wrapped in a try and catch block to test when things pass and fail, we'll be able to do somthing with the error message and stuff.
    - line 9 - anything that returns a promise should have await in front of it 
*/
