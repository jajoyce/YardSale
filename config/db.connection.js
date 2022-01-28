const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = process.env.MONGODB_URI;

mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => {
      console.log('Connected to MongoDB');
    }
);

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] ***** MongoDB CONNECTED *****`); 
});

mongoose.connection.on('error', (error) => {
    console.log('***** MongoDB CONNECTION ERROR *****', error);
});

mongoose.connection.on('disconnected', () => console.log('***** MongoDB DISCONNECTED *****'));