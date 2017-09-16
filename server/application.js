var express = require('express'),
  cors = require('cors'),
  app = express(),
  faker = require('faker');

app.set('port', process.env.PORT || 3500);

app.use(cors());

var bookData = [];

for(var i = 0; i < 30; i++ ) {
  bookData.push({
    title: faker.lorem.words(),
    author: faker.name.findName(),
    author_image: faker.image.avatar(),
    release_date: faker.date.recent(),
    image: faker.image.abstract(),
    price: faker.commerce.price(),
    short_description: faker.lorem.sentence(),
    long_description: faker.lorem.paragraph()
  });
}

app.get('/api', function(req, res) {
  res.json(bookData);
});

var server = app.listen(app.get('port'), function() {
  console.log('Server up: http://localhost:' + app.get('port'));
});
