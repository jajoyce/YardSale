const express = require('express');
const app = express();
const methodOverride = require('method-override');
const controllers = require('./controllers');

const PORT = 4400;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use('/static', express.static('public'));

app.use('/products', controllers.product);
app.use('/users', controllers.user);
app.use('/reviews', controllers.review);


app.get('/', (req, res) => {
    res.send('This is the home page, up and running.');
});

app.get('/*', (req, res) => {
    res.redirect('/');
});


app.listen(PORT, () => console.log(`RUNNING ON PORT ${PORT}`));
