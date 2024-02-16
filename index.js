const express = require('express');

const app = express()

app.listen(4000, (err, data) => {
    if (err) { }
    console.log('Server running on 4000')
})

const ValidateName = (req, res, next) => {
    setTimeout(() => {
        return next();
    }, 2000);
}

app.get('/name', ValidateName, (req, res, next) => {
    console.log("posting name")
    res.json({ name: "Aniket", id: "2" })
})

