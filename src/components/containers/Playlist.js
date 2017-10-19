// <div className="section center">
//           <h4 className="m-0"><strong>Mobile Coded</strong></h4>
//           <div className="line"></div>
          
//           <p className="text-flow m-0">Create a mobile expirience that you are gonna be proud of. With Eclipse you can create Mobile Websites and Apps.</p>
//         </div> 
import React, { Component } from 'react'
import { Search } from '../presentation'
// import superagent from 'superagent'
import { APIClient } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'
import APlayer from 'aplayer'

class Playlist extends Component {
  constructor(){
    super()
    this.state = {
      // trackList: null,
      player: null
    }
  }

  componentDidMount(){
 
  }

  initializePlayer(list){
    let sublist = []
    if (list.length > 3) { // LIMIT SIZE OF LIST TO 3 
      for (var i=0; i<3; i++) {
        sublist.push(list[i])
      }
    }
    else {
      sublist = Object.assign([], list)
    }

    var ap1 = new APlayer({
        element: document.getElementById('player1'),
        narrow: false,
        autoplay: true,
        showlrc: false,
        mutex: true,
        theme: '#e6d0b2',
        preload: 'metadata',
        mode: 'circulation',
        music: sublist
    });
    // ap1.on('play', function () {
    //     console.log('play');
    // });
    // ap1.on('play', function () {
    //     console.log('play play');
    // });
    // ap1.on('pause', function () {
    //     console.log('pause');
    // });
    // ap1.on('canplay', function () {
    //     console.log('canplay');
    // });
    // ap1.on('playing', function () {
    //     console.log('playing');
    // });
    // ap1.on('ended', function () {
    //     console.log('ended');
    // });
    // ap1.on('error', function () {
    //     console.log('error');
    // }); 
    this.setState({
      trackList: list,
      player: ap1
    })
  }

  searchPodcasts(event){
    if (event.keyCode != 13)
      return

    console.log('searchPodcasts: '+event.target.value)//NOT console.log('searchPosdcasts: '+event.keyCode)
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
    .get(endpoint, null)
    .then((response) => {
      // console.log(JSON.stringify(response))
      this.props.podcastsReceived(response.results)
    })
    .catch((err) => {
      console.log('ERROR: '+JSON.stringify(response))
    })
  }

  componentDidUpdate(){
    console.log('componentDidUpdate: ' + JSON.stringify(this.props.podcasts.selected))
    if (this.props.podcasts.selected == null)
      return

    // grab the feed url, then make request for rss feed
    const feedUrl = this.props.podcasts.selected['feedUrl']
    if (feedUrl == null)
      return

    // if (this.state.trackList != null)
    //   return

    if (this.props.podcasts.trackList != null){
      if (this.state.player == null)
        this.initializePlayer(this.props.podcasts.trackList)
      
      return 
    }
        
    // RESET THE PLAYER:
    if (this.state.player != null){
      this.state.player.pause()
      this.setState({
        player: null
      })
    }     

    // console.log('FEED URL: ' + feedUrl)
    APIClient
    .get('/feed', {url:feedUrl})
    .then((response) => {
      const podcast = response.podcast
      const item = podcast.item

      let list = []
      item.forEach((track, i) => {
        console.log('TRACK: ' + JSON.stringify(track))
        let trackInfo = {}
        trackInfo['title'] = track.title[0]
        trackInfo['author'] = this.props.podcasts.selected.collectionName
        trackInfo['pic'] = this.props.podcasts.selected['artworkUrl600']

        let enclosure = track.enclosure[0]['$']
        trackInfo['url'] = enclosure['url']
        list.push(trackInfo)
      })

      this.props.trackListReady(list)
    })
    .catch((err) => {
      // alert(err)
      console.log('ERROR: '+error.message)
    })
  }

  render(){

  	return(
  	  <div>	
	  	  <div style={{paddingTop:64}}className="hero-header bg-shop animated fadeindown">
          <div className="p-20 animated fadeinup delay-1">
            <div style={{background:'#fff'}} id="player1" className="aplayer"></div>  
          </div>
        </div> 

  	    <Search onSearch={this.searchPodcasts.bind(this)}/> 
	    </div>    
  	)
  }
}

const stateToProps = (state) => {
  return {
    podcasts: state.podcast
  }
}

const dispatchToProps = (dispatch) => {
  return {
    podcastsReceived: (podcasts) => dispatch(actions.podcastsReceived(podcasts)),
    trackListReady: (list) => dispatch(actions.trackListReady(list))
  }
}

export default connect(stateToProps, dispatchToProps)(Playlist)