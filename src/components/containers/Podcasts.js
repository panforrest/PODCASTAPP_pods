     //  <div>
     //    <div className="shop-banner animated fadeinup delay-2">
     //      <a href="category.html">
     //        <img src="img/banner2.jpg" alt="" />
     //        <div className="opacity-overlay valign-wrapper">
     //          <div className="valign center width-100">
     //            <h3 className="white-text">Accessories</h3>
     //            <p className="white-text">Watches 2016</p>
     //          </div>
     //        </div>
     //      </a>
     //    </div>

     //    <div className="shop-banner animated fadeinup delay-2">
     //      <a href="category.html">
     //        <img src="img/banner2.jpg" alt="" />
     //        <div className="opacity-overlay valign-wrapper">
     //          <div className="valign center width-100">
     //            <h3 className="white-text">Accessories</h3>
     //            <p className="white-text">Watches 2016</p>
     //          </div>
     //        </div>
     //      </a>
     //    </div>

     //    <div className="shop-banner animated fadeinup delay-2">
     //      <a href="category.html">
     //        <img src="img/banner2.jpg" alt="" />
     //        <div className="opacity-overlay valign-wrapper">
     //          <div className="valign center width-100">
     //            <h3 className="white-text">Accessories</h3>
     //            <p className="white-text">Watches 2016</p>
     //          </div>
     //        </div>
     //      </a>
     //    </div>

     //    <div className="shop-banner animated fadeinup delay-2">
     //      <a href="category.html">
     //        <img src="img/banner2.jpg" alt="" />
     //        <div className="opacity-overlay valign-wrapper">
     //          <div className="valign center width-100">
     //            <h3 className="white-text">Accessories</h3>
     //            <p className="white-text">Watches 2016</p>
     //          </div>
     //        </div>
     //      </a>
     //    </div>
     //  </div>
     // </div> 


      //    const Pods = (this.props.podcasts.all == null) ? null : 
      // (this.props.podcasts.all.map((podcast, i) => {
      //   return(
      //     <li key={podcast.trackId}>{podcast.artistName}</li>
      //   )
      // })) 


import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions' 

class Podcasts extends Component {


  render(){

    const pods = (this.props.podcasts.all == null) ? null : 
      (this.props.podcasts.all.map((podcast, i) => {
        return(
          <li key={podcast.trackId}>{podcast.artistName}</li>
        )
      })) 


  	return(
      <div>
       <ul>
        <div className="shop-banner animated fadeinup delay-2">
          <a href="category.html">
            <img src="img/banner2.jpg" alt="" />
            <div className="opacity-overlay valign-wrapper">
              <div className="valign center width-100">
                <h3 className="white-text">{pods}</h3>
                <p className="white-text">Watches 2016</p>
              </div>
            </div>
          </a>
        </div>
       </ul> 
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
    podcastsReceived: (podcasts) => dispatch(actions.podcastsReceived(podcasts))
  }
}

export default connect(stateToProps, dispatchToProps)(Podcasts)