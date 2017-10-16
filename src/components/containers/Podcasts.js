import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions' 

class Podcasts extends Component {

  render(){

    const list = this.props.podcasts.all || []


  	return(
      <div>
        { list.map((podcast, i) => {
            return <div key={podcast.trackId} className="shop-banner animated fadeinup delay-2">
              <a href="#">
                <img src={podcast.artworkUrl60} alt="" />
                <div className="opacity-overlay valign-wrapper">
                  <div className="valign center width-100">
                    <h3 className="white-text">{podcast.artistName}</h3>
                    <p className="white-text">{podcast.collectionName}</p>
                  </div>
                </div>
              </a>
            </div>
          })
        }
      </div>   
  	)
  }
}

const stateToProps = (state) => {
  return {
    podcasts: state.podcast
  }
}


export default connect(stateToProps)(Podcasts)