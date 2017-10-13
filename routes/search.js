var express = require('express');
var router = express.Router();
var superagent = require('superagent')

/* GET users listing. */
router.get('/:term', function(req, res, next) {
  var term = req.params.term

  var url = 'http://itunes.apple.com/search'

  superagent
  .get(url)
  .query({media:'podcast', term:term})
  .set('Accept', 'application/json')
  .end(function(err, response){
    if (err){
      res.json({
      	confirmation: 'fail',
      	message: err
      })
      return
    }

    console.log(JSON.stringify(response))

    var data = JSON.parse(response.text)

	res.json({
	  confirmation: 'success',
	  response: data.results
	 })  	
  })

  // res.json({
  // 	confirmation: 'success',
  // 	term: term
  // })


  // res.send('respond with a resource');
});

module.exports = router;