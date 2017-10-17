var express = require('express');
var router = express.Router();
var superagent = require('superagent')

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

    // console.log(JSON.stringify(response))
    res.send(response.text)

 //    var data = JSON.parse(response.text)

	// res.json({
	//   confirmation: 'success',
	//   response: data.results
	//  })  	
  })
});

module.exports = router;