const express = require('express');
const cors = require('cors')
let app = express();
const port = 3000;
const Controller = require('./controller.js')
const parser = require('body-parser')

app.use(cors());
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.post('/api/registration', (req, res)=>{
  Controller.post(req, res)
})
