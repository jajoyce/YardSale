const mongoose = require('mongoose');
const connectionString = 'mongodb://127.0.0.1:27017/yardsale';

mongoose.connect(connectionString);

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - **** MongoDB CONNECTED ****`); 
});

mongoose.connection.on('error', (error) => {
    console.log('**** MongoDB CONNECTION ERROR ****', error);
});

mongoose.connection.on('disconnected', () => console.log('**** MongoDB DISCONNECTED ****'));