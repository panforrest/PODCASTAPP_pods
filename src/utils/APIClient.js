import superagent from 'superagent'
// import Promise from 'bluebird'
import bluebird from 'bluebird'

export default {

  get: (endpoint, params) => {
  	return new Promise((resolve, reject) => {
  	  superagent
  	  .get(endpoint)
  	  .query(params)
  	  .set('Accept', 'application/json')
  	  .end((err, response) => {
  	  	if (err){
  	  	  reject(err)
  	  	  return
  	  	}

        resolve(response.body)

  	  })
  	})

  }
}