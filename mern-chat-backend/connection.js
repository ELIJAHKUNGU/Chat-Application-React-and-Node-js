const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://username:password@cluster0.dmsle2z.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
