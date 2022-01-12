// import mongoose
const mongoose = require('mongoose');

// connect mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// export the module
module.exports = mongoose.connection;
