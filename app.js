const express = require('express');

const app = express();

app.use(express.static('stock'));

app.get('/',function( req,res ){

  res.sendFile(__dirname +'/index.html');
});
app.post('/projects', function( req, res){
  res.sendFile(__dirname +'/projects.html');
});
app.post('/home', function(req,res){
  res.redirect('/');
})
app.listen(process.env.PORT||3000, function(req, res){
  console.log('Server initiated');
});
