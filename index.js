const express = require('express');

//set up express app
const app = express();

//wymuszenie użycia ścieżki /api => ../routes/api
app.use('/api', routes('./routes/api'));

//listen for request
app.listen(process.env.port || 8082, function(){
  console.log('now listening for requests');
});
