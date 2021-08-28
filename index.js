  const express = require('express');
  const path = require('path');
  const PORT = process.env.PORT || 5000
  const app = express();
  
  app.use(express.static(path.join(__dirname, 'views')));
  
  app.get('/', function (req, res) {
    res.render(path.join(__dirname, 'views', 'index.html'));
  });
  
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))