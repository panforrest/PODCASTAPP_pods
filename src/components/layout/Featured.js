   //        <div className="clr"></div> 
   //          <Footer />         
   //      </div>
   //      <Nav />       
   //    </div> 
   //   </div>
   // )
import React, { Component } from 'react'
import { Footer, Nav, Search } from '../presentation'
import { Podcasts, Playlist } from '../containers'

class Featured extends Component {
  render(){
  	return(
  	 <div id="main"> 
      <div id="content" className="main animated fadein">        

        <Playlist />
        <Search />

        <div className="animated fadeinup delay-1">
          <Podcasts />          
          <div className="clr"></div>          
        </div>
        <Footer />
      </div> 
      <Nav />
     </div>
  	)
  }
}

export default Featured