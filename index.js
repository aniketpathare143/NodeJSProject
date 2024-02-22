const express = require('express');
const { getApi, postApi } = require('./controller/controller')

const app = express()

//body parser
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.listen(4000, (err, data) => {
    if (err) { }
    console.log('Server running on 4000')
})

const ValidateName = (req, res, next) => {
    setTimeout(() => {
        return next();
    }, 4000);
}

app.get('/',ValidateName,getApi)

app.post('/',postApi)

