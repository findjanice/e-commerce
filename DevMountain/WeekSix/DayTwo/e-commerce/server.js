var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

var db = mongojs('ecommerce', ['shop']);

var nodePort = 8080;
var port = 27017;

//CRUD

app.post('/api/shops', function(req, res) {
  db.shop.insert(req.body, function(err, result) {
    if (err) {
      return res.status(500).json(err);
    } else {
      return res.json(result);
    }
  });
});

app.get('/api/shops', function(req, res) {
  db.shop.find({}, function(err, ecommerce) {
    if (!err) {
      res.json(ecommerce);
    } else {
      res.status(500).json(err);
    }
  });
});

app.delete('/api/shops', function(req, res) {
  db.shop.remove(req.query,
    function(err, result) {
      if (!err) {
        res.status(418).json(result);
      } else {
        res.status(500).json(err);
      }
    })
})

app.put('/api/shops', function(req, res) {
  db.shop.update(req.query, req.body, function(err, res) {
    if (err) res.status(500).json(err);
    else res.json(result);
  })
})


app.listen(nodePort, function() {
  console.log("Powered by,", nodePort);
});
