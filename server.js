const express = require('express');
const app = express();
const methodOverride = require('method-override');
const controllers = require('./controllers');

const PORT = process.env.PORT || 4400;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use('/static', express.static('public'));

app.use('/users', controllers.user);
app.use('/products', controllers.product);
app.use('/reviews', controllers.review);


app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/*', (req, res) => {
    res.redirect('/');
});


app.listen(PORT, () => console.log(`RUNNING ON PORT ${PORT}`));
