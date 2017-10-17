var express = require('express');
var router = express.Router();
var superagent = require('superagent')

var xml2js = require('xml2js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // var term = req.params.term

  var url = req.query.url
  if (url == null){
    res.json({
      confirmation: 'fail',
      message: 'Missing Feed Url'
    })
    return
  }

  superagent
  .get(url)
  .query(null)
  // .set('Accept', 'application/json')
  .end(function(err, response){
    if (err){
      res.json({
      	confirmation: 'fail',
      	message: err
      })
      return
    }

    var xml = response.text
    xml2js.parseString(xml, function(err, result){
      // console.log(result)
      res.json(result) 
    })

    // res.send(response.text) 	
  })
});

module.exports = router;