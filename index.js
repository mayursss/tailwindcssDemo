let express = require('express')
const path = require('path');
let app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('layout')
  // res.send('hello world')
})

app.listen(3000,()=>{
  console.log('app started on port 3000');
})