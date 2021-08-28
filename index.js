// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000
// const app = express()

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('index.html'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// const path = require('path')
// express()
// .use('/', express.static(path.join(__dirname, 'src')))

// express

// app.get('/', function (req, res) {
//     res.render('views/index');
//   });

// app.listen(PORT, () => {
//     console.log(`Example app listening at http://localhost:${PORT}`)
//   })
  
  const express = require('express');
  const path = require('path');
  const app = express();
  
  app.use(express.static(path.join(__dirname, 'views')));
  
  app.get('/', function (req, res) {
    res.render(path.join(__dirname, 'views', 'index.html'));
  });
  
  app.listen(5000);