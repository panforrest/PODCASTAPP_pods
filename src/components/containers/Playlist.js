import React, { Component } from 'react'
import { Search } from '../presentation'
// import superagent from 'superagent'
import { APIClient } from '../../utils'

class Playlist extends Component {

  searchPodcasts(event){
    if (event.keyCode != 13)
      return

    console.log('searchPosdcasts: '+event.target.value)//NOT console.log('searchPosdcasts: '+event.keyCode)
    var endpoint = '/search/' + event.target.value
    // console.log('url: '+url)

    // superagent
    // .get(url)
    // .query(null)
    // // .set('Accept', 'json/application')
    // .end((err, data) => {  //THE ORDER OF err, data SHOULD NOT SWITCH
    //   if (err) {
    //  	alert(err)
    //   	return
    //    }
    //    console.log(JSON.stringify(data.body))
    // })
    APIClient
    // .get('http://localhost:3000/search/sports')
    .get(endpoint, null)
    .then((response) => {
      console.log(JSON.stringify(response))
    })
    .catch((err) => {
      alert(err)
    })
  }

  render(){

  	return(
  	  <div>	
	  	<div className="hero-header bg-shop animated fadeindown">
	      <h1 className="hero-title">Play</h1>
	    </div>
	    <Search onSearch={this.searchPodcasts.bind(this)}/> 
	  </div>    
  	)
  }
}

export default Playlist