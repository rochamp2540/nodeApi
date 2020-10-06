
const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/data', (req, res) => {
  axios.get("http://data.fixer.io/api/latest?access_key=114615f878cbc0b6df9136800daf2cc1&format=1")
    .then(response => {
      console.log(response.data.rates)
      // let data = response.data.rates
      // console.log(data)
      res.json({ result: response.data.rates })
    }).catch(err => {
      console.log(err)
    })
})

app.listen(4000)