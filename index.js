const express = require('express');
const cors = require('cors');

const app = express();
const port= 3000;

app.get('/', (req,res)=>{
  res.send('hello world');

});
app.use(cors());
app.get('/nuevaruta', (req,res)=>{
  res.send('nueva ruta');

});



app.listen(port,()=>{
  console.log('mi port'+port);

});
