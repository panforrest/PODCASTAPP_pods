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