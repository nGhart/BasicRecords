const mongoose = require('mongoose');
async function connectToDb() {
  try {
    await mongoose.connect(
      'mongodb+srv://naaghart:naaghart@basic.lmmcjdd.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log('Connected to DB');
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectToDb;
