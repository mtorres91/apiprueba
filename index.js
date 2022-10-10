const express = require('express');

const app = express();
const port= 3000;

app.get('/', (req,res)=>{
  res.send('hello world');

});

app.get('/nuevaruta', (req,res)=>{
  res.send('nueva ruta');

});



app.listen(port,()=>{
  console.log('mi port'+port);

});
