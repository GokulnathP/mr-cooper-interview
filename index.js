const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded(
    { extended: true }
));

const userRoute = require('./routes/user');
const serviceRoute = require('./routes/service');

app.use('/user', userRoute);
app.use('/service', serviceRoute);

app.use('/', (req, res) => {
    console.log(req);
    res.send('Welcome');
});

mongoose.connect(
    'mongodb+srv://Gokul:test@cluster0.eme3k.mongodb.net/Home?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log('DB Connected Successfully');
        app.listen(5000, () => {
            console.log('Server started Successfully');
        });
    });